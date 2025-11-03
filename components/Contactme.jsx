"use client"
import { useRef } from "react"
import toast from "react-hot-toast"
import emailjs from '@emailjs/browser';

const serviceId = process.env.NEXT_PUBLIC_Service_ID;
const template = process.env.NEXT_PUBLIC_Temp_ID;
const key = process.env.NEXT_PUBLIC_Key


const Contactme = () => {
    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();
        console.log("Form Ref:", form.current);
        emailjs.sendForm(serviceId, template, form.current, key)
            .then((result) => {
                form.current.reset();
                toast.success("The message has been successfully sent");
            })
            .catch((error) => {
                toast.error(error.text);
            });
    }

    return (
        <div className="flex flex-col lg:gap-10 lg:flex-row max-w-6xl mx-auto py-14 mt-14 px-6 lg:px-8">
            <h1 className="text-2xl md:text-4xl lg:w-1/2 font-bold ">I will read all emails. Send me any message you want and I&apos;ll get back to you</h1>
            <div className="mt-8 lg:mt-0 lg:w-[45%] ">
                <form ref={form} onSubmit={sendEmail} className="flex w-full flex-col lg:px-7 gap-y-5 ">
                    <input type="text" name="user_name" required placeholder="Your name" className="w-full bg-gray-100 rounded-lg p-4  outline-none border border-gray-300" />
                    <input type="email" name="user_email" required placeholder="Your Email Address" className="w-full  bg-gray-100 rounded-lg p-4 outline-none border border-gray-300" />
                    <textarea required name="message" placeholder="Write your message ..." className="w-full  bg-gray-100 h-32 rounded-lg  p-4 outline-none border border-gray-300" />
                    <div>
                        <button type="submit" className="p-4 bg-gray-200 hover:bg-gray-300 rounded-lg" >Send message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contactme
