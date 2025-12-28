import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import {services} from "../../utils/servicesData"

const NavCuadrados = () => {
  const router = useRouter();
  
  return (
    <>
      <div className='absolute min-h-screen hidden md:flex w-full bg-transparent  items-center justify-center p-4 md:p-0 mt-[-50px] md:mt-[-50px] z-0'>
        <div className='relative w-full md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] ml-0 md:ml-1 h-64 sm:h-72 md:h-80 lg:h-96 grid grid-cols-1 sm:grid-cols-2 grid-rows-4 sm:grid-rows-2 gap-2 sm:gap-0'>
          {/* SERVICES Card - Sin redondeo */}
          <div className='relative navCard text-[#ffff00] hover:bg-[#e4e401] hover:border-t-3 bg-opacity-1 hover:border-t-[#ffff00] hover:text-[#38382f] transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer overflow-hidden group min-h-[120px] sm:min-h-0'>
            <p className='absolute font-bold left-0 text-lg sm:text-xl md:text-2xl lg:text-[25px] transition-colors pointer-events-none m-2 sm:m-1 md:m-2'>
              SERVICES
            </p>
            <div className='absolute text-md top-8 bottom-4 md:bottom-3 md:top-12 sm:bottom-2 left-0 right-0 px-4 md:px-3 sm:px-2 space-y-1 md:space-y-0.5 sm:space-y-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 md:translate-y-3 sm:translate-y-2 group-hover:translate-y-0'>
              {services.map((serv, key) => (
                <Link
                  key={key}
                  href={`/services/${serv.service
                    ?.toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className='block text-base md:text-sm sm:text-xs text-[#38382f] hover:underline  underline-offset-2 md:underline-offset-2 transition-all duration-200'
                >
                  {serv?.service}
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT US Card */}
          <div
            onClick={() => router.push("/contact-us")}
            className='relative navCard text-[#ffff00] hover:bg-[#e4e401] hover:border-t-3 bg-opacity-1 hover:border-t-[#ffff00] hover:text-[#38382f] transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer overflow-hidden min-h-[120px] sm:min-h-0 sm:h-[40%]'
          >
            <Link
              href='contact-us'
              className='text-lg sm:text-xl md:text-2xl lg:text-[25px] absolute top-2 sm:top-2 right-2 sm:right-2 font-bold transition-colors pointer-events-none'
            >
              CONTACT US
            </Link>
          </div>

          {/* ABOUT US Card */}
          <div
            onClick={() => router.push("/about-us")}
            className='relative navCardBottom row-start-3 sm:row-start-2 self-end h-[40%] text-[#ffff00] hover:bg-[#e4e401] hover:border-b-3 bg-opacity-1 hover:border-b-[#ffff00] hover:text-[#38382f] transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer overflow-hidden min-h-[120px] sm:min-h-0'
          >
            <Link
              href='/about-us'
              className='absolute z-10 font-bold left-0 bottom-2 sm:bottom-2 text-lg sm:text-xl md:text-2xl lg:text-[25px] transition-colors pointer-events-none m-2 sm:m-3 md:m-4'
            >
              ABOUT US
            </Link>
          </div>

          {/* GALLERY Card */}
          <div
            onClick={() => router.push("/gallery")}
            className='relative row-start-4 sm:row-start-2 self-end h-[40%] navCardBottom text-[#ffff00] hover:bg-[#e4e401] hover:border-b-3 bg-opacity-1 hover:text-[#38382f] hover:border-b-[#ffff15] transition-all duration-500 ease-in-out hover:scale-105 cursor-pointer overflow-hidden min-h-[120px] sm:min-h-0'
          >
            <Link
              href='#acerca'
              className='absolute font-bold bottom-2 sm:bottom-2 right-2 sm:right-2 text-lg sm:text-xl md:text-2xl lg:text-[25px] transition-colors pointer-events-none'
            >
              GALLERY
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavCuadrados;
