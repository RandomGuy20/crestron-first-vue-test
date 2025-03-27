import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
//import * as CrComLib from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib'

import App from './App.vue'
import AudioPage from './components/Audio/AudioPage.vue';
import VideoPage from './components/Video/VideoPage.vue';


//Not doing SPA -- this is for future
const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/video' },
      { path: '/audio', component: AudioPage },
      { path: '/video', component: VideoPage },
    ],
  });
  



  
  const app = createApp(App);
  // Make CrComLib globally available
 // app.config.globalProperties.$CrComLib = CrComLib;


  app.use(router);
  app.mount('#app');


