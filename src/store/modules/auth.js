import api from '../../api/imgur';
import qs from 'qs';
import {router} from '../../main';

const state = {
    token: window.localStorage.getItem('imgur_token')
};

const getters = {
    isLoggedIn: state => !!state.token
};

const actions = {
    login: () => {
        api.login();
    },
    logout: ({commit}) => {
        commit('setToken', null);
        window.localStorage.removeItem('imgur_token');
        router.push('/');
    },
    finalizeLogin: ({commit}, hash) => {
        const queryString = qs.parse(hash.replace('#', ''));

        commit('setToken', queryString.access_token);
        window.localStorage.setItem('imgur_token', queryString.access_token);
        router.push('/');
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
}; 

export default { state, getters, actions, mutations}

