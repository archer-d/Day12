import Area from "./Area.js";
import Config from "./Config.js";

export default class Block extends Area{
    constructor(x=0, y=0, width=Config.blockSize, height=Config.blockSize, imgSrc){
        super(x, y, width, height);
        this.imgSrc = imgSrc;
        this.image = new Image();
        this.image.src = this.imgSrc;
    }

    // 渲染
    render(context) {
        // 等图像对象加载完成之后才能将图像画到画布里面
        this.image.onload = () => {
            context.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
}