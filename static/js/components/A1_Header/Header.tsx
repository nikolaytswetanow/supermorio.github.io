import style from "./Header.module.scss";
import logo from "../../assets/png/header/logo.png";
import morio from "../../assets/png/header/morio.png";
import baiMorio from "../../assets/png/header/bai-morio.png";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import telegram from "../../assets/png/header/telegram.png";
import twitter from "../../assets/png/header/twitter.png";
import {observer} from "mobx-react-lite";
import {useStore} from "../../store/RootStore";
import {clsx} from "clsx";
import {svgIcons} from "../../assets/svgIcons";

// @ts-ignore
import music from "../../assets/mp3/music.mp3"
import ReactAudioPlayer from "react-audio-player";
import {Fragment, useRef, useState} from "react";

export const Header = observer(() => {
    const {
        appStore: {
            burgerMenu, setBurgerMenu,
        }
    } = useStore();

    const [play, setPlay] = useState(false);

    const ref = useRef<ReactAudioPlayer>(null!)

    const onPlay = () => {
        if (play) {
            // @ts-ignore
            ref.current.audioEl.current.pause();
        } else {
            // @ts-ignore
            ref.current.audioEl.current.play();
        }
        setPlay(!play);
    }


    return (
        <header className={style.header}>

            <ReactAudioPlayer src={music}
                              ref={ref}
            />

            <div className={style.top}>
                <Link to="/"
                      className={style.logo}
                >
                    <img src={logo} alt=""/>
                    <img src={morio} alt=""/>
                </Link>

                <div className={style.rightPart}>

                    <nav className={style.links}>
                        {
                            [
                                "about",
                                "toocanomix",
                                "how to buy",
                            ].map((label, key) => (
                                <Fragment key={key}>
                                    {
                                        key === 0 ? (
                                            <a className={style.link}
                                               target="_blank"
                                               rel="nofollow noreferrer noopener"
                                               href="https://app.analytixaudit.com/soper-morio"
                                            >
                                                audit
                                            </a>
                                        ) : (
                                            <HashLink to={`/#${label}`}
                                                      smooth
                                                      className={style.link}
                                            >
                                                {label}
                                            </HashLink>
                                        )
                                    }
                                </Fragment>

                            ))
                        }
                    </nav>

                    <a href="#"
                       target="_blank"
                       rel="nofollow noreferrer noopener"
                       className={style.buyDesktop}
                    >
                        <img src={baiMorio} alt=""/>
                    </a>

                    <button className={clsx({
                        [style.playBtn]: true,
                        [style.playBtn_play]: play,
                    })}
                            onClick={onPlay}
                    >
                        {svgIcons.play}
                    </button>

                    <button className={clsx({
                        [style.burgerBtn]: true,
                        [style.burgerBtn_open]: burgerMenu,
                    })}
                            onClick={() => setBurgerMenu(!burgerMenu)}
                    >
                        <span>menu</span>
                    </button>

                </div>
            </div>

            <div className={style.socialLinks}>
                {
                    [
                        {
                            href: "https://t.me/realsopermorioportal",
                            src: telegram
                        },
                        {
                            href: "https://x.com/SoperMorio_Sol",
                            src: twitter
                        },
                    ].map(({href, src}, key) => (
                        <a key={key}
                           href={href}
                           target="_blank"
                           rel="nofollow noreferrer noopener"
                           className={style.socialLink}
                        >
                            <img src={src}
                                 alt=""
                            />
                        </a>
                    ))
                }

                <a href="#"
                   target="_blank"
                   rel="nofollow noreferrer noopener"
                   className={style.buyMobile}
                >
                    <img src={baiMorio} alt=""/>
                </a>
            </div>

        </header>


    )
})