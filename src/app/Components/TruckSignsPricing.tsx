// TruckSignsPricingTwoCol.tsx
import React from 'react';

const TruckSignsPricingTwoCol: React.FC = () => {
  const formatPrice = (price: string): string => {
    const num = parseFloat(price);
    return num.toFixed(2);
  };

  return (
    <div className='p-2 text-white z-9'>
      <div className='max-w-md mx-auto p-2'>
        {/* Tabla Signs for Truck */}
        <div className='mb-3'>
          <table className='w-full font-mono text-sm'>
            <thead>
              <tr>
                <th className='px-1 py-0.5 text-left font-medium text-[#FFFF00]'>
                  Signs for Truck
                </th>
                <th className='px-1 py-0.5 text-center font-medium  '>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-1 py-0.5 text-start'>
                  <div>
                    <div className='font-medium'>2 x 1 Feet</div>
                    <div className='text-xs text-gray-400'>2U</div>
                  </div>
                </td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("80.00")}
                  <div className='text-xs text-gray-400'>($40.00 c/door)</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TruckSignsPricingTwoCol;