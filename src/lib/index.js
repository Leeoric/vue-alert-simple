import VueToast from './toast/index'
import VueAlert from './alert/index'

const install = function (Vue) {
  const is_ios = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent)
  }

  Vue.component(VueToast.name, VueToast)
  Vue.prototype.$toast = VueToast.installMessage

  Vue.component(VueAlert.name, VueAlert)

  /* for iOS 10, users can now pinch-to-zoom even when a website sets user-scalable=no in the viewport. */
  document.documentElement.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
      e.preventDefault()
    }
  }, false)

  /* iOS Safari - Disable double click to zoom */
  if (is_ios()) {
    let lastTouchEnd = 0;
    document.documentElement.addEventListener('touchend', (e) => {
      let now = (new Date()).getTime()
      if (now - lastTouchEnd < 300) {
        e.preventDefault()
      }
      lastTouchEnd = now
    }, false)
  }

  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(paykeyboard);
  }
}

export default install
