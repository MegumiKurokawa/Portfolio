<script>
import leftImg from '@/assets/images/left-img.jpg';
import rightImg from '@/assets/images/right-img.jpg';

export default {
  data() {
    return {
      animationStarted: false, // アニメーションの状態
      leftImg, // インポートした画像のパスをデータに格納
      rightImg,
    };
  },
  methods: {
    startAnimation() {
      this.animationStarted = true; // アニメーションを開始
    },
    resetAnimation() {
      this.animationStarted = false; // アニメーションをリセット
    },
  },
}
</script>

<template>
        <div>
            <div class="aboutUs" @mouseenter="startAnimation" @mouseleave="resetAnimation">
              <div class="aboutUs_main-title">
                <h1 class="aboutUs_content-title">About Us</h1>
                  </div>
                <div class="aboutUs_main">
                    <div class="aboutUs_left-content">
                        <div class="aboutUs_left-history" :class="{ 'animate': animationStarted }">
                            <h2 class="aboutUs_left-name">LESTER</h2>
                            <p>Half American, half Japanese, I moved to the U.S. at the age of six due to my parents' job transfer and spent 26 years there. After returning to Japan, I landed a job at a Japanese company. However, my passion for YouTube, which began as a hobby during my career as a salaried employee, became unstoppable. I decided to leave my stable job and pursue YouTube full-time. Currently, I'm challenging myself to see how much I can achieve within a six-month period. Proud father of two (soon to be three) children.</p>
                        </div>
                        <img :src="leftImg" alt="left-img" class="left-img">             
                    </div>
                    <div class="aboutUs_right-content">
                        <div class="aboutUs_right-history" :class="{ 'animate': animationStarted }">
                            <h2 class="aboutUs_right-name">MEG</h2>
                            <p>Born and raised in Japan, I've been fascinated by foreign countries and people since childhood, influenced by television. After graduating from beauty school, I worked at a local beauty salon. Later, wanting to improve my English, I switched to a bar where American customers frequent. This experience led me to meet many people and eventually sparked my decision to travel the world as a backpacker for a year. Upon returning to Japan, I met my husband and am now a mother of two, striving to balance child-rearing with studying programming in hopes of contributing to my family's finances.</p>
                        </div>
                        <img :src="rightImg" alt="right-img" class="right-img">               
                    </div>
                </div>
            </div>
        </div>
</template>

<style scope>
.aboutUs {
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, red, pink);
}

.aboutUs_main-title {
  width: 100%;
  justify-items: center;
  padding-top: 100px;
}

.aboutUs_content-title {
  font-weight: bold;
  font-size: 3rem;
}

.aboutUs_main {
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 20px;
  text-align: center;
}

.aboutUs_left-content, .aboutUs_right-content {
    width: 45%;
    padding: 50px;
    align-items: center;
    display: flex;
    flex-direction: row; /** 横並びに設定 */
}

.aboutUs_left-history, .aboutUs_right-history {
    position: relative;
    opacity: 0;
    transition: transform 2s ease-out, opacity 2s ease-out; /* アニメーションをスムーズに */
    background-color: rgba(243, 243, 243, 0.5);
    padding: 20px;
}

.aboutUs_left-history {
  transform: translateX(10%); /* 初期位置は右側外 */
}

.aboutUs_right-history {
  transform: translateX(-10%);/** 初期位置は左側外 */
}

.aboutUs_left-history.animate {
    transform: translateX(0); /* 元の位置へ */
    opacity: 1; /* 不透明 */
}

.aboutUs_right-history.animate {
    transform: translateX(0); /* 元の位置へ */
    opacity: 1; /* 不透明 */
    transition-delay: 1s; /** aboutUs_left-historyのアニメーションが完了してから開始 */
}

.aboutUs_left-name, .aboutUs_left-history p, .aboutUs_right-name, .aboutUs_right-history p {
    color: rgba(0, 0, 0, 1); /* 文字色を不透明にする */
}

.left-img {
  max-width: 50%;
  max-height: 200px;
  height: auto;
  margin-right: 20px;
}

.right-img {
  max-width: 70%;
  max-height: 200px;
  height: auto;
  margin-right: 20px;
}

@media (max-width: 768px) {
  .aboutUs_main {
    flex-direction: column;
    gap: 20px;
  }

  .aboutUs_left-content,
  .aboutUs_right-content {
    width: 100%;
    padding: 20px;
    flex-direction: column;
    align-items: center;
  }

  .left-img,
  .right-img {
    max-width: 80%;
    margin-right: 0;
    margin-bottom: 20px;
  }

  .aboutUs_content-title {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    .aboutUs {
      padding: 10px;
    }

    .aboutUs_content-title {
      font-size: 2rem;
    }

    .aboutUs_main {
      gap: 10px;
    }

    .aboutUs_left-content,
    .aboutUs_right-content {
      padding: 10px;
    }

    .aboutUs_left-name,
    .aboutUs_right-name {
      font-size: 1.8rem;
    }

    .aboutUs_left-history p,
    .aboutUs_right-history p {
      font-size: 1rem;
    }

    .left-img,
    .right-img {
      max-width: 90%;
    }
  }
}
</style>