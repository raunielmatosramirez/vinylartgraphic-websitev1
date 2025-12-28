import HeaderSection from "../Components/HeaderSection";
import ImageGrid from "../Components/ImageGrid";
import SEO from "../Components/SEO";
import { services } from "../../utils/servicesData";

const Gallery: React.FC = () => {
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

  const seoConfig = {
    title: `Our Portfolio - ${companyData.name} | Vinyl Art Gallery & Projects`,
    description: `Explore our gallery of custom vinyl projects. ${
      companyData.description
    }. See our work in ${companyData.services
      .slice(0, 3)
      .join(", ")} and get inspired for your next project.`,
    canonical: "https://vinylartgraphic.com/gallery",
    ogImage: "https://vinylartgraphic.com/og-gallery.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `Our Portfolio - ${companyData.name}`,
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

  // Función para agrupar todas las imágenes de los subservicios por servicio padre
  const getServiceImages = () => {
    return services.map((service) => {
      // Combinar todas las galerías de los subservicios en un solo array
      const allServiceImages: { id: number; src: string; alt: string }[] = [];

      service.subservices.forEach((subservice) => {
        const subserviceImages = subservice.gallery.map((imageUrl, index) => ({
          id: allServiceImages.length + index + 1,
          src: imageUrl,
          alt: `${subservice.name} - Image ${index + 1}`,
        }));
        allServiceImages.push(...subserviceImages);
      });

      return {
        serviceName: service.service,
        images: allServiceImages,
        totalImages: allServiceImages.length,
      };
    });
  };

  const serviceImages = getServiceImages();

  return (
    <section className='min-h-screen'>
      <SEO {...seoConfig} />
      <div className='fixed inset-0 flex items-center justify-center z-0'>
        <div className="w-[600px] h-[700px] bg-[url('/lion-desenfoque.png')] bg-cover bg-center bg-no-repeat"></div>
      </div>

      <div className='flex flex-col items-center justify-center text-center'>
        <HeaderSection
          title='Our Complete Portfolio'
          text='Explore all our vinyl art projects and custom designs'
        />
      </div>

      {serviceImages.map((serviceData, index) => (
        <ImageGrid
          key={`${services[index].slug}-${index}`}
          images={serviceData.images}
          title={`${serviceData.serviceName}`}
        />
      ))}
    </section>
  );
};

export default Gallery;
