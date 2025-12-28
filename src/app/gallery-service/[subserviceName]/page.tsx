// app/gallery/[subserviceName]/page.tsx

import ImageGrid from "@/app/Components/ImageGrid";
import SEO from "@/app/Components/SEO";
import { services } from '../../../utils/servicesData';


type PageProps = {
  params: Promise<{ subserviceName: string }>
}


// Función para generar los slugs de los subservicios
function generateSubserviceSlug(subserviceName: string): string {
  return subserviceName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

// Esta función genera las rutas estáticas en el build time
export function generateStaticParams() {
  const params: { subserviceName: string }[] = [];

  // Generar params para todos los subservicios
  services.forEach((service) => {
    service.subservices.forEach((subservice) => {
      // Asegurar que el nombre existe antes de generar el slug
      if (subservice.name) {
        params.push({
          subserviceName: generateSubserviceSlug(subservice.name),
        });
      }
    });
  });

  return params;
}

const GalleryPage: React.FC<PageProps> = async  ({ params }) => {
    const { subserviceName } = await params; 
  const companyData = {
    name: "Vinyl Art Graphic",
    foundingYear: "2018",
    description: "Experts in custom vinyl art with over 5 years of experience",
    services: [
      "CAR WRAP",
      "PROMO ITEMS",
      "CUSTOM SIGNS MARKERS",
      "PRINTS",
      "WIDE FORMAT SIGNS AND BANNERS",
    ],
    awards: ["Best Design Company 2023", "Creative Innovation Award 2022"],
  };
  const defaultSeoConfig = {
    title: "Gallery - Vinyl Art Graphic",
    description: "Explore our portfolio of vinyl art projects",
    canonical: "https://vinylartgraphic.com/gallery",
    ogImage: "https://vinylartgraphic.com/og-gallery.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Our Portfolio - Vinyl Art Graphic",
      description:
        "Gallery of custom vinyl art projects including car wraps, signs, and promotional items",
      publisher: {
        "@type": "Organization",
        name: companyData.name,
        logo: {
          "@type": "ImageObject",
          url: "https://vinylartgraphic.com/logo.png",
        },
      },
    },
  };
 // Función para buscar el subservicio
const findSubservice = () => {
  for (const service of services) {
    const foundSubservice = service.subservices.find(
      (sub) =>
        sub.name?.toLowerCase().replace(/[^a-z0-9]/g, "-") ===
          subserviceName.toLowerCase() ||
        sub.name
          ?.toLowerCase()
          .includes(subserviceName.toLowerCase().replace(/-/g, " "))
    );
    if (foundSubservice) return foundSubservice;
  }
  return null;
};

  const subservice = findSubservice();

  // Si no encuentra el subservicio, mostrar galería por defecto
  if (!subservice) {
    return (
      <section className='min-h-screen'>
        <SEO {...defaultSeoConfig} />
        <div className='fixed inset-0 flex items-center justify-center z-0'>
          <div className="w-[600px] h-[700px] bg-[url('/lion-desenfoque.png')] bg-cover bg-center bg-no-repeat"></div>
        </div>
        <div className='text-center py-8'>
          <h1 className='text-2xl font-bold'>Subservice not found</h1>
          <p>Showing default gallery</p>
        </div>
        <ImageGrid images={sampleImages} />
      </section>
    );
  }

// Convertir las imágenes del subservicio al formato que espera ImageGrid
const subserviceImages = subservice?.gallery?.map((imageUrl, index) => ({
  id: index + 1,
  src: imageUrl,
  alt: `${subservice.name || 'Unknown'} - Image ${index + 1}`,
})) || [];

  const seoConfig = {
    title: `${subservice.name} - ${companyData.name} | Portfolio`,
    description: subservice.description,
    canonical: `https://vinylartgraphic.com/gallery/${subserviceName}`,
    ogImage: subservice.image_url,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `${subservice.name} - ${companyData.name}`,
      description: subservice.description,
      publisher: {
        "@type": "Organization",
        name: companyData.name,
        logo: {
          "@type": "ImageObject",
          url: "https://vinylartgraphic.com/logo.png",
        },
      },
    },
  };

  return (
    <section className='min-h-screen'>
      <SEO {...seoConfig} />
      <div className='fixed inset-0 flex items-center justify-center z-0'>
        <div className="w-[600px] h-[700px] bg-[url('/lion-desenfoque.png')] bg-cover bg-center bg-no-repeat"></div>
      </div>
      <ImageGrid
        title={subservice.name}
        description={subservice.description}
        images={subserviceImages}
      />
    </section>
  );
};

// Images por defecto (las que ya tenías)
const sampleImages = [
  {
    id: 1,
    src: "https://picsum.photos/seed/1/600/600",
    alt: "Paisaje montañoso",
  },
  // ... el resto de tus imágenes sample
];

export default GalleryPage;
