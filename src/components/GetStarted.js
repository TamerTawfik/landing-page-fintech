import styles from "../style";
import { arrowUp } from "../assets";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const GetStarted = () => (
    <AnimationOnScroll duration={5} animateIn="animate__heartBeat animate__infinite">
        <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
            <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
                <div className={`${styles.flexStart} flex-row`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                        <span className="text-gradient">Get</span>
                    </p>
                    <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
                </div>

                <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
                    <span className="text-gradient">Started</span>
                </p>
            </div>
        </div>
    </AnimationOnScroll>
);

export default GetStarted;