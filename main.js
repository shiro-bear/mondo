var images = document.getElementsByClassName("delete");

// クリックしたときに画像を非表示にする関数
function hideImage() {
    var opacity = 1;
    var image = this;
    var timer = setInterval(function () {
        if (opacity <= 0.1) {
            clearInterval(timer);
            image.style.display = "none";
        }
        image.style.opacity = opacity;
        opacity -= 0.05;
    }, 20);
}

// 画像をクリックしたときにhideImage関数を呼び出すイベントリスナーを追加
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", hideImage);
}