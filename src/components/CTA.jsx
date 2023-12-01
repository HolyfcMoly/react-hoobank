import styles, { layout } from "../style";
import Button from "./Button";

const CTA = () => (
    <section
        className={`${layout.section} ${styles.flexCenter} sm:my-20 my-6 sm:px-24 sm:py-[4.5rem] px-12 py-8 justify-between bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
        <div className="flex flex-1 flex-col">
            <h1 className={`${styles.heading2} sm:mb-6 mb-2`}>
                Let’s try our service now!
            </h1>
            <p className={`${styles.paragraph} max-w-[450px]`}>
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
            </p>
        </div>

        <div className={`${styles.flexCenter} md:ml-4 ml-0 md:mt-0 mt-4`}>
            <Button />
        </div>
    </section>
);

export default CTA;
