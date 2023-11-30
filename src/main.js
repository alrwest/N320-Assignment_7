import { createApp } from 'vue'
import App from './App.vue'
import buttonsUtil from './components/utils/buttonsUtil.vue'
import MemberData from './components/member-data.vue'
import TeamForm from './components/team-form.vue'

const app = createApp(App)
app.component('member-data', MemberData)
app.component('team-form', TeamForm)
app.component('buttons-util', buttonsUtil)
app.mount('#app')
