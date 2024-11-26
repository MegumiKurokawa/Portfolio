<script>
import workLeftImg from '@/assets/images/workleft-img.jpg';
import workRightImg from '@/assets/images/workright-img.jpg';
import productionLeftImg from '@/assets/images/production_left-img.jpg';

export default {
    data() {
        return {
            workLeftVisible: false,
            workRightVisible: false,
            workLeftImg,
            workRightImg,
            productionLeftImg,
            timers: [],
        };
    },
    methods: {
    startAnimation() {
            this.workLeftVisible = true; // アニメーションを開始

            const rightTimer = setTimeout(() => {
                this.workRightVisible = true;
            }, 500);

            this.timers.push(rightTimer);
    },
    resetAnimation() {
        this.workLeftVisible = false; // アニメーションをリセット
        this.workRightVisible = false;

        this.timers.forEach(timer => clearTimeout(timer));
        this.timers = [];
    },
  },
}
</script>

<template>
        <div>
            <div class="work" @mouseenter="startAnimation" @mouseleave="resetAnimation">
                <div class="work_main-title">
                        <h1 class="work_content-title">Our Work</h1>
                    </div>
                <div class="work_main"> 
                    <div class="work_left-content" :class="{ 'animate': workLeftVisible }">
                        <div class="work_left">
                            <h2 class="work_left-title">LESTER's<br>work</h2>
                            <img :src="workLeftImg" alt="workLeftImg" class="work_left-img">
                            <div class="work_left-title">YouTube</div>
                            <div class="work_left-name"><a href="#">JAmSaM</a></div>
                        </div>            
                    </div>
                    <div class="work_right-content" :class="{ 'animate': workRightVisible }">
                        <div class="work_right">
                            <h2 class="work_left-title">MEG's<br>work</h2>
                            <img :src="productionLeftImg" alt="workRightImg" class="work_right-img">
                            <h2 class="work_right-title">WebSite</h2>
                        </div>              
                    </div>
                </div>
            </div>
        </div>
</template>

<style scope>
.work {
    background: linear-gradient(135deg,  rgba(5, 253, 237, 0.908), rgb(223, 82, 255));
    width: 100%;
    left: 0;
    padding-bottom: 50px;
}

.work_main {
  display: flex;
  justify-content: space-between;/** コンテンツ間に余白を配置 */
  align-items: center;
  gap: 30px;/** コンテンツ間のスペース */
  padding: 20px;
  text-align: center;
}

.work_main-title {
  width: 100%;
  justify-items: center;
  padding-top: 100px;
}

.work_content-title {
    font-weight: bold;
    font-size: 3rem;
}

.work_left,
.work_right {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 20px;
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
.work_left-content,
.work_right-content {
    width: 45%;
    padding: 50px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column; /** 縦並びに設定 */
    text-align: center;
    opacity: 0;
    transform: translateY(50px);
}

.work_left-content.animate,
.work_right-content.animate {
    opacity: 1;
    animation: float-up 1s ease-out forwards;
}

.work_left-img,
.work_right-img {
  width: 200px; /* 正方形の幅 */
  height: 200px; /* 正方形の高さ */
  border-radius: 50%; /* 円形にする */
  object-fit: cover; /* 中央で画像を切り取る */
  aspect-ratio: 1 / 1; /* 正方形のアスペクト比を維持 */
}

.work_left-name a {
    font-weight: bold;
    font-size: 2rem;
    color: black;
    text-decoration: none;
}

.work_left-name :hover {
    transform: translateX(-5px) translateY(-5px);
    text-shadow: 1px 2px 3px rgb(0, 0, 0), 3px 2px 10px black;
    /** 横方向の影、縦方向の影、ぼかしの範囲、影の色 */
    transition: transform 0.5s, shadow 0.5s;
    color: white;
}

@media (max-width: 768px) {
    .work_main {
        flex-direction: column;
        align-items: center;
    }

    .work_left-content,
    .work_right-content {
        width: 100%;
        padding: 20px;
    }
}
</style>