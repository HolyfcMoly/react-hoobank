import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <a href="/">
                <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
            </a>

            <ul className=" list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((item, index) => (
                    <li
                        key={item.id}
                        className={`font-poppins font-normal relative cursor-pointer text-[16px] ${
                            index === navLinks.length - 1 ? "mr-0" : "mr-10"
                        } text-white navbar-items hover:text-secondary transition-[color] ease-in-out duration-300 hover:after:w-[100%]`}
                    >
                        <a href={`#${item.id}`}>{item.title}</a>
                    </li>
                ))}
            </ul>
            {/* mobile */}
            <div className="sm:hidden flex flex-1 z-10 justify-end items-center cursor-pointer">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle((prev) => !prev)}
                />

                <div
                    className={`${
                        toggle ? "flex" : "hidden"
                    } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className=" list-none flex justify-end items-center flex-1 flex-col">
                        {navLinks.map((item, index) => (
                            <li
                                key={item.id}
                                className={`font-poppins font-normal relative cursor-pointer text-[16px] ${
                                    index === navLinks.length - 1
                                        ? "mr-0"
                                        : "mb-4"
                                } text-white navbar-items hover:text-secondary transition-[color] ease-in-out duration-300 after:right-0 hover:after:w-[100%]`}
                            >
                                <a href={`#${item.id}`}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
