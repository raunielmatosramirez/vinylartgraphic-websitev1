// TShirtsPricing.tsx
import React from "react";

const TShirtsPricing: React.FC = () => {
  const formatPrice = (price: string): string => {
    const num = parseFloat(price);
    return num.toFixed(2);
  };

  return (
    <div className='p-2 text-white z-9'>
      <div className='max-w-md mx-auto p-2'>
        {/* Tabla T-Shirts & Polos */}
        <div className='mb-3'>
          <table className='w-full font-mono text-sm'>
            <thead>
              <tr>
                <th className='px-1 py-0.5 text-left font-medium text-[#FFFF00]'>
                  T-SHIRTS & POLOS
                </th>
                <th className='px-1 py-0.5 text-center font-medium'>Price</th>
                <th className='px-1 py-0.5 text-center font-medium'>Unit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>
                  12 units PRINTED FRONT
                </td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("25.00")}
                </td>
                <td className='px-1 py-0.5 text-center text-gray-400'>each</td>
              </tr>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>
                  12 units PRINTED FRONT AND BACK
                </td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("30.00")}
                </td>
                <td className='px-1 py-0.5 text-center text-gray-400'>each</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tabla T-Shirts Manga Larga o Corta */}
        <div className='mb-3'>
          <table className='w-full font-mono text-sm'>
            <thead>
              <tr>
                <th className='px-1 py-0.5 text-left font-medium text-[#FFFF00]'>
                  TSHIRTS MANGA LARGA O CORTA
                </th>
                <th className='px-1 py-0.5 text-center font-medium'>Price</th>
                <th className='px-1 py-0.5 text-center font-medium'>Unit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>
                  12 units PRINTED FRONT
                </td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("20.00")}
                </td>
                <td className='px-1 py-0.5 text-center text-gray-400'>each</td>
              </tr>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>
                  12 units PRINTED FRONT AND BACK
                </td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("25.00")}
                </td>
                <td className='px-1 py-0.5 text-center text-gray-400'>each</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TShirtsPricing;
