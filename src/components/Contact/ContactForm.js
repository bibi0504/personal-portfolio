import { useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import { useDarkMode } from '@/context/darkMode';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FadeContainer, mobileNavItemSideways } from '@/content/framerMotionVariants';

const initialFormState = {
    toName: 'Minato Hayashi',
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
};

export default function ContactForm() {
    const [emailInfo, setEmailInfo] = useState(initialFormState);
    const [loading, setLoading] = useState(false);
    const { isDarkMode } = useDarkMode();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
                process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
                emailInfo,
                process.env.NEXT_PUBLIC_YOUR_USER_ID
            )
            .then((res) => {
                setLoading(false);
                setEmailInfo(initialFormState);
                toast.success('Message Sent.');
            })
            .catch((err) => {
                console.log(err.text);
                setLoading(false);
                toast.error('😥 ' + err.text);
            });
    };

    const validateForm = () => {
        for (const key in emailInfo) {
            if (emailInfo[key] === '') {
                return false;
            }
        }

        return true;
    };

    const submitFormOnEnter = (e) => {
        if ((e.keyCode == 10 || e.keyCode == 13) && e.ctrlKey) {
            if (validateForm()) {
                return sendEmail(e);
            }
        }

        toast.error('Looks like you have not filled the form');
    };

    return (
        <>
            <motion.form
                initial="hidden"
                whileInView="visible"
                variants={FadeContainer}
                viewport={{ once: true }}
                className="w-full flex flex-col items-center max-w-xl mx-auto my-10 dark:text-gray-300"
                onSubmit={sendEmail}
                onKeyDown={submitFormOnEnter}
            >
                <div className="w-full grid grid-cols-2 gap-6">
                    <motion.div
                        variants={mobileNavItemSideways}
                        className="relative z-0 w-full mb-6 group"
                    >
                        <input
                            type="text"
                            name="firstName"
                            id="floatingFirstName"
                            className="block py-2 mt-2 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "
                            required
                            value={emailInfo.firstName}
                            onChange={(e) =>
                                setEmailInfo({
                                    ...emailInfo,
                                    [e.target.name]: e.target.value,
                                })
                            }
                        />
                        <label
                            htmlFor="floatingFirstName"
                            className="peer-focus:font-medium absolute text-sm text-white-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            First name
                        </label>
                    </motion.div>
                    <motion.div
                        variants={mobileNavItemSideways}
                        className="relative z-0 w-full mb-6 group"
                    >
                        <input
                            type="text"
                            name="lastName"
                            id="floatingLastName"
                            className="block py-2 mt-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder=" "
                            required
                            value={emailInfo.lastName}
                            onChange={(e) =>
                                setEmailInfo({
                                    ...emailInfo,
                                    [e.target.name]: e.target.value,
                                })
                            }
                        />
                        <label
                            htmlFor="floatingLastName"
                            className="peer-focus:font-medium absolute text-sm text-white-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Last name
                        </label>
                    </motion.div>
                </div>
                <motion.div
                    variants={mobileNavItemSideways}
                    className="relative z-0 w-full mb-6 group"
                >
                    <input
                        type="email"
                        name="email"
                        id="floatingEmail"
                        className="block py-2 mt-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:dark:border-white focus:border-black peer"
                        placeholder=" "
                        required
                        value={emailInfo.email}
                        onChange={(e) =>
                            setEmailInfo({
                                ...emailInfo,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                    <label
                        htmlFor="floatingEmail"
                        className="peer-focus:font-medium absolute text-sm text-white-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email address
                    </label>
                </motion.div>
                <motion.div
                    variants={mobileNavItemSideways}
                    className="relative z-0 w-full mb-6 group"
                >
                    <input
                        type="subject"
                        name="subject"
                        id="floatingSubject"
                        className="block py-2 mt-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-black peer"
                        placeholder=" "
                        required
                        value={emailInfo.subject}
                        onChange={(e) =>
                            setEmailInfo({
                                ...emailInfo,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                    <label
                        htmlFor="floatingSubject"
                        className="peer-focus:font-medium absolute text-sm text-white-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Subject
                    </label>
                </motion.div>
                <motion.div
                    variants={mobileNavItemSideways}
                    className="relative z-0 w-full mb-6 group"
                >
                    <textarea
                        name="message"
                        id="floatingMessage"
                        className="block py-2 mt-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0  peer min-h-[100px] resize-y focus:border-black"
                        placeholder=" "
                        required
                        value={emailInfo.message}
                        onChange={(e) =>
                            setEmailInfo({
                                ...emailInfo,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                    <label
                        htmlFor="floatingMessage"
                        className="peer-focus:font-medium absolute text-sm text-white-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black dark:peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Message
                    </label>
                </motion.div>

                <motion.div
                    variants={mobileNavItemSideways}
                    className="w-full sm:max-w-sm rounded-lg overflow-hidden "
                >
                    <button
                        type="submit"
                        className="text-white bg-neutral-800  dark:bg-darkSecondary font-medium rounded-lg text-sm w-full px-4 py-3 text-center relative overflow-hidden transition duration-300 outline-none active:scale-95"
                    >
                        <div className="relative w-full flex items-center justify-center">
                            <p className={loading ? 'inline-flex animate-spin mr-3' : 'hidden'}>
                                <AiOutlineLoading className="font-bold text-xl" />
                            </p>
                            <p>{loading ? 'Sending...' : 'Send'}</p>
                        </div>
                    </button>
                </motion.div>
            </motion.form>
            <ToastContainer theme={isDarkMode ? 'dark' : 'light'} style={{ zIndex: 1000 }} />
        </>
    );
}
