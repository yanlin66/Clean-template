import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex);

const state = {
	userInfo: null, //用户信息
}

export default new Vuex.Store({
	state,
	getters
})
