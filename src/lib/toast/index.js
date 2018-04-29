import Vue from 'vue'
import Toast from './toast.vue'

Toast.installMessage = function (options) {
  if (options === undefined || options === null) {
    options = {
      msg: ''
    }
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      msg: options
    }
  }
  let toastMessage = Vue.extend(Toast)
  let component = new toastMessage({
    data: options
  }).$mount()
  document.querySelector('body').appendChild(component.$el)
}

export default Toast
