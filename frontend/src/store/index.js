import { createStore } from "vuex"
import axios from "axios";

export default createStore({
	state: {
		user: null,
	},
	getters: {},
	mutations: {
		setUser(state, user) {
			state.user = user;
		},
	},
	actions: {
		async login({ commit }, username) {
			try {
				const response = await axios.post(`/api/users/login/${username}`);
				commit("setUser", response.data);
			} catch (error) {
				console.error("Login failed:", error);
				throw error;
			}
		},
	},
	modules: {
		// Define your modules here
	},
})
