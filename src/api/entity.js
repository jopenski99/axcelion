import { api } from '../boot/axios'

export default {
	async searchEntity(txt) {
		return await api.get('/entities/search', { params: { ...txt } })
			.then(response => {
				return response.data
			})
	},
	async insertEntity(form) {
		return await api.post('/entities/create', form)
		  .then(response => {
			console.log(response)
		  })
	  },
	async fetchExpenses(txt) {
		return await api.get('/entities/all-expenses', { params: { ...txt } })
			.then(response => {
				return response.data.entity
			})
	},
	api
}