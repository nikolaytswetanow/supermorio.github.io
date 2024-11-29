import style from "./Aboot.module.scss";
import title from "../../assets/png/aboot/title.png";
import dollar_morio from "../../assets/png/header/morio.png";
import heart from "../../assets/gif/aboot/broken-heart.gif";
import pic1 from "../../assets/gif/aboot/pic1.gif";
import pic2 from "../../assets/png/aboot/pic2.png";
import pic2_2 from "../../assets/png/aboot/pic2_2.png";
import mario from "../../assets/png/aboot/mario.png";
import arrow from "../../assets/png/aboot/arrow.png";
import speech from "../../assets/png/aboot/speech.png";
import tears from "../../assets/gif/aboot/tears.gif";


export const Aboot = () => {
    return (
        <div className={style.aboot}
             id="about"
        >
            <div className={style.mask}>
                <div className={style.innerMobile}>

                    <img src={title} alt="" className={style.title}/>
                    <img src={dollar_morio} alt="" className={style.dollar_morio}/>


                    <div className={style.texts}>
                        <p>
                            Boowsa smasshed mai betch peech i av smoll peepee so i undastand y
                        </p>
                        <p>
                            naw i mek coin so pincess peech choze smoll morio peepee ova boowsa.
                        </p>
                    </div>


                    <div className={style.picturesWrapper}>

                        <div className={style.pictures}>
                            <img src={pic1} alt="" className={style.pic1}/>
                            <img src={pic2} alt="" className={style.pic2}/>
                            <img src={arrow} alt="" className={style.arrow}/>
                        </div>

                        <div className={style.gifs}>
                            <img src={mario} alt="" className={style.mario}/>
                            <img src={speech} alt="" className={style.speech}/>
                            <img src={tears} alt="" className={style.tears}/>
                            <img src={heart} alt="" className={style.heart}/>
                        </div>
                    </div>

                </div>

                <div className={style.innerDesktop}>
                    <img src={title} alt="" className={style.title}/>
                    <img src={dollar_morio} alt="" className={style.dollar_morio}/>

                    <img src={pic1} alt="" className={style.pic1}/>
                    <img src={pic2_2} alt="" className={style.pic2}/>

                    <div className={style.texts}>
                        <p>
                            Boowsa smasshed mai betch peech i av smoll peepee so i undastand y
                        </p>
                        <p>
                            naw i mek coin so pincess peech choze smoll morio peepee ova boowsa.
                        </p>
                    </div>

                    <img src={mario} alt="" className={style.mario}/>
                    <img src={speech} alt="" className={style.speech}/>
                    <img src={heart} alt="" className={style.heart}/>
                    <img src={tears} alt="" className={style.tears}/>
                </div>


            </div>


        </div>
    )
}