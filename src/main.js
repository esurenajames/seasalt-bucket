import './assets/app.css'; // Your CSS
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router'; // Import the router

const app = createApp(App);

app.use(createPinia());
app.use(router); 
app.mount('#app');
