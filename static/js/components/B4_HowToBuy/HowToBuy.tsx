import style from "./HowToBuy.module.scss"
import title from "../../assets/png/how to buy/title.png";
import dollar_morio from "../../assets/png/header/morio.png";
import morio from "../../assets/png/how to buy/morio.png";
import coin from "../../assets/gif/how to buy/coin.gif";
import question from "../../assets/gif/how to buy/question.gif"

const items = [
    {
        title: "CREATE A WALLET",
        texts: [
            "Download Phantom or your wallet of choice from the app store or Google Play for free.",
            "Desktop users, download the Google Chrome extension by going to Phantom."
        ]
    },
    {
        title: "USING Pump.fun",
        texts: [
            "Go to Pump.Fun in google chrome or on the browser inside your Phantom app. Connect your wallet. Paste the $MORIO token address into pump.fun, select $MORIO, and confirm. When Phantom prompts you for a wallet signature, sign.",
        ]
    },
    {
        title: "BUY SOLANA",
        texts: [
            "Have SOL in your wallet to switch to $MORIO. If you don’t have any SOL, you can buy directly on Phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.",
        ]
    },
    {
        title: "BUYING $MORIO",
        texts: [
            "Switch SOL for $MORIO. We have Zero taxes so you don’t need to worry about buying with specific slippage.",
        ]
    },
]


export const HowToBuy = () => {
    return (
        <div className={style.howToBuy}
             id="how to buy"
        >
            <div className={style.mask}>
                <div className={style.inner}>

                    <div className={style.titleWrapper}>
                        <img src={title} alt="" className={style.title}/>
                        <img src={dollar_morio} alt="" className={style.dollar_morio}/>
                        <img src={morio} alt="" className={style.morio}/>
                        <img src={coin} alt="" className={style.coin}/>
                    </div>

                    <p className={style.description}>
                        $MORIO is presel so if u iz tou late an miz presel dis iz haw u bai on raydium.
                    </p>

                    <div className={style.items}>
                        {
                            items.map(({title, texts}, key) => (
                                <div key={key}
                                     className={style.item}
                                >
                                    <img src={question} alt="" className={style.question}/>
                                    <div className={style.right}>
                                        <p className={style.itemTitle}>{title}</p>
                                        <div className={style.texts}>
                                            {
                                                texts.map((text, key) => (
                                                    <p key={key}>
                                                        {text}
                                                    </p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                    <p className={style.mail}>moriosolana@gmail.com</p>

                </div>
            </div>
        </div>
    )
}