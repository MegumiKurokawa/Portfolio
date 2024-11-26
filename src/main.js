import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 作成した Router をインポート

createApp(App).use(router).mount('#app');
// Router を Vue アプリに登録してマウントする
// .use(router)を追記
// ＜Vue内でページごとにリンクを作成する方法３＞ App.vue 内でルーティングを使用する