import style from "./RunningString.module.scss";
import {RunningStringItem} from "../x_common/RunningStringItem/RunningStringItem";
import fig1 from "../../assets/gif/running string/fig1.gif";
import fig2 from "../../assets/gif/running string/fig2.gif";

export const RunningString = () => {
    return (
        <div className={style.runningString}>
            <RunningStringItem item={
                <div className={style.item}>
                    <img src={fig1} alt=""/>
                    <img src={fig2} alt=""/>
                </div>
            }
                               forward={false}
                               duration={50}
            />
        </div>
    )
}