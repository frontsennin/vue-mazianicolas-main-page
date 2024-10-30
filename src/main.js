import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';
import './styles/main.scss';

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.use(ToastPlugin);

app.mount('#app');
