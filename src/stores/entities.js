import { defineStore } from 'pinia';
import { date } from 'quasar'
import api from "../api/entity.js";
import { useExpensesStore } from './expense.js';

export const useEntitiesStore = defineStore('entities', {
  state: () => ({
    entities: [
      {
        name: 'Gcash',
        services: [
          {
            name: 'Ggives',
            outstanding: 11400,
            monthly_dues: 3800,
            due: date.buildDate({ year: 2024, date: 5, month: 2 })
          }
        ]
      },
      {
        name: 'BPI',
        services: [
          {
            name: 'Amore Credit Card',
            outstanding: 45000,
            monthly_dues: 1700,
            due: date.buildDate({ year: 2024, date: 5, month: 2 })
          }
        ]
      },
      {
        name: 'UB',
        services: [
          {
            name: 'Personal Loan',
            outstanding: 30000,
            monthly_dues: 10000,
            due: date.buildDate({ year: 2024, date: 5, month: 2 })
          }
        ]
      },
      {
        name: 'Security Bank',
        services: [
          {
            name: 'Credit Card',
            outstanding: 37000,
            monthly_dues: 9250,
            due: date.buildDate({ year: 2024, date: 5, month: 2 })
          }
        ]
      },
      {
        name: 'LnL',
        services: [
          {
            name: 'Washing Machine',
            outstanding: 15400,
            monthly_dues: 2120,
            due: date.buildDate({ year: 2024, date: 5, month: 2 })
          }
        ]
      },
      {
        name: 'EastWest',
        services: [
          {
            name: 'Carloan (Montero)',
            outstanding: 1800000,
            monthly_dues: 25000,
            due: date.buildDate({ year: 2024, date: 5, month: 2 })
          }
        ]
      },
      {
        name: 'Home Credit',
        services: [
          {
            name: 'Credit Card',
            outstanding: 7000,
            monthly_dues: 700,
            due: date.buildDate({ year: 2024, date: 5, month: 2 })
          },
          {
            name: 'Predator Laptop',
            outstanding: 89000,
            monthly_dues: 3200,
            due: date.buildDate({ year: 2024, date: 5, month: 2 })
          },
          {
            name: 'IPhone 11',
            outstanding: 45000,
            monthly_dues: 3200,
            due: date.buildDate({ year: 2024, date: 5, month: 2 })
          },
        ]
      },
    ],
  }),
  
  actions: {
    async insertEntity(form) {
      return await api.insertEntity(form)
    },
    async searchEntity(txt) {
      console.log(txt)
      return await api.searchEntity(txt)
    },
    async getAllExpense() {
      let expenses = await api.fetchExpenses();
      const expensesStore = useExpensesStore();
      expensesStore.tabulateExpense(expenses);
    }
  },
});
