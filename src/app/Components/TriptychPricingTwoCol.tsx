// TriptychPricingTwoCol.tsx
import React from 'react';

const TriptychPricingTwoCol: React.FC = () => {
  const formatPrice = (price: string): string => {
    const num = parseFloat(price);
    return num.toFixed(2);
  };

  return (
    <div className='p-2 text-white z-9'>
      <div className='max-w-md mx-auto p-2'>
        {/* Tabla Triptych */}
        <div className='mb-3'>
          <table className='w-full font-mono text-sm'>
            <thead>
              <tr>
                <th className='px-1 py-0.5 text-left font-medium text-[#FFFF00]'>
                  Flyers
                </th>
                <th className='px-1 py-0.5 text-center font-medium  '>Size</th>
                <th className='px-1 py-0.5 text-center font-medium  '>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-1 py-0.5 text-start font-medium'>
                  500
                </td>
                <td className='px-1 py-0.5 text-center text-gray-400'>
                  8.5 x 11 inch
                </td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("290.00")}
                </td>
              </tr>
              <tr>
                <td className='px-1 py-0.5 text-start font-medium'>
                  1000
                </td>
                <td className='px-1 py-0.5 text-center text-gray-400'>
                  8.5 x 11 inch
                </td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("350.00")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TriptychPricingTwoCol;