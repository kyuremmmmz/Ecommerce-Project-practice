"use client";
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import React from 'react';
import iphone from '../../../../assets/iphone.png';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay"
function Promos() {
    return (

        <Carousel
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}
            className="flex flex-row justify-center items-center gap-2 h-[490px] w-96 bg-white overflow-hidden">
                    <CarouselContent>
                        <CarouselItem>
                            <Card className='flex justify-center items-center rounded-none h-[490px] w-96 overflow-hidden'>
                                <CardContent className="relative flex items-center justify-center h-full w-full overflow-hidden">
                                    <Image
                                        src={iphone}
                                        alt="iPhone Image 1"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>

                        <CarouselItem>
                            <Card className='flex justify-center items-center rounded-none h-[490px] w-96 overflow-hidden'>
                                <CardContent className="relative flex items-center justify-center h-full w-full overflow-hidden">
                                    <Image
                                        src={iphone}
                                        alt="iPhone Image 2"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>

                        <CarouselItem>
                            <Card className='flex justify-center items-center rounded-none h-[490px] w-96 overflow-hidden'>
                                <CardContent className="relative flex items-center justify-center h-full w-full overflow-hidden">
                                    <Image
                                        src={iphone}
                                        alt="iPhone Image 3"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className='ml-14' />
                    <CarouselNext className='mr-14' />
                </Carousel>
            );
        }

export default Promos;