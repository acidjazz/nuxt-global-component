import Vue from 'vue'
import Modal from './Modal.vue'

function open(propsData) {
  const instance = Vue.extend(Modal)
  return new instance({
    el: document.getElementById('global').appendChild(document.createElement('div')),
    propsData
  })
}

const ModalProgrammatic = {
  alert (message) {
    return open({message: message})
  }
}

const Plugin = {
  install(Vue) {
    Vue.prototype['$modal'] = ModalProgrammatic
  }
}

Vue.use(Plugin)
export default Plugin
