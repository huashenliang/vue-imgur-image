import api from '../../api/imgur';
import qs from 'qs';

const state = {
    token: null
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
    },
    finalizeLogin: ({commit}, hash) => {
        const queryString = qs.parse(hash.replace('#', ''));

        commit('setToken', queryString.access_token);
    }
};

const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
}; 

export default { state, getters, actions, mutations}

"https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=REQUESTED_RESPONSE_TYPE&state=APPLICATION_STATE"
