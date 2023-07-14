import React from 'react';
import { popupFromBottomForText } from '@/content/framerMotionVariants';
import AnimatedHeading from './FramerMotion/AnimatedHeading';
import ContactForm from './ContactForm';
import AnimatedText from '../FramerMotion/AnimatedText';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
    return (
        <div id="contact" className="dark:bg-darkPrimary !relative">
            <section className="w-full text-center pt-6 dark:bg-darkPrimary dark:text-white">
                <AnimatedHeading variants={popupFromBottomForText} className="font-bold text-4xl">
                    Get in touch
                </AnimatedHeading>

                <AnimatedText
                    variants={popupFromBottomForText}
                    className="px-4 py-2 font-medium text-slate-400"
                >
                    Have a little something, something you wanna talk about? Please feel free to get
                    in touch anytime, whether for work or to just Hi 🙋‍♂️.
                </AnimatedText>
            </section>

            <section className="flex flex-col lg:flex-row w-full mx-auto px-5 dark:bg-darkPrimary dark:text-white lg:pb-10">
                <div className="w-full mx-auto mt-10">
                    <AnimatedHeading
                        variants={popupFromBottomForText}
                        className="text-2xl font-bold w-full text-center my-2"
                    >
                        Connect with me
                    </AnimatedHeading>

                    <ContactForm />
                </div>
            </section>
        </div>
    );
}
