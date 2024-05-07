import { createApp } from 'vue'
import './assets/styles/_global.scss'
import App from './App.vue'

import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAddressCard, faBookBookmark, faCode, faFolderTree, faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faFolderTree, faHome, faAddressCard, faGithub, faCode, faBookBookmark)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
