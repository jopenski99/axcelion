import { defineStore } from 'pinia';
import { date } from 'quasar'



export const useExpensesStore = defineStore('expenses', {
	state: () => ({
		stackedTabularData: []
	}),
	actions: {
		tabulateExpense(payload) {
			let data = []
			console.log(payload)
			payload.forEach(element => {
				let value = 0 
				element.services.forEach(service => {
					value += service.monthly
				})
				data.push({
					name: element.name,
					totalValue : value
				})
			});
			this.stackedTabularData = data
		}
	},
});
