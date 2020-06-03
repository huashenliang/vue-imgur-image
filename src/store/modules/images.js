import api from '../../api/imgur'
import {router} from '../../main';

const state = {
  images : []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  async fetchImages({rootState, commit}) {
    const {token} = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data)
  },

  async updateImages({rootState}, images) {
    //GET the access token
    const {token} = rootState.auth;

    //call API to do the upload
    await api.uploadImages(images, token)

    //Redirect to Imagelist component
    router.push('/');
  }
};
 
const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

export default {state, getters, actions, mutations};