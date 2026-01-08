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
  // const pricingData: ProductSection[] = [
  //   {
  //     title: "Business cards",
  //     hasTwoColumns: true,
  //     rows: [
  //       { quantity: 100, price_4_4: "50.00" },
  //       { quantity: 500, price_4_0: "50.00", price_4_4: "70.00" },
  //       { quantity: 1000, price_4_0: "70.00", price_4_4: "90.00" },
  //       { quantity: 5000, price_4_0: "220.00", price_4_4: "220.00" },
  //     ],
  //   },
  //   {
  //     title: "Business cards bordes curves",
  //     hasTwoColumns: true,
  //     rows: [
  //       { quantity: 500, price_4_0: "70.00", price_4_4: "90.00" },
  //       { quantity: 1000, price_4_0: "90.00", price_4_4: "110.00" },
  //       { quantity: 5000, price_4_0: "250.00", price_4_4: "250.00" },
  //     ],
  //   },
  //   {
  //     title: "Business cards-UV",
  //     hasTwoColumns: false,
  //     rows: [
  //       { quantity: 250, price_4_4: "160.00" },
  //       { quantity: 500, price_4_4: "190.00" },
  //       { quantity: 1000, price_4_4: "350.00" },
  //     ],
  //   },
  //   {
  //     title: "Business cards DORADAS",
  //     hasTwoColumns: false,
  //     rows: [
  //       { quantity: 500, price_4_4: "250.00" },
  //       { quantity: 1000, price_4_4: "420.00" },
  //     ],
  //   },
  // ];

  const formatPrice = (price: string | undefined): string => {
    if (!price) return "";
    const num = parseFloat(price);
    return num.toFixed(2);
  };

  return (
    <div className='p-2 text-white z-9'>
      <div className='max-w-md mx-auto p-2'>
        {/* Tabla Business cards */}
        <div className='mb-4'>
          <table className='w-full font-mono text-sm border-separate border-spacing-0'>
            <thead>
              <tr className=''>
                <th className='px-2 py-2 text-left font-medium text-[#FFFF00] w-[200]'>
                  Business cards
                </th>
                <th className='px-2 py-2 text-center font-medium w-[80px]'>4/0</th>
                <th className='px-2 py-2 text-center font-medium w-[80px]'>4/4</th>
              </tr>
            </thead>
            <tbody>
              <tr className=''>
                <td className='px-2 py-2 text-left  font-medium '>100</td>
                <td className='px-2 py-2 text-center  text-gray-400'>-</td>
                <td className='px-2 py-2 text-center '>
                  $ {formatPrice("50.00")}
                </td>
              </tr>
              <tr className=''>
                <td className='px-2 py-2 text-left  font-medium '>500</td>
                <td className='px-2 py-2 text-center '>
                  $ {formatPrice("50.00")}
                </td>
                <td className='px-2 py-2 text-center '>
                  $ {formatPrice("70.00")}
                </td>
              </tr>
              <tr className=''>
                <td className='px-2 py-2 text-left font-medium '>1000</td>
                <td className='px-2 py-2 text-center '>
                  $ {formatPrice("70.00")}
                </td>
                <td className='px-2 py-2 text-center '>
                  $ {formatPrice("90.00")}
                </td>
              </tr>
              <tr className=''>
                <td className='px-2 py-2 text-left    font-medium'>5000</td>
                <td className='px-2 py-2 text-center'>
                  ${formatPrice("220.00")}
                </td>
                <td className='px-2 py-2 text-center'>
                  $ {formatPrice("220.00")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tabla Business cards bordes curves */}
        <div className='mb-4'>
          <table className='w-full font-mono text-sm border-separate border-spacing-0'>
            <thead>
              <tr className=''>
                <th className='px-2 py-2 text-left font-medium text-[#FFFF00] w-[200]'>
                  Business cards-CURVED EDGES
                </th>
                <th className='px-2 py-2 text-center font-medium w-[80px]'>4/0</th>
                <th className='px-2 py-2 text-center font-medium w-[80px]'>4/4</th>
              </tr>
            </thead>
            <tbody>
              <tr className=''>
                <td className='px-2 py-2 text-left font-medium '>500</td>
                <td className='px-2 py-2 text-center '>
                  $ {formatPrice("70.00")}
                </td>
                <td className='px-2 py-2 text-center '>
                  $ {formatPrice("90.00")}
                </td>
              </tr>
              <tr className=''>
                <td className='px-2 py-2 font-medium text-left '>1000</td>
                <td className='px-2 py-2 text-center '>
                  $ {formatPrice("90.00")}
                </td>
                <td className='px-2 py-2 text-center '>
                  $ {formatPrice("110.00")}
                </td>
              </tr>
              <tr className=''>
                <td className='px-2 py-2 font-medium text-left '>5000</td>
                <td className='px-2 py-2 text-center'>
                  ${formatPrice("250.00")}
                </td>
                <td className='px-2 py-2 text-center'>
                  $ {formatPrice("250.00")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tabla Business cards UV */}
        <div className='mb-4'>
          <table className='w-full font-mono text-sm border-separate border-spacing-0'>
            <thead>
              <tr className=''>
                <th className='px-2 py-2 text-left font-medium text-[#FFFF00] w-[200]'>
                  Business cards-UV
                </th>
                <th className='px-2 py-2 text-center font-medium w-[80px]'>4/4</th>
                <th className='px-2 py-2 text-center font-medium w-[80px] text-gray-400'>-</th>
              </tr>
            </thead>
            <tbody>
              <tr className=''>
                <td className='px-2 py-2 font-medium text-left  '>250</td>
                <td className='px-2 py-2 text-center '>
                  $ {formatPrice("160.00")}
                </td>
                <td className='px-2 py-2 text-center  text-gray-400'>-</td>
              </tr>
              <tr className=''>
                <td className='px-2 py-2 font-medium text-left '>500</td>
                <td className='px-2 py-2 text-center '>
                  $ {formatPrice("190.00")}
                </td>
                <td className='px-2 py-2 text-center  text-gray-400'>-</td>
              </tr>
              <tr className=''>
                <td className='px-2 py-2 font-medium text-left '>1000</td>
                <td className='px-2 py-2 text-center'>
                  $ {formatPrice("350.00")}
                </td>
                <td className='px-2 py-2 text-center text-gray-400'>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tabla Business cards DORADAS */}
        <div className='mb-4'>
          <table className='w-full font-mono text-sm border-separate border-spacing-0'>
            <thead>
              <tr className=''>
                <th className='px-2 py-2 text-left font-medium text-[#FFFF00] w-[200]'>
                  Business cards-GOLDEN
                </th>
                <th className='px-2 py-2 text-center font-medium w-[80px]'>4/4</th>
                <th className='px-2 py-2 text-center font-medium w-[80px] text-gray-400'>-</th>
              </tr>
            </thead>
            <tbody>
              <tr className=''>
                <td className='px-2 py-2 font-medium text-left '>500</td>
                <td className='px-2 py-2 text-center '>
                  $ {formatPrice("250.00")}
                </td>
                <td className='px-2 py-2 text-center  text-gray-400'>-</td>
              </tr>
              <tr className=''>
                <td className='px-2 py-2 font-medium text-left '>1000</td>
                <td className='px-2 py-2 text-center'>
                  $ {formatPrice("420.00")}
                </td>
                <td className='px-2 py-2 text-center text-gray-400'>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BusinessCardsPricingExactImageCompact;