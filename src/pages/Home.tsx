// import Authenticate from "@/utilities/Authenticate";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Products } from "./Products";

export function Home() {


  return (
    <>
      <div className=" flex relative  ">
        <img
          src="../public/bannerimage.webp"
          alt="banner-image"
          className="rounded relative blurred-image"
        />
        <div className=" absolute w-full text-center h-full    ">
          <Carousel
            className="h-full rounded  place-content-center px-3  "
            plugins={[
              Autoplay({
                delay: 3500,
              }),
            ]}
          >
            <CarouselContent className="rounded shadow-inner">
              <CarouselCardItem
                imageSource="../public/lemongrass-1687966551.webp"
                ImageAlt="soaps-image"
                title="Lemon Grass"
                description=" Discover the healing wonders of lemon Grass"
              />

              <CarouselCardItem
                imageSource="../public/intro-1687966551.webp"
                ImageAlt="soaps-image"
                title="Natural Herbs"
                description="Natural remedies are the best!"
              />
              <CarouselCardItem
                imageSource="../public/cilantro-1687966551.webp"
                ImageAlt="soaps-image"
                title="Cilantro"
                description="For weight los and reducing hypertension "
              />
              <CarouselCardItem
                imageSource="../public/oregano-1687966551.webp"
                ImageAlt="soaps-image"
                title="Oregano"
                description="Muscle growth and skin care"
              />
              <CarouselCardItem
                imageSource="../public/parsley-1687966551.webp"
                ImageAlt="soaps-image"
                title="Parsely"
                description="alternative to pain killers and antibiotics"
              />
              <CarouselCardItem
                imageSource="../public/fennel-1687966551.jpg"
                ImageAlt="soaps-image"
                title="Fennel"
                description=" Natural olive Oil"
              />
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="sm:mt-32 md:mt-12 "></div>

     <Products />
   
    </>
  );
}

type carouselItemCard = {
  imageSource: string;
  ImageAlt: string;
  title: string;
  description: string;
};

function CarouselCardItem({
  imageSource,
  ImageAlt,
  title,
  description,
}: carouselItemCard) {
  return (
    <CarouselItem className="sm:basis md:basis-1/3">
      <Link to="products">
        <Card className="flex overflow-hidden flex-col opacity-90 hover:opacity-100 hover:border-primary group hover:shadow-lg sm:m-2">
          <div className="relative w-full h-auto aspect-video">
            <img src={imageSource} alt={ImageAlt} />
            <p className=" absolute top-1 bg-primary text-blue-50 p-2 m-2 rounded-lg shadow-lg">
              {title}
            </p>
          </div>
          <CardHeader className="group-hover:text-primary">
            <CardTitle>{title}</CardTitle>
            <CardDescription className="group-hover:underline">
              {description}
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </CarouselItem>
  );
}
