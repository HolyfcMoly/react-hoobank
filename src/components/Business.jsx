import React from "react";
import styles, { layout } from "../style";
import { features } from "../constants/index";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
    <div
        className={`flex p-5 items-center rounded-[20px] ${
            index !== features.length - 1 ? "mb-6" : "mb-0"
        } relative z-10 feature-card`}
    >
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue mr-5`}>
            <img
                src={icon}
                alt={icon}
                className="w-[50%] h-[50%] object-contain"
            />
        </div>
        <div className="flex flex-1 flex-col">
            <h4 className="font-poppins font-semibold text-[18px] leading-[23px] text-white mb-2">
                {title}
            </h4>
            <p className="font-poppins text-[16px] leading-normal text-dimWhite">
                {content}
            </p>
        </div>
    </div>
);

const Business = () => (
    <section id="features" className={`${layout.section} sm:mb-20 mb-6`}>
        <div className={`${layout.sectionInfo} `}>
            <h1 className={`${styles.heading2} mb-6`}>
                You do the business,
                <br className="sm:block hidden" /> we’ll handle the money.
            </h1>
            <p className={`${styles.paragraph} max-w-[570px] mb-12`}>
                With the right credit card, you can improve your financial life
                by building credit, earning rewards and saving money. But with
                hundreds of credit cards on the market.
            </p>
            <Button />
        </div>
        <div className={`sm:items-start ${layout.sectionImg} flex-col `}>
            {features.map((item, index) => (
                <FeatureCard
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    content={item.content}
                    index={index}
                />
            ))}
        </div>
    </section>
);

export default Business;
