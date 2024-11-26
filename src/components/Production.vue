<script>
import productionLeftImg from '@/assets/images/production_left-img.jpg';
import productionMiddleImg from '@/assets/images/production_middle-img.jpg';
import productionRightImg from '@/assets/images/production_right-img.jpg';

export default {
    data() {
        return {
            productionLeftVisible: false,
            productionMiddleVisible: false,
            productionRightVisible: false,
            productionLeftImg,
            productionMiddleImg,
            productionRightImg,
            timers: [], // タイマーのIDを管理
        };
    },
    methods: {
        startAnimation() {
        // 最初の要素を表示
            this.productionLeftVisible = true;

            // 次の要素を順番に表示
            setTimeout(() => {
                this.productionMiddleVisible = true;
            }, 500);// １秒後に middle を表示

            setTimeout(() => {
                this.productionRightVisible = true;
            }, 1000);// ２秒後に right を表示

            // タイマーIDを保存
            this.timers.push(middleTimer, rightTimer);
        },

        resetAnimation() {
        // 全て非表示にリセット
            this.productionLeftVisible = false;
            this.productionMiddleVisible = false;
            this.productionRightVisible = false;

            // タイマーをクリア
            this.timers.forEach(timer => clearTimeout(timer));
            this.timers = []; // タイマーIDをリセット
        },
    },
}
</script>

<template>
        <div>
            <div class="production" @mouseenter="startAnimation" @mouseleave="resetAnimation">
              <div class="production_main-title">
                <h1 class="production_content-title">MEG's Production</h1>
                  </div>
                <div class="production_main">
                    <div class="production_left-content" :class="{ 'animate': productionLeftVisible }">
                        <div class="production_left">
                            <img :src="productionLeftImg" alt="productionLeftImg" class="production_left-img">
                            <h2 class="production_left-title">Website<br>Production</h2>
                        </div>            
                    </div>
                    <div class="production_middle-content" :class="{ 'animate': productionMiddleVisible }">
                        <div class="production_middle">
                            <img :src="productionMiddleImg" alt="productionMiddleImg" class="production_middle-img"> 
                            <h2 class="production_middle-title">Translate<br>Production</h2>
                        </div>           
                    </div>
                    <div class="production_right-content" :class="{ 'animate': productionRightVisible }">
                        <div class="production_right">
                            <img :src="productionRightImg" alt="productionRightImg" class="production_right-img">
                            <h2 class="production_right-title">Design<br>Production</h2>
                        </div>              
                    </div>
                </div>
            </div>
        </div>
</template>

<style scope>
.production {
    background-color: rgb(181, 174, 255);
    padding-bottom: 50px;
    width: 100%;
    left: 0;
}

.production_main-title {
    width: 100%;
    justify-items: center;
    padding-top: 100px;
}

.production_content-title {
    font-weight: bold;
    font-size: 3rem;
    color: black;
}

.production_main {
  display: flex;
  justify-content: space-between;/** コンテンツ間に余白を配置 */
  gap: 30px;/** コンテンツ間のスペース */
  padding: 20px;
  text-align: center;
  margin-top: 50px;
}

/** アニメーションの定義 */
@keyframes float-up {
    0% {
        opacity: 0;
        transform: translateY(50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/** 各コンテンツにアニメーションを適用 */
.production_left-content,
.production_right-content,
.production_middle-content {
    width: 45%;
    padding: 50px;
    align-items: center;
    display: flex;
    flex-direction: column; /** 縦並びに設定 */
    text-align: center;
    opacity: 0;
    transform: translateY(50px);
}

.production_left-content.animate,
.production_right-content.animate,
.production_middle-content.animate {
    opacity: 1;
    animation: float-up 1s ease-out forwards;
}

.production_left-img,
.production_middle-img,
.production_right-img {
  width: 200px; /* 正方形の幅 */
  height: 200px; /* 正方形の高さ */
  border-radius: 50%; /* 円形にする */
  object-fit: cover; /* 中央で画像を切り取る */
  aspect-ratio: 1 / 1; /* 正方形のアスペクト比を維持 */
  margin-right: 20px;
}

</style>