import style from "./Images.module.scss"
import gif1 from "../../assets/gif/images/1.gif";
import gif2 from "../../assets/gif/images/2.gif";
import gif3 from "../../assets/gif/images/3.gif";
import gif4 from "../../assets/gif/images/4.gif";
import gif5 from "../../assets/gif/images/5.gif";
import gif6 from "../../assets/gif/images/6.gif";


export const Images = () => {
    return (
        <div className={style.images}>
            {
                [gif1, gif2, gif3, gif4, gif5, gif6].map((gif, key) => (
                    <img key={key}
                         src={gif}
                         alt=""
                    />
                ))
            }
        </div>
    )
}