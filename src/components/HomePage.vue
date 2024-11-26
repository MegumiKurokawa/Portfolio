<template>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" rel="stylesheet">
    <div>
        <div class="main">
        <div class="main-content">
            <h1 class="title">WELCOME TO<br><span class="title-emphasis">LE</span>TTUCE HEAD STUDIO</h1>
        </div>
        <div class="sub-content">
            <div class="left-content">
                <a href="#work">
                <h2 class="left-title">LESTER's<br>Production</h2>
                </a>
            </div>
            <div class="right-content">
                <a href="#work">
                <h2 class="right-title">MEG's<br>Production</h2>
                </a>
            </div>
        </div>
        </div>
    </div>
</template>


<style scope>
.main {
    align-items: center;
    justify-content: center;
    padding: 100px;
    text-align: center;
    background: linear-gradient(45deg, yellow, lightgreen);
}

.main-content {
    margin-bottom: 20px;
}

.title {
    font-size: 4rem;
    font-weight: bold;
    color: black;
}

.title-emphasis {
    font-weight: bold;
    color: rgb(255, 255, 255);
    text-shadow: 3px 3px 5px rgb(0, 0, 0);
}
/** 文字の影を付ける際にぼかしの範囲を指定しないために効かない時がある(横ずれ・縦ずれ・ぼかし・色) */

.sub-content {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 20px;
}

.left-content,
.right-content {
    width: 45%;
    padding: 50px;
    text-align: center;
}

.left-title,
.right-title {
    font-family: 'Quicksand', sans-serif;
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 1px;
    color: rgb(0, 0, 0);
    
}

.left-title:hover,
.right-title:hover {
    transform: translateX(-5px) translateY(-5px);
    text-shadow: 1px 2px 3px rgb(0, 0, 0), 3px 2px 10px black;
    /** 横方向の影、縦方向の影、ぼかしの範囲、影の色 */
    transition: transform 0.5s, shadow 0.5s;
    color: white;
}
/** 要素を動かす(回転・拡大縮小・傾斜・移動など)場合はtransform、アニメーションを付けたように滑らかに動かす場合はtransitionを使用する */

@media (max-width: 768px) {
    .main {
        padding: 50px;
    }

    .title {
        font-size: 2.5rem;
    }

    .sub-content {
        flex-direction: column;
        gap: 20px;
    }

    .left-content,
    .right-content {
        width: 100%;
        padding: 20px;
    }

    .left-title,
    .right-title {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .title {
        font-size: 2rem;
    }

    .left-title,
    .right-title {
        font-size: 1.8rem;
    }
}
</style>