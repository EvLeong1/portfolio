"use server";
import React from "react";
import { validateString, getErrorMessage } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form";

const resend = new Resend(process.env.RESEND_API_KEY);

//Sends the email to the email address specified in the contact form using the RESEND API
export const sendEmail = async (formData: FormData) => {
    const email = formData.get("senderEmail");
    const message = formData.get("message");

    if(!validateString(email, 500)){
       return{
        error: "Invalid sender email!"
       };
    }
    if(!validateString(message, 5000)){
        return{
         error: "Invalid message!"
        };
     }

    let data;
    try{
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'evleong1@gmail.com',
            subject: 'New message from Portfolio Contact Form',
            //text: `From: ${email}\n\n${message}`,
            //react: <ContactFormEmail message={message} senderEmail={email}/>,
            react: React.createElement(ContactFormEmail, {
                message: message as string, 
                senderEmail: email as string}),
            reply_to: email as string
        });
    }
    catch(error: unknown){

        return {
            error:getErrorMessage(error)
        };
    }
    return {
        data,
    };
    
};

