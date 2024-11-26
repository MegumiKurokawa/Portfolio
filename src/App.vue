<script>
import HomePage from './components/HomePage.vue';
import AboutUs from './components/AboutUs.vue';
import Work from './components/Work.vue';
import Production from './components/Production.vue';
import ContactUs from './components/ContactUs.vue';

import { ref } from 'vue';

export default {
  name: 'App',
  components: {
    HomePage,
    AboutUs,
    Work,
    Production,
    ContactUs,
  },

  setup() {
    const isMenuVisible = ref(false);

    function showMenu() {
      isMenuVisible.value = true;
    }

    function hideMenu() {
      isMenuVisible.value = false;
    }

    return {
      isMenuVisible,
      showMenu,
      hideMenu,
    };
  },
};
//ref は Vue の Composition API の機能のひとつでリアクティブデータ(いちいち監視しなくても自動で監視をしてくれる役割)を作成します
//isMenuVisible はメニューの表示状態を管理するための変数で、false で初期化されています(始めは非表示の状態)
//.value プロパティにアクセスすることで、このリアクティブな変数の値を取得したり、更新したりできる
//showMenu はメニューを表示するための関数
//hideMenu はメニューを非表示にするための関数
//テンプレート内で <div v-if="isMenuVisible"> のように使用すると、isMenuVisible が true の時だけメニューが表示され、false の時は非表示になる。それをイベントによって条件を付けると動的なUIが作れる
</script>

<template>
  <header @mouseleave="hideMenu">
    <!--headerに@mouseleave="hideMenu"を追記することによってホバーエリア(menu-iconとmenu-dropdown)からカーソルが離れた際にhideMenuを発火しmenuを閉じるように設定している-->
    <!--menu-icon内の@mouseleave="hideMenu"をここに持ってきた-->
    <div class="menu-icon" @mouseover="showMenu">
      <!--@mouseoverはカーソルが要素に乗った時に発火、@mouseleaveはカーソルが要素から離れた時に発火。<div class="menu-icon" @mouseover="isMenuVisible = true" @mouseleave="isMenuVisible = false">の設定だとカーソルがmenu-iconから離れた瞬間にmenu-dropdownが閉じてしまうのでmenu-dropdownからmenuの選択ができない。そこでmenu自体にも@mouseoverと@mouseleaveを追記する-->
      <div></div>
      <div></div>
      <div></div>
      <!--上記の空のdivタグにはハンバーガーメニューが入るためstyle内で設定している-->
    </div>
    <div v-if="isMenuVisible" class="menu-dropdown" id="menu" @mouseover="showMenu" @mouseleave="hideMenu"><!--こちらにも@mouseoverと@mouseleave(どちらもホバーイベント用)を設定することによりmenu-dropdownがそのまま表示されるようになった-->
      <!--クリックイベントにしたい場合はホバーイベントの代わりに@clickを使用する-->
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <!--Vue.jsの検証ページではul+liのタグは表示がされなかったためリストタグではなくaタグをそのまま配置している-->
      <!-- ＜Vue内でページごとにリンクを作成する方法１＞ src/router/index.jsパスでファイルを作成する -->
    </div>
  </header>

  <main>
    <section id="home">
      <HomePage />
    </section>
    <section id="about">
      <AboutUs />
    </section>
    <section id="work">
      <Work />
    </section>
    <!--<section id="production">
      <Production />
    </section>-->
    <section id="contact">
      <ContactUs />
    </section>
  </main>

</template>

<style scoped>
header {
  width: 100%;
  height: 80px;
  line-height: 5;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(236, 234, 234);
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* iconのサイズやicon-containerをflexに変更するとheaderの高さが合わせて変更されていた->headerにheightを設定することでheaderの高さが固定され他のサイズに影響を受けることがなくなった */

.menu-icon {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.menu-icon div {
  width: 30px;
  height: 3px;
  background-color: black;
  margin: 4px 0;
  margin-left: 3rem;
  border-radius: 30%;
}

.menu-dropdown {
  position: absolute;
  top: 80px;
  width: 150px;
  background-color: rgb(236, 234, 234);
  color: black;
  display: flex;
  flex-direction: column;
}

.menu-dropdown nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-dropdown nav ul li a {
  color: black;
  text-decoration: none;
  padding: 5px 0;
  display: block;
  background-color: rgb(236, 234, 234);
  text-align: center;
}

.menu-dropdown nav ul li a:hover {
  text-decoration: none;
  background-color: black;
  font-size: 1.1rem;
  color: white;
}

a:hover {
  color: inherit;
  text-decoration: none;
}

main {
  width: 100%;
  margin-top: 80px;
  height: calc(100vh - 80px);
  overflow: auto;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
