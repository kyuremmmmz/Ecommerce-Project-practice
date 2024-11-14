"use client";
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import React from 'react';
import iphone from '../../../../assets/iphone.png';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay"
import useFetchProducts from '@/app/hooks/state';
function Promos() {
    const { data } = useFetchProducts();
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}
            className="flex flex-row justify-center items-center h-96 w-[700px] bg-black overflow-hidden">
                    <CarouselContent>
                        {
                    data.map((item) => {
                        return (
                            <CarouselItem key={item._id}>
                                <Card className='flex justify-center items-center rounded-none h-96 w-[700px]  overflow-hidden'>
                                    <CardContent className="relative flex items-center justify-center h-full w-full overflow-hidden">
                                        <Image
                                            className=' object-fill'
                                            src={iphone}
                                            alt="iPhone Image 1"
                                            layout="fill"
                                            objectFit="fill"
                                        />
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        )})
                        }
                    </CarouselContent>
                    <CarouselPrevious className='ml-14' />
                    <CarouselNext className='mr-14' />
                </Carousel>
            );
        }

export default Promos;
