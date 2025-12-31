// PostCardsPricingInline.tsx
import React, { JSX } from "react";

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

const PostCardsPricingInline: React.FC = () => {
  // Datos directamente en el componente
  const productSections: ProductSection[] = [
    {
      title: "Post cards (4x6 inch)",
      hasTwoColumns: true,
      rows: [
        { quantity: 250, price_4_4: "120.00" },
        { quantity: 500, price_4_4: "150.00" },
        { quantity: 1000, price_4_4: "190.00" },
        { quantity: 2500, price_4_4: "250.00" },
        { quantity: 5000, price_4_4: "300.00" },
      ],
    },
  ];

  const formatPrice = (price: string | undefined): string => {
    if (!price) return "";
    const num = parseFloat(price);
    return num.toFixed(2);
  };

  const renderSection = (section: ProductSection): JSX.Element => {
    return (
      <div className='mb-3 z-9'>
        <table className='w-full font-mono text-sm'>
          <thead>
            <tr>
              <th className='px-1 py-0.5 text-left font-medium text-[#FFFF00]'>
                {section.title}
              </th>
              <th className='px-1 py-0.5 text-center font-medium'>4/4</th>
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row: PricingRow, rowIndex: number) => (
              <tr key={rowIndex}>
                <td className='px-1 py-0.5 text-start font-medium'>
                  {row.quantity.toLocaleString()}
                </td>
                <td className='px-1 py-0.5 text-start'>
                  $ {formatPrice(row.price_4_4)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className='p-2 text-white'>
      <div className='max-w-md mx-auto p-2'>
        {productSections.map((section: ProductSection, index: number) => (
          <React.Fragment key={index}>{renderSection(section)}</React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PostCardsPricingInline;
