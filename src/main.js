import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import solid icons */
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons'
/* import regular icons */
import { faStar as starRegular } from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(starSolid, starRegular)

// <font-awesome-icon icon="fa-solid fa-star" />
// <font-awesome-icon icon="fa-regular fa-star" />


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
