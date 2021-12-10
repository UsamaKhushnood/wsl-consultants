import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import axios from 'axios'
Vue.use(Vuex)
const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false,
  token: localStorage.getItem('token') || '',
  authentication_token: false,
  showSpinner: false,
  user: '',
  current_student: '',
  allStudent: '',
}


axios.defaults.baseURL = process.env.VUE_APP_API_URL
const token = localStorage.getItem('token');
axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'application/json'


const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  }, SET_SPINNER(state, spinner) {
    console.log(spinner)
    state.showSpinner = spinner;
  },
  SET_AUTH_TOKEN(state, data) {
    state.authentication_token = data;
  },
  SET_CURRENT_STUDENT(state, data) {
    state.current_student = data;
  },
  SET_USER(state, data) {
    state.user = data;
    console.log('sd',data)
  },
  SET_MODEL_STATUS(state, data) {
    state.model_status = data;
  },
  SET_REGISTER_DATA(state, data) {
    state.register_data = data;
  },
  SET_All_STUDENT(state, data) {
    state.allStudent = data;
  },
}
  const getters = {
    getSpinner(state) {
      return state.showSpinner;
    },
    getUser(state) {
      return state.user;
    },
    getSelectedStudent(state) {
      return state.current_student;
    },
    getReceiver(state) {
      return state.receiver_data;
    },
    getReceiverMsg(state) {
      return state.receiver_msg;
    },
    getToken(state) {
      return state.authentication_token;
    },
    getModelStatus(state) {
      return state.model_status;
    },
    getSelectedEvent(state) {
      return state.selected_event;
    },
    getEventReload(state) {
      return state.reload_event;
    },
    getRegisterData(state) {
      return state.register_data;
    },
    getEvent(state) {
      return state.all_event;
    },
    callGetStudent(state) {
      return state.allStudent;
    },
  }
  const actions = {
   
    HTTP_POST_REQUEST({commit,state},data){
      return new Promise((resolve,reject)=>{
        axios.post(data.url, data.payload)
          .then(function (response) {
            resolve(response)
          })
          .catch(function (error) {
            reject(error)
          });
      })
    },
  
    HTTP_GET_REQUEST({commit,state},url){
      return new Promise((resolve,reject)=>{
        axios.get(url)
          .then(function (response) {
            resolve(response)
          })
          .catch(function (error) {
            reject(error)
          });
      })
    },
  
  }



export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [new VuexPersistence().plugin]
})