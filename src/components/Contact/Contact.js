import React from 'react';
import { popupFromBottomForText } from '@/content/framerMotionVariants';
import AnimatedHeading from '@/components/FramerMotion/AnimatedHeading';
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

                <AnimatedText variants={popupFromBottomForText} className="px-4 py-2 font-medium">
                    Is there something on your mind you'd like to talk about? Whether it's related
                    to work or just a casual conversation, I am here and ready to listen. Please
                    don't hesitate to reach out to me at any time. 🙋‍♂️.
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
