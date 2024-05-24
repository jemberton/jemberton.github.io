import { createApp } from 'vue'
import './assets/styles/_global.scss'
import App from './App.vue'
import { createPinia } from 'pinia'

import { MotionPlugin } from '@vueuse/motion'

import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAddressCard, faArrowRightLong, faBars, faBookBookmark, faCode, faFolderTree, faHome, faLocationArrow, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faFolderTree, faHome, faAddressCard, faGithub, faCode, faBookBookmark, faSquareGithub, faPaperPlane, faBars, faLocationArrow, faArrowRightLong)

const app = createApp(App)

//# Vue Dev Tools
app.config.performance = false

app.use(createPinia())
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
