var images = document.getElementsByClassName("delete");

// クリックしたときに画像を非表示にする関数
function hideImage() {
    var opacity = 1;
    var image = this;
    var timer = setInterval(function () {
        if (opacity <= 0.1) {
            clearInterval(timer);
            image.style.visibility = "hidden";
        }
        image.style.opacity = opacity;
        opacity -= 0.05;
    }, 20);
}

// 画像をクリックしたときにhideImage関数を呼び出すイベント
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", hideImage);
}


//謎を変えたらリロード
let num = document.getElementById('num');
num.addEventListener('change', changeimage);

function changeimage() {
    const elements = document.getElementsByClassName('delete');
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.style.visibility = "visible";
        element.style.opacity = 1;
    }
    const select = document.getElementById('num');
    if (select.value == "rid1") {
        document.getElementById("riddle").src = "riddle1.png";
    } else if (select.value == "rid2") {
        document.getElementById("riddle").src = "riddle2.png";
    } else if (select.value == "rid3") {
        document.getElementById("riddle").src = "riddle3.png";
    }

}

//サイズを変えたらリロード
let size = document.getElementById('size');
size.addEventListener('change', changesize);

function changesize() {
    const elements = document.getElementsByClassName('delete');
        for (let i = 0; i < 25; i++) {
            const element = elements[i];
            element.style.display = "none";
        }
    const select = document.getElementById('size'); 
    
    if (select.value == "size1") {
        //3*3のとき
        const elements = document.getElementsByClassName('delete');
        for (let i = 0; i < 9; i++) {
            const element = elements[i];
            element.style.visibility = "visible";
            element.style.display = "block";
            element.style.opacity = 1;
            element.style.width ="calc(var(--w) /3)";
            element.style.height ="calc(var(--h) /3)";
            element.style.left = "calc(var(--w) *"+i%3+"/ 3)"
            element.style.top = "calc(var(--h) *"+Math.floor(i/3)+"/ 3)"
        }
    } else if (select.value == "size2") {
        //4*4のとき
        const elements = document.getElementsByClassName('delete');
        for (let i = 0; i < 16; i++) {
            const element = elements[i];
            element.style.visibility = "visible";
            element.style.display = "block";
            element.style.opacity = 1;
            element.style.width ="calc(var(--w) /4)";
            element.style.height ="calc(var(--h) /4)";
            element.style.left = "calc(var(--w) *"+i%4+"/ 4)"
            element.style.top = "calc(var(--h) *"+Math.floor(i/4)+"/ 4)"
        }
    } else if (select.value == "size3") {
        //5*5のとき
        const elements = document.getElementsByClassName('delete');
        for (let i = 0; i < 25; i++) {
            const element = elements[i];
            element.style.visibility = "visible";
            element.style.display = "block";
            element.style.opacity = 1;
            element.style.width ="calc(var(--w) /5)";
            element.style.height ="calc(var(--h) /5)";
            element.style.left = "calc(var(--w) *"+i%5+"/ 5)"
            element.style.top = "calc(var(--h) *"+Math.floor(i/5)+"/ 5)"
        }
    }

}