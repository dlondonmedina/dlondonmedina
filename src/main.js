import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueGtag from "vue-gtag"
import Title from './components/Title.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faUserGraduate, faCode, faCodeBranch, faFeatherAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faGithub)
library.add(faLinkedin)
library.add(faTwitter)
library.add(faEnvelope)
library.add(faUserGraduate)
library.add(faCodeBranch)
library.add(faFeatherAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('vue-title', Title)

Vue.config.productionTip = false

Vue.use(VueGtag, {
  config: { id: "UA-93487852-1"}
}, router);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
