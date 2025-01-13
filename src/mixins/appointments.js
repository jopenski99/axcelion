
import IndexedDBHandler from '/src/mixins/db.js';

export const appointmentsMixin = {
  data() {
    return {
      appointments: []
    };
  },
  methods: {
    async addAppointments(transaction) {
      const db = new IndexedDBHandler('appointments', 1);
      await db.openDB('appointments', 'id');
      const result = await db.add('appointments', transaction);
      if (result) {
        this.appointments.push(transaction);
        return true;
      }
      return false;
    },
    async getAppointments() {
      const db = new IndexedDBHandler('appointments', 1);
      await db.openDB('appointments', 'id');
      this.appointments = await db.getAll('appointments');
    }
  }
};

