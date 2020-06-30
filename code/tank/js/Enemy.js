import Config from "./Config.js";
import Tank from "./Tank.js";

export default class Enemy extends Tank{
    constructor(x=0, y=0, width=Config.blockSize, height=Config.blockSize, imgSrc="assets/enemy-down.png"){
        super(x, y, width, height, imgSrc)
    }
}