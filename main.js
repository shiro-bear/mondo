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
let wid = document.getElementById('wid');
wid.addEventListener('change', changesize);
let hei = document.getElementById('hei');
hei.addEventListener('change', changesize);

function changesize() {
    //一旦すべて見えなくする
    
    const elements = document.getElementsByClassName('delete');
        for (let i = 0; i < 25; i++) {
            const element = elements[i];
            element.style.display = "none";
        }
        
    const w = document.getElementById('wid').value; 
    const h = document.getElementById('hei').value; 
        for (let i = 0; i < w*h; i++) {
            const element = elements[i];
            element.style.visibility = "visible";
            element.style.display = "block";
            element.style.opacity = 1;
            element.style.width ="calc(var(--w) /"+w+")";
            element.style.height ="calc(var(--h) /"+h+")";
            element.style.left = "calc(var(--w) *"+i%w+"/ "+w+")"
            element.style.top = "calc(var(--h) *"+Math.floor(i/w)+"/ "+h+")"
        }

}