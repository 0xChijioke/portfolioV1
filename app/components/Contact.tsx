"use client";
import { motion } from "framer-motion";
import EarthCanvas from "./canvas/Earth";
import { useRef, useState } from "react";

type Props = {}

const Contact = (props: Props) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
          className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly max-w-screen lg:space-y-9 mx-auto items-center">
          
          <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>
        
          <div className="flex mt-10 flex-col space-y-7">
              <h4 className="md:text-4xl text-xl font-semibold text-center">
                  I have got just what you need.{" "}
                  <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
              </h4>


              {/* <div className="space-y-5 mx-auto">
                  <div className="flex items-center space-x-5 justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-pulse text-[#F7Ab0A]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      <p>+2349000000000</p>
                  </div>
                
                  <div className="flex items-center space-x-5 justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-pulse text-[#F7Ab0A]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <p>chijokeogbuanya@gmail.com</p>
                  </div>

            </div> */}
              

        <div className="w-full flex flex-row-reverse justify-center">

          <motion.div
              initial={{
                  x: -200,
                  opacity: 0,
              }}
              transition={{
                  duration: 1,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute lg:relative hidden  z-0 lg:flex justify-center lg:w-[45%]">
            <EarthCanvas />
          </motion.div>


          <div className="flex flex-col  lg:w-[50%] mx-5 my-10 p-5 z-10 items-center">
            <form className="flex flex-col space-y-3 px-5 w-auto">
              <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row">
                <input
                  className="contactInput h-10"
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  className="contactInput h-10"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <textarea
                className="contactInput"
                cols={5}
                placeholder="Message"
              />
              <button className="uppercase bg-[#F7AB0A] py-3 px-10 rounded-md text-black font-bold text-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact;