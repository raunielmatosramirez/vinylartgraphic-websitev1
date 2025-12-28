import React from "react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sofía Bennett",
      comment:
        "Vinyl Art Design is a great team they are versatile and very professional. I love their work!",
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      comment:
        "Vinyl Art Design has been key to modernizing my business's image. Their acrylic signs and transparent vinyl gave it a professional touch that my customers noticed immediately. I 100% recommend them!",
    },

    {
      id: 3,
      name: "Alejandro Parker",
      comment:
        "Every time I need design and printing work to promote my business, I turn to Vinyl Art without hesitation.",
    },
  ];

  return (
    <div className='w-full  px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='flex flex-col items-center  justify-center h-[fit-content]'>
          <h1 className='text-[35px] text-[#FFFF00] font-bold mt-[83px]  mb-[45px]'>
            TESTIMONIALS
          </h1>
          <Image
            priority={true}
            className='mb-[25px]'
            width={70}
            height={90}
            alt='Comillas'
            src='/HOMEICONOCOMILLAS.svg'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className='p-6 flex flex-col items-center text-center h-full'
            >
              <div className='flex flex-col items-center w-full h-full justify-between'>
                <div className='flex flex-col items-center w-full'>
                  <h3 className='text-[16px] font-semibold text-[#FFFF00] mb-1'>
                    {testimonial.name.toLocaleUpperCase()}
                  </h3>
                  <p className='italic text-white text-[14px] mb-3'>Client</p>
                </div>

                <div className='flex-1 flex  justify-center w-full'>
                  <blockquote className='text-white text-[14px] italic leading-relaxed'>
                    "{testimonial.comment}"
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
