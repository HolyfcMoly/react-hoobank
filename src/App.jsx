import React from "react";
import styles from "./style";
import {
    Navbar,
    CardDeal,
    Business,
    Clients,
    CTA,
    Billing,
    Footer,
    Hero,
    Stats,
    Testimonials,
} from "./components/index";

const App = () => {
    return (
        <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>
            <div className={`bg-primary sm:pl-16 pl-6 ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Stats />
                    <Business />
                    <Billing />
                    <CardDeal />
                    <Testimonials />
                    <Clients />
                    <CTA />
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default App;
