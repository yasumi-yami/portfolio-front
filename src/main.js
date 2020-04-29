// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
// internal icons
import { faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle, faArrowUp, faAngleRight, faAngleLeft, faAngleDown, faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App'
import router from './router'

library.add(faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle, faArrowUp, faAngleRight, faAngleLeft, faAngleDown, faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload)

Vue.component('vue-fontawesome', FontAwesomeIcon)

Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
