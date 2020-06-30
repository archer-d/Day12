// import Grass from "./Grass.js";
// import Wall from "./Wall.js";
// import Water from "./Water.js";
// import Tank from "./Tank.js";
// import Enemy from "./Enemy.js";
import Game from "./Game.js";

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

// let g1 = new Grass();

// g1.render(ctx);

// let g2 = new Grass(50, 0);

// g2.render(ctx);

// let w1 = new Wall();

// w1.render(ctx);

// let w2 = new Water(50, 50);
// w2.render(ctx);

// let t1 = new Tank(200, 200);
// t1.render(ctx);

// let t2 = new Enemy(400, 400);
// t2.render(ctx);


let game = new Game(ctx);

// 游戏的初始化
game.init();

// 游戏的渲染
game.render();

