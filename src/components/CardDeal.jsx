import Button from "./Button";
import styles, { layout } from "../style";
import { card } from "../assets";

const CardDeal = () => (
    <section id="cardDeal" className={`${layout.section} sm:mb-20 mb-6`}>
        <div className={`${layout.sectionInfo} `}>
            <h1 className={`${styles.heading2} mb-6`}>
                Find a better card deal
                <br className="sm:block hidden" /> in few easy steps.
            </h1>
            <p className={`${styles.paragraph} max-w-[500px] mb-4`}>
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet
                quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            <Button />
        </div>
        <div className={`${layout.sectionImg}`}>
            <img
                src={card}
                alt="cardDeal"
                className="w-[100%] h-[100%] object-contain"
            />
        </div>
    </section>
);

export default CardDeal;
