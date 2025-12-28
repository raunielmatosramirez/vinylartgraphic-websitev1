// BusinessCardsPricingExactImageCompact.tsx
import React from "react";

// Definición de tipos
interface PricingRow {
  quantity: number;
  price_4_0?: string;
  price_4_4?: string;
}

interface ProductSection {
  title: string;
  hasTwoColumns: boolean;
  rows: PricingRow[];
}

const BusinessCardsPricingExactImageCompact: React.FC = () => {
  const pricingData: ProductSection[] = [
    {
      title: "Business cards",
      hasTwoColumns: true,
      rows: [
        { quantity: 100, price_4_4: "50.00" },
        { quantity: 500, price_4_0: "60.00", price_4_4: "70.00" },
        { quantity: 1000, price_4_0: "70.00", price_4_4: "99.00" },
        { quantity: 5000, price_4_0: "220.00", price_4_4: "220.00" },
      ],
    },
    {
      title: "Business cards bordes curves",
      hasTwoColumns: true,
      rows: [
        { quantity: 500, price_4_0: "70.00", price_4_4: "90.00" },
        { quantity: 1000, price_4_0: "90.00", price_4_4: "110.00" },
        { quantity: 5000, price_4_0: "250.00", price_4_4: "250.00" },
      ],
    },
    {
      title: "Business cards UV",
      hasTwoColumns: false,
      rows: [
        { quantity: 250, price_4_4: "160.00" },
        { quantity: 500, price_4_4: "190.00" },
        { quantity: 1000, price_4_4: "350.00" },
      ],
    },
    {
      title: "Business cards DORADAS",
      hasTwoColumns: false,
      rows: [
        { quantity: 500, price_4_4: "250.00" },
        { quantity: 1000, price_4_4: "420.00" },
      ],
    },
  ];

  const formatPrice = (price: string | undefined): string => {
    if (!price) return "";
    const num = parseFloat(price);
    return num.toFixed(2);
  };

  return (
    <div className='p-2 text-white'>
      <div className='max-w-md mx-auto p-2'>
        {/* Tabla Business cards */}
        <div className='mb-3'>
          <table className='w-full font-mono text-sm'>
            <thead>
              <tr>
                <th className='px-1 py-0.5 text-left font-medium text-[#FFFF00]'>
                  Business cards
                </th>
                <th className='px-1 py-0.5 text-center font-medium'>4/0</th>
                <th className='px-1 py-0.5 text-center font-medium'>4/4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>100</td>
                <td className='px-1 py-0.5 text-center text-gray-400'>-</td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("50.00")}
                </td>
              </tr>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>500</td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("60.00")}
                </td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("70.00")}
                </td>
              </tr>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>1000</td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("70.00")}
                </td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("99.00")}
                </td>
              </tr>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>5000</td>
                <td className='px-1 py-0.5 text-center'>
                  ${formatPrice("220.00")}
                </td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("220.00")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tabla Business cards bordes curves */}
        <div className='mb-3'>
          <table className='w-full font-mono text-sm'>
            <thead>
              <tr>
                <th className='px-1 py-0.5 text-left font-medium text-[#FFFF00]'>
                  Business cards bordes curves
                </th>
                <th className='px-1 py-0.5 text-center font-medium'>4/0</th>
                <th className='px-1 py-0.5 text-center font-medium'>4/4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>500</td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("70.00")}
                </td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("90.00")}
                </td>
              </tr>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>1000</td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("90.00")}
                </td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("110.00")}
                </td>
              </tr>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>5000</td>
                <td className='px-1 py-0.5 text-center'>
                  ${formatPrice("250.00")}
                </td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("250.00")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tabla Business cards UV */}
        <div className='mb-3'>
          <table className='w-full font-mono text-sm'>
            <thead>
              <tr>
                <th className='px-1 py-0.5 text-left font-medium text-[#FFFF00]'>
                  Business cards UV
                </th>
                <th className='px-1 py-0.5 text-center font-medium'>4/4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>250</td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("160.00")}
                </td>
              </tr>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>500</td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("190.00")}
                </td>
              </tr>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>1000</td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("350.00")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tabla Business cards DORADAS */}
        <div className='mb-3'>
          <table className='w-full font-mono text-sm'>
            <thead>
              <tr>
                <th className='px-1 py-0.5 text-left font-medium text-[#FFFF00]'>
                  Business cards GOLDEN
                </th>
                <th className='px-1 py-0.5 text-center font-medium'>4/4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>500</td>
                <td className='px-1 py-0.5 text-center'>
                  $ {formatPrice("250.00")}
                </td>
              </tr>
              <tr>
                <td className='px-1 py-0.5 font-medium text-start'>1000</td>
                <td className='px-1 py-0.5  text-start'>
                  $ {formatPrice("420.00")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardsPricingExactImageCompact;
