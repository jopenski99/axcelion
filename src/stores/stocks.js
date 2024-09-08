import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    stocks: [{
      id: 1001,
      item_id: 1,
      pack_quantity: 10,
      piece_quantity: 1000,
      retail_price: 1,
      stock_price: 400,
      total_price: 4000,
      created_at: '2021-01-01 00:00:00',
      updated_at: '2021-01-01 00:00:00',
    }]
  }),
  getters: {
    getInventory: (state) => state.stocks,
  },
  actions: {
    addStocks(stocks) {
      this.stocks.push(stocks);
    },
    
  },
});
