'use client';
import Image from "next/image";
import Pic1 from '@/public/next.svg'
import Pic2 from '@/public/vercel.svg'
import mask from "@/public/mask.png"
import man from "@/public/man.png"
import logo from "@/public/image (4).jpg"
import yn from "@/public/your-name.jpeg"
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';

export default function Home() {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main ref={container} className="relative h-[500vh]">
      <Section0 />

      <Section1 scrollYProgress={scrollYProgress} imgsrc={mask} />
    
      <Section1 scrollYProgress={scrollYProgress} imgsrc={Pic1} />
      <Section1 scrollYProgress={scrollYProgress} imgsrc={man} />
      {/* <Section1 scrollYProgress={scrollYProgress} imgsrc={yn} /> */}
      <Section2 scrollYProgress={scrollYProgress} />
 

    </main>
  );
}

const Section0 = () => {

  // const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  // const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0])
  const pink_gradiant = 'bg-gradient-to-r from-green-900 to-green-600 filter blur-[103px]'
  const white_gradiant = 'bg-white bg-opacity-60 filter blur-[750px]'
  const blue_gradiant = 'bg-gradient-to-t from-transparent via-blue-800 to-transparent filter blur-[103px]'
  const bg_discount_gradient = 'bg-gradient-to-tr from-gray-700 to-indigo-900'
  const text_gradient = ' bg-gradient-to-br from-green-100 via-green-300 to-green-500 text-transparent bg-clip-text' 

  return (
    <section id="home" className={`flex md:flex-row flex-col h-[100vh]`}>
      <div className={`flex-1  pt-12 flex-col xl:px-0 items-center sm:px-16 px-6`}>


        <div className="flex flex-row justify-between poppins-black items-center w-full">
          <h1 className=" flex-1  font-semibold ss:text-[72px] text-[75px] text-white ss:leading-[100.8px] leading-[75px]">
             Get Your<br className="sm:block hidden" />{" "}
            <span className={`${text_gradient}`}>Spotify Playlist</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            {/* <GetStarted /> */}
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          rigth now
        </h1>
        <p className={` max-w-[470px] mt-5 text-white    `}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`flex-1 flex   md:my-0 my-10 relative`}>

            <div className="h-[60%] w-[70%] rounded-xl bg-white m-auto opacity-100 z-[10] relative bg-opacity-20  -rotate-[4deg] ">

            <Image src={logo} alt="billing" className="w-[100%] h-[100%] relative z-[5] rounded-lg " />
            </div>

          
        {/* gradient start */}
        <div className={`absolute z-[0] w-[60%] h-[35%] top-0 ${pink_gradiant} `} />
        <div className={`absolute z-[1] w-[80%] h-[80%] rounded-full ${white_gradiant} `} />
        <div className={`absolute z-[0] w-[50%] h-[50%] right-10 bottom-10 ${blue_gradiant}`} />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden`}>
        {/* <GetStarted /> */}
      </div>  
    </section>
  );
}

const Section1 = ({ scrollYProgress, imgsrc }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -6])
  return (
    <motion.div style={{ scale, rotate }} className="sticky top-0 h-screen bg-[#0e0d0d] flex items-center justify-center text-white">
      <div className="relative w-[90%] h-[90%] border-8 border-white p-2 rounded-xl">
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src={imgsrc}
            alt="img"
            layout="fill" // Ensures the image fills its parent container
            objectFit="cover" // Maintains the aspect ratio and covers the entire container
            className="rounded-xl bg-center    "
          />
        </div>
      </div>
    </motion.div>

  )
}

const Section2 = ({ scrollYProgress }) => {

  // const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  // const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0])

  return (
    <motion.div      className="relative h-[100vh] bg-green-400">
      <Image
        src={Pic2}
        alt="img"
        // placeholder="blur"
        fill
      />
    </motion.div>
  )
}

