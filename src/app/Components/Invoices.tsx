// InvoicesPricing.tsx
import React from 'react';

const InvoicesPricing: React.FC = () => {
  const formatPrice = (price: string): string => {
    const num = parseFloat(price);
    return num.toFixed(2);
  };

  return (
    <div className='p-2 text-white z-9'>
      <div className='max-w-md mx-auto p-2'>
        {/* Tabla Invoices */}
        <div className='mb-3'>
          <table className='w-full font-mono text-sm'>
            <thead>
              <tr>
                <th className='px-1 py-0.5 text-left font-medium text-[#FFFF00]'>
                  Invoices
                </th>
                <th className='px-1 py-0.5 text-center font-medium'>2 parts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>500</td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("150.00")}
                </td>
              </tr>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>1000</td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("250.00")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvoicesPricing;