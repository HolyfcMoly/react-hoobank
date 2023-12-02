import { feedback } from "../constants";
import styles from "../style";
import FeedBackCard from "./FeedBackCard";

const Testimonials = () => (
    <section id="clients" className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>
      <div className="absolute z-0 -right-[50%] rounded-full w-[60%] h-[60%] blue__gradient"></div>
        <div className="w-full flex md:items-center items-start justify-between md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
            <h1 className={`${styles.heading2} md:mb-0 mb-6`}>
                What people are <br className="sm:block hidden" /> saying about
                us
            </h1>
            <p className={`${styles.paragraph} max-w-[450px]`}>
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
            </p>
        </div>
        <div className="flex flex-1 flex-wrap justify-center w-full relative z-[1] feedback-container">
          {feedback.map((item) => (
            <FeedBackCard key={item.id} {...item}/>
          ))}
        </div>
    </section>
);

export default Testimonials;
