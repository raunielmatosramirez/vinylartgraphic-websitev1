// app/services/[serviceName]/generateStaticParams.ts

const services = [
  {
    service: "CUSTOM SIGNS MAKERS",
    slug: "custom-signs-makers",
  },
  {
    service: "CAR WRAP",
    slug: "car-wrap",
  },
  {
    service: "PROMOTIONAL PRODUCTS",
    slug: "promotional-products",
  },
  {
    service: "MARKETING MATERIALS",
    slug: "marketing-materials",
  },
  {
    service:"WIDE FORMAT PRINTS",
    slug:"wide-format-pritns",

  }
];

export async function generateStaticParams() {
  return services.map((service) => ({
    serviceName: service.slug,
  }));
}
