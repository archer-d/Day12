import Config from "./Config.js"
export default class Area{
    constructor(x=0, y=0, width=Config.blockSize, height=Config.blockSize){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}