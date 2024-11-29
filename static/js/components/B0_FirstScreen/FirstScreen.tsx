import style from "./FirstScreen.module.scss"
import title from "../../assets/png/first screen/title.png"
import right from "../../assets/png/first screen/figure-right.png";
import figure from "../../assets/gif/first screen/figure.gif"
import middle from "../../assets/gif/first screen/middle.gif"
import leftGif from "../../assets/gif/first screen/left figure.gif";

export const FirstScreen = () => {
    return (
        <div className={style.firstScreen}>

            <div className={style.top}>
                <img src={title} alt="" className={style.title}/>
                <img src={leftGif} alt="" className={style.left}/>
                <img src={right} alt="" className={style.right}/>
            </div>

            <div className={style.bottom}>

                <div className={style.figures}>
                    <img src={figure} alt="" className={style.figure}/>
                    <img src={middle} alt="" className={style.middle}/>
                    <img src={figure} alt="" className={style.figure}/>
                </div>
                <div className={style.address}>
                    <span>CA: morQ8Ec7VmwKiZtcNa8462YtBsaPjSGaWH1shSYVMf1</span>
                </div>

                <div className={style.figures}>
                    <img src={figure} alt="" className={style.figure}/>
                    <img src={middle} alt="" className={style.middle}/>
                    <img src={figure} alt="" className={style.figure}/>
                </div>
            </div>
        </div>
    )
}

