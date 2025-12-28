// MagneticsPricing.tsx
import React from 'react';

const MagneticsPricing: React.FC = () => {
  const formatPrice = (price: string): string => {
    const num = parseFloat(price);
    return num.toFixed(2);
  };

  return (
    <div className='p-2 text-white z-9'>
      <div className='max-w-md mx-auto p-2'>
        {/* Tabla Magnetics */}
        <div className='mb-3'>
          <table className='w-full font-mono text-sm'>
            <thead>
              <tr>
                <th className='px-1 py-0.5 text-left font-medium text-[#FFFF00]'>
                  Magnetics
                </th>
                <th className='px-1 py-0.5 text-center font-medium  '>Size</th>
                <th className='px-1 py-0.5 text-center font-medium  '>Qty</th>
                <th className='px-1 py-0.5 text-center font-medium  '>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-1 py-0.5 text-start'></td>
                <td className='px-1 py-0.5 text-center font-medium'>
                  2 x 1 Feet
                </td>
                <td className='px-1 py-0.5 text-center font-medium'>
                  2U
                </td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("80.00")}
                  <div className='text-xs text-gray-400'>($40.00 cu)</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MagneticsPricing;