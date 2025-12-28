// YardSignsPricing.tsx
import React from 'react';

const YardSignsPricing: React.FC = () => {
  const formatPrice = (price: string): string => {
    const num = parseFloat(price);
    return num.toFixed(2);
  };

  return (
    <div className='p-2 text-white z-9'>
      <div className='max-w-md mx-auto p-2'>
        {/* Tabla Yard Signs */}
        <div className='mb-3'>
          <table className='w-full font-mono text-sm'>
            <thead>
              <tr>
                <th className='px-1 py-0.5 text-left font-medium text-[#FFFF00]'>
                  Yard Signs
                </th>
                <th className='px-1 py-0.5 text-center font-medium  '>Quantity</th>
                <th className='px-1 py-0.5 text-center font-medium '>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-1 py-0.5 text-start'>
                  <div>
                    <div className='font-medium'>24 x 15 Feet</div>
                  </div>
                </td>
                <td className='px-1 py-0.5 text-center font-medium'>
                  10 x
                </td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("200.00")}
                </td>
              </tr>
              <tr>
                <td className='px-1 py-0.5 text-start'>
                  <div>
                    <div className='font-medium'>24 x 15 Feet</div>
                    <div className='text-xs text-gray-400'>less than 10</div>
                  </div>
                </td>
                <td className='px-1 py-0.5 text-center font-medium'>
                  1 x
                </td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("25.00")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default YardSignsPricing;