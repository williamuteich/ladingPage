import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

export function Banners() {
    return (
        <div className="bg-slate-600">

        <Carousel>
        <CarouselContent>
            <CarouselItem>      
                <img 
                    src="/bannerLimpeza.jpg" 
                    alt="Banner de Limpeza" 
                    className="h-[550px] w-full object-cover opacity-70" />
                </CarouselItem>
            <CarouselItem>
                <img 
                    src="/bannerLimpeza.jpg" 
                    alt="Banner de Limpeza" 
                    className="h-[550px] w-full object-cover opacity-70" 
                />
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious  className="left-6 md:left-20"/>
        <CarouselNext className="right-6 md:right-20"/>
        </Carousel>


        </div>
    );
}
