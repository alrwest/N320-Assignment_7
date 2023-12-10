import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import buttonsUtil from './components/utils/buttonsUtil.vue'
import cardTemplate from './components/utils/card-template.vue'
import cardHeader from './components/utils/card-header.vue'
import cardDetail from './components/utils/card-detail.vue'
import MemberData from './components/member-data.vue'
import TeamForm from './components/team-form.vue'
import NavigationBar from './components/NavigationBar.vue'

const app = createApp(App)
app.component('member-data', MemberData)
app.component('team-form', TeamForm)
app.component('buttons-util', buttonsUtil)
app.component('card-template', cardTemplate)
app.component('card-header', cardHeader)
app.component('card-detail', cardDetail)
app.component('nav-bar', NavigationBar)

app.use(router)
app.mount('#app')
