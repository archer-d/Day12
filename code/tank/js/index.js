import Grass from "./Grass.js";

// 整个游戏入口文件

// 获取画布对象
let oCanvas = document.querySelector('#canvas');

// 创建一个画笔对象
let ctx = oCanvas.getContext("2d");

// // 创建一个图片对象
// let img = new Image();

// // 设置图片的路径
// img.src = "assets/grass.png";

// // 需要等图像加载完成之后再将图像画到画布中
// img.onload = () => {
//     ctx.drawImage(img, 0, 0, 50, 50);
//     ctx.drawImage(img, 50, 0, 50, 50);
//     ctx.drawImage(img, 50, 50, 50, 50);
// }


let g = new Grass();

g.render(ctx);

