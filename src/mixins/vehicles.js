import IndexedDBHandler from '/src/mixins/db.js';

export const vehicleMixin = {
  data() {
    return {
      vehicles: []
    };
  },
  methods: {
    async addVehicle(vehicle) {
      const db = new IndexedDBHandler('vehicles', 1);
      await db.openDB('vehicles', 'id');
      const result = await db.add('vehicles', vehicle);
      if (result) {
        this.vehicles.push(vehicle);
        return true;
      }
      return false;
    },

    async getVehicles() {
      const db = new IndexedDBHandler('vehicles', 1);
      await db.openDB('vehicles', 'id');
      this.vehicles = await db.getAll('vehicles');
    }
  }
};

