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
				console.log(response.data);
				commit("setUser", response.data); // assuming response.data is the user
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
