// CapsPricing.tsx
import React from 'react';

const CapsPricing: React.FC = () => {
  const formatPrice = (price: string): string => {
    const num = parseFloat(price);
    return num.toFixed(2);
  };

  return (
    <div className='p-2 text-white z-9'>
      <div className='max-w-md mx-auto p-2'>
        {/* Tabla Gorras */}
        <div className='mb-3'>
          <table className='w-full font-mono text-sm'>
            <thead>
              <tr>
                <th className='px-1 py-0.5 text-left font-medium text-[#FFFF00]'>
                  Caps
                </th>
                <th className='px-1 py-0.5 text-center font-medium'>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>CAPS</td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("10.00")}
                </td>
              </tr>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>CAPS with mesh</td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("15.00")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CapsPricing;