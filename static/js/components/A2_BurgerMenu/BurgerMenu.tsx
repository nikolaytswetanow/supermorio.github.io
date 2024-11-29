import {observer} from "mobx-react-lite";
import style from "./BurgerMenu.module.scss"
import {clsx} from "clsx";
import {useStore} from "../../store/RootStore";
import {HashLink} from "react-router-hash-link";
import {Fragment} from "react";

export const BurgerMenu = observer(() => {
    const {
        appStore: {
            burgerMenu, setBurgerMenu,
        }
    } = useStore();

    return (
        <div className={clsx({
            [style.burgerMenu]: true,
            [style.burgerMenu_open]: burgerMenu,
        })}>
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
                                       onClick={() => setBurgerMenu(!burgerMenu)}
                                    >
                                        audit
                                    </a>
                                ) : (
                                    <HashLink key={key}
                                              to={`/#${label}`}
                                              smooth
                                              className={style.link}
                                              onClick={() => setBurgerMenu(!burgerMenu)}
                                    >
                                        {label}
                                    </HashLink>
                                )
                            }


                        </Fragment>

                    ))
                }
            </nav>
        </div>
    )
})