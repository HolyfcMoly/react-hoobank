import styles, { layout } from "../style";
import { google, apple, bill } from "../assets";

const Billing = () => (
    <section className={`${layout.sectionReverse} justify-between`}>
        <div className={`${layout.sectionImgReverse} flex-2 md:max-w-[570px] md:max-h-[460px] mr-0 basis-8/12`}>
            <img
                src={bill}
                alt=""
                className="w-[100%] h-[100%] relative z-[5]"
            />
            <div className="absolute z-[3] top-2 -left-1/2 w-[50%] h-[50%] rounded-full white__gradient" />
            <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient-2" />
        </div>

        <div className={`${layout.sectionInfo} flex-0.5 basis-4/12`}>
            <h1 className={`${styles.heading2}`}>
                Easily control your <br className="sm:block hidden" /> billing &
                invoicing.
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-6`}>
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                integer platea placerat.
            </p>
            <div className="flex flex-wrap sm:mt-12 mt-6">
                <button className="cursor-pointer xs:mr-8 mr-4">
                    <img
                        src={apple}
                        alt="app_store"
                        className="w-[128px] h-[42px] object-contain"
                    />
                </button>
                <button className="cursor-pointer">
                    <img
                        src={google}
                        alt="google_play"
                        className="w-[128px] h-[42px] object-contain"
                    />
                </button>
            </div>
        </div>
    </section>
);

export default Billing;
