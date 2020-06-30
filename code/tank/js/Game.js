import Config from "./Config.js";
import Grass from "./Grass.js";
import Water from "./Water.js";
import Wall from "./Wall.js";
import Tank from "./Tank.js";

export default class Game{
    constructor(context){
        this.context = context;
        // 定义一个二维数组map，把所有的方块都存储起来
        this.map = [];
        // 定义一个存储我方坦克的数组
        this.player = [];
        this.enemyPlayer = [];
    }

    // 初始化方块（包括草地、水、墙壁、坦克）数据
    init() {
        let size = Config.blockSize;
        // 水平方向可以放1200/50个方块，垂直方向可以放600/50个方块
        let cols = Config.mapSize.width / size;
        let rows = Config.mapSize.height / size;

        // 循环生成一个二维数组，先考虑生成草地数据
        for(let i = 0; i < cols; i++){
            let temp = [];
            for(let j = 0; j < rows; j++){
                let g = new Grass(i * size, j * size);
                temp.push(g);
            }
            this.map.push(temp);
        }

        // 随机生成水或墙壁的数据（数量50~200个）

        let count = Math.floor(Math.random() * 151 + 50); // 返回50~200之间的整数

        for (let i = 0; i < count; i++) {
            // 随机获取水或墙壁的水平方向和垂直方向的方块的位置
            let x = Math.floor(Math.random() * cols);
            let y = Math.floor(Math.random() * rows);

            // 随机水或墙壁
            let type = Math.floor(Math.random() * 2); // 0~1
            switch(type) {
                // 生成水
                case 0:
                    this.map[x][y] = new Water(x * size, y * size);
                    break;
                // 生成墙壁
                case 1:
                    this.map[x][y] = new Wall(x * size, y * size);
                    break;
            }
            
        }

        // 创建我方坦克数据
        this.player.push(new Tank(13 * size, 11 * size));
        this.player.push(new Tank(10 * size, 11 * size));
    }

    // 渲染数据
    render() {
        // console.log(this.map);

        // 先渲染所有的草地
        this.map.forEach(item => {
            // console.log(item)
            item.forEach(grass => {
                // console.log(grass)
                grass.render(this.context);
            })
        })

        // 渲染我方坦克
        this.player.forEach((player) =>{ 
            player.render(this.context);
        })
    }
}