import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GALLERY_COUNT = 15;

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="p-5">
      <h2 className="text-lg text-primary">갤러리</h2>
      <article className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-6">
        {Array.from({ length: GALLERY_COUNT }, (_, i) => (
          <Dialog key={i}>
            <DialogTitle className="sr-only">결혼사진 {i + 1}</DialogTitle>
            <DialogTrigger>
              <img
                src={`/wedding-invite/gallery/thumbnail/thumbnail_${i + 1}.jpg`}
                alt={`경보와 소라 갤러리 ${i + 1}`}
                className="w-[100%] h-auto object-cover rounded-md cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() => setSelectedIndex(i)}
              />
            </DialogTrigger>
            <DialogContent className="pt-10 px-3">
              <GalleryCarousel selectedIndex={selectedIndex} />
            </DialogContent>
          </Dialog>
        ))}
      </article>
    </section>
  );
}

function GalleryCarousel({ selectedIndex }: { selectedIndex: number }) {
  return (
    <Carousel opts={{ startIndex: selectedIndex }}>
      <CarouselContent>
        {Array.from({ length: GALLERY_COUNT }, (_, j) => (
          <CarouselItem className="self-center" key={j}>
            <img src={`/wedding-invite/gallery/gallery_${j + 1}.jpg`} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-1" />
      <CarouselNext className="right-1" />
    </Carousel>
  );
}
