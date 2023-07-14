import { motion } from "framer-motion";
import EarthCanvas from "./canvas/Earth";
import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:chijokeogbuanya@gmail?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}. (${data.email})`;
  };

  
  return (
    <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly max-w-screen lg:space-y-9 mx-auto items-center">
          
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">Contact
      </h3>
        
      <div className="flex mt-10 flex-col space-y-7">
        <h4 className="md:text-4xl text-xl font-semibold text-center">
            I have got just what you need.{" "}
            <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>


              

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
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-3 px-5 w-auto">
              <div className="flex flex-col space-y-2 md:space-y-0 md:space-x-2 md:flex-row">
                <input
                  {...register('name')}
                  className="contactInput h-10"
                  type="text"
                  placeholder="Full Name"
                  />
                <input
                  {...register('email')}
                  className="contactInput h-10"
                  type="email"
                  placeholder="Email"
                  />
              </div>

                <input
                  {...register('subject')}
                  className="contactInput h-10"
                  type="text"
                  placeholder="Subject"
                  />
              <textarea
                {...register('message')}
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