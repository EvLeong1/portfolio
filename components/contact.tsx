"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { experimental_useFormStatus } from "react-dom";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
    const { ref } = useSectionInView("Contact", 0.5);
    

    return (
        <motion.section 
        id="contact" 
        ref={ref}
        className="mb-20 sm:mb-28 w-[min(100%,38rem)] scroll-mt-28"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5}}
        >
            <SectionHeading>Contact</SectionHeading>
            <p className="text-gray-700 text-center -mt-4 dark:text-gray-200">
                Contact me directly at <a className = 'underline' href="mailto:evleong1@gmail.com">evleong1@gmail.com</a>{" "} or through the form below!</p>
            <form className="mt-10 flex flex-col"
            action={async formData => {
                const{data,error} = await sendEmail(formData);
                if(error){
                    toast.error(error);
                    return;
                }
                toast.success("Email sent successfully!");
            }}>
                <input className="dark:bg-slate-500 bg-[#E5D9C5] h-14 rounded-lg border border-black/10 px-4" type="email" name="senderEmail" required maxLength={500} placeholder="Your Email" />
                <textarea className="dark:bg-slate-500 bg-[#E5D9C5] h-52 my-3 rounded-lg border border-black/10 p-4" required maxLength={5000} name="message"  placeholder="Your Message"/>
                <SubmitBtn/>
            </form>
        </motion.section >

    );
}