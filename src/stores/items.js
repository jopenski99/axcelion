import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    items: [{
      id: 1001,
      type: 'paper',
      sub_category: 'A4',
      size: 'A4',
      pieces_per_pack: 100,
      
    }]
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
