export default class IndexedDBHandler {
  constructor(databaseName, version) {
    this.databaseName = databaseName;
    this.version = version;
    this.db = null;
  }

  openDB(storeName, keyPath) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.databaseName, this.version);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath });
        }
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve(this.db);
      };

      request.onerror = (event) => {
        reject(`Database error: ${event.target.errorCode}`);
      };
    });
  }

  add(storeName, data) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.add(JSON.parse(JSON.stringify(data))); // Clone the object

      request.onsuccess = () => resolve(data);
      request.onerror = (event) => reject(`Add error: ${event.target.errorCode}`);
    });
  }

  get(storeName, key) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.get(key);

      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = (event) => reject(`Get error: ${event.target.errorCode}`);
    });
  }

  getAll(storeName) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(storeName, 'readonly');
      const store = transaction.objectStore(storeName);
      const request = store.getAll();

      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = (event) => reject(`Get all error: ${event.target.errorCode}`);
    })
  } 

  update(storeName, data) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.put(JSON.parse(JSON.stringify(data))); // Clone the object

      request.onsuccess = () => resolve(data);
      request.onerror = (event) => reject(`Update error: ${event.target.errorCode}`);
    });
  }

  delete(storeName, key) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(storeName, 'readwrite');
      const store = transaction.objectStore(storeName);
      const request = store.delete(key);

      request.onsuccess = () => resolve(key);
      request.onerror = (event) => reject(`Delete error: ${event.target.errorCode}`);
    });
  }
}


