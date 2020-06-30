// 获取画布对象
let oCanvas = document.querySelector('#canvas');

// 获取画笔对象
let ctx = oCanvas.getContext('2d');

// 创建一个图像对象

let img = new Image();

// 设置一个图片路径
img.src = "./tank-up.png";

// 需要等图像加载完成之后

img.onload = () => {
    // 只有等图像加载完成才能将图片画到画布里面去
    ctx.drawImage(img, 0, 0, 50, 50);
    ctx.drawImage(img, 50, 0, 50, 50);
    ctx.drawImage(img, 100, 0, 50, 50);
}