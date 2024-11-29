import style from "./Presel.module.scss"
import title from "../../assets/png/presel/title.png";
import star from "../../assets/gif/presel/star.gif";
import ReactPlayer from 'react-player'
import BAI_NOW_ON from "../../assets/png/presel/BAI-NOW-ON.png";
import naw_live from "../../assets/png/presel/naw_live.png";
import pinksale from "../../assets/png/presel/pinksale.png";
import pump from "../../assets/png/presel/pump.png";
import morio from "../../assets/png/presel/morio.png";
import {RunningStringItem} from "../x_common/RunningStringItem/RunningStringItem";
import marioGif from "../../assets/gif/presel/mario.gif";
import girlGif from "../../assets/gif/presel/girl.gif";
// @ts-ignore
import videoUrl from "../../assets/mp4/trailer.mp4";
import {useRef, useState} from "react";

export const Presel = () => {
    const ref = useRef<HTMLVideoElement>(null!);
    const [play, setPlay] = useState(false)

    const onClick = () => {
        if (play) {
            ref.current.pause();
            setPlay(false)
        } else {
            ref.current.play();
            setPlay(true)
        }

    }

    return (
        <div className={style.presel}>

            <div className={style.top}>

                <div className={style.titleWrapper}>
                    <img src={star} alt="" className={style.star}/>
                    <img src={naw_live} alt="" className={style.title}/>
                    <img src={star} alt="" className={style.star}/>
                </div>

                <div className={style.rightPart}>

                    <div className={style.videoWrapper}
                         onClick={onClick}
                    >
                        <video src={videoUrl}
                               playsInline={true}
                               autoPlay={false}
                               ref={ref}

                        />
                        {
                            !play && (
                                <p>PLAY</p>
                            )
                        }
                    </div>

                    <img src={BAI_NOW_ON} alt="" className={style.BAI_NOW_ON}/>

                    <a className={style.pinksale}
                       href="https://pump.fun/"
                       target="_blank"
                       rel="nofollow noreferrer noopener"
                    >
                        <img src={pump} alt=""/>
                    </a>

                </div>

                <div className={style.morioWrapper}>
                    <img src={morio} alt="" className={style.morio}/>
                    <img src={star} alt="" className={style.star}/>
                </div>


            </div>


            <div className={style.bottom}>
                <RunningStringItem item={
                    <div className={style.item}>
                        <img src={marioGif} alt=""/>
                        <img src={girlGif} alt=""/>
                    </div>
                }
                                   forward={false}
                                   duration={50}
                />
            </div>

        </div>
    )
}