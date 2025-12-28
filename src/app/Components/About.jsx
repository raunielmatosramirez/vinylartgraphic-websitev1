"use client";
import Image from "next/image";

const About = () => {
  
  return (
    <div className='z-10 flex flex-col items-center  justify-center text-center'>
      <h1 className='text-[35px] font-bold text-[#FFFF00] mt-[40px] '>
        ABOUT US
      </h1>
      <div className='w-[80%] h-[1px] border-t-2 border-dashed border-[#FFFF00] mt-[40px]  '></div>
      <div className='mt-[40px]'>
        <Image
          src='/AÑOSDEEXPERIENCIA.svg'
          width={255}
          height={255}
          priority={true}
          objectFit='cover'
          objectPosition='50% 50%'
          alt='Years of Experience Icon'
        />
      </div>
      <p className='text-[14px] mt-[40px] text-white max-w-2xl leading-relaxed'>
        Established business since 2018 in US, with design and printing
        experience since 2000 in different countries. Today we have the
        experience, knowledge, qualified personnel and equipment to offer a
        great variety of work and services.
      </p>
      <div className='mt-[90px]'>
        <Image
          src='/TIENDATALLER1.png'
          width={550}
          priority
          height={645}
          objectFit='cover'
          objectPosition='50% 50%'
          alt='Taller foto...'
        />
      </div>
      <div className='mb-4 mt-[80px]'>
        <Image
          src='/MISIONICON.svg'
          alt='Mission Icon'
          width={50}
          priority={true}
          height={50}
          className='mx-auto'
        />
      </div>
      <h2 className='text-[24px] font-bold text-[#FFFF00]  mb-[32px]'>
        OUR MISSION
      </h2>
      <div className='w-[200px] h-[1px] bg-[#FFFF00] mb-[25px] rounded-full'></div>
      <p className='text-[14px] text-white max-w-2xl leading-relaxed mb-[80px]'>
        To be Miami's trusted printing and design workshop, transforming ideas
        into innovative and lasting visual solutions. We specialize in creating
        everything from professional signage to promotional materials, always
        focusing on quality, creativity, and personalized service to enhance
        each client's identity.
      </p>
      <div className='mb-[32px] ml-6'>
        <Image
          src='/VISIONICON.svg'
          alt='Vision Icon'
          width={80}
          priority={true}
          height={80}
          className='mx-auto'
        />
      </div>
      <h2 className='text-[24px] font-bold text-[#FFFF00] '>OUR VISION</h2>
      <div className='w-[200px] h-[1px] bg-[#FFFF00] mt-[25px] rounded-full'></div>
      <p className='text-[14px] text-white max-w-2xl leading-relaxed mt-[25px] '>
        To become one of the leading printing and graphic design companies in
        Miami, recognized for our versatility, quality, and adaptability. We aim
        to be the strategic partner for entrepreneurs and businesses, using
        cutting-edge technology to bring innovation and professionalism to every
        project, with a personalized approach and creative solutions.
      </p>
    </div>
  );
};
export default About;
