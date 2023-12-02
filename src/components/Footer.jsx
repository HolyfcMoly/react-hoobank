import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className="flex-1 flex flex-col justify-start mr-10">
                <a href="/">
                <img
                    src={logo}
                    alt="logo"
                    className="w-[266px] h-[72px] object-contain"
                />
                </a>
                <p className={`${styles.paragraph} mt-8 max-w-[312px]`}>
                    A new way to make the payments easy, reliable and secure.
                </p>
            </div>
            <div
                className={`flex-1.5 flex flex-row justify-between flex-wrap md:mt-0 mt-10 w-full`}
            >
                {footerLinks.map((item, index) => (
                    <div
                        key={item.title + index}
                        className="flex flex-col ss:my-0 my-4 min-w-[150px]"
                    >
                        <h2 className="font-poppins font-medium text-[18px] leading-7 text-white">
                            {item.title}
                        </h2>
                        <ul className="flex flex-col mt-6">
                            {item.links.map((link, index) => (
                                <li
                                    key={link.name}
                                    className={`font-poppins text-[16px] leading-6 ${
                                        index !== item.links.length - 1
                                            ? "mb-3"
                                            : ""
                                    } hover:text-secondary transition-colors duration-300 cursor-pointer text-dimWhite`}
                                >
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className="flex justify-between items-center md:flex-row flex-col w-full pt-7 border-t border-t-[#3F3E45]">
            <p className="font-poppins text-[18px] leading-7 text-center text-dimWhite">
                Copyright Ⓒ 2022 HooBank. All Rights Reserved.
            </p>
            <div className="flex flex-row md:mt-0 mt-4">
                {socialMedia.map((item, index) => (
                    <a
                        key={item.id}
                        href={item.link}
                        className={`flex
                        items-center ${
                            index !== socialMedia.length - 1 ? "mr-4" : "mr-0"
                        }`}
                    >
                        <img
                            src={item.icon}
                            alt={item.id}
                            className="w-[21px] h-[21px] object-contain"
                        />
                    </a>
                ))}
            </div>
        </div>
    </section>
);

export default Footer;
