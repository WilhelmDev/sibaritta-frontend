'use client'

import React, { useMemo, useState } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import Image from 'next/image'
import { IDetalle } from '@/interface/reservacion'
import useWindowDimensions from '@/hook/global/useWindowDimensions';

interface IDetailsInfo {
    data: IDetalle;
}

const CarouselV2 = ({ data }: IDetailsInfo) => {
    // const mockItems = data?.images;
    const mockItems = [
        {
            id: 'item-1',
            title: 'slide 1',
            path: '/experiencia/1.jpg'
        },
        {
            id: 'item-2',
            title: 'slide 2',
            path: '/experiencia/2.jpg'

        },
        {
            id: 'item-3',
            title: 'slide 3',
            path: '/experiencia/3.jpg'

        }
        ,
        {
            id: 'item-4',
            title: 'slide 4',
            path: '/experiencia/4.jpg'

        },
        {
            id: 'item-5',
            title: 'slide 5',
            path: '/experiencia/5.jpg'

        }
    ]
    const [currentSlide, setCurrentSlide] = useState(mockItems[0]?.id)

    const { width } = useWindowDimensions()

    const imageWidth = useMemo(() => width && width <= 420 ? 250 : 500, [width]);
    const itemsPerSlide = useMemo(() => width && width <= 420 ? 1 : 3, [width]);
    
    const {
        carouselFragment,
        slideToPrevItem, // go back to previous slide
        slideToNextItem, // move to next slide
        useListenToCustomEvent //custom hook to listen event when the slide changes
    } = useSpringCarousel({
        itemsPerSlide: itemsPerSlide, // number of slides per view
        withLoop: true, // will loop
        initialStartingPosition: 'center', // the active slide will be at the center
        gutter: 100,
        items: mockItems.map((item) => {
            return {
                ...item,
                renderItem: (
                    <div
                        className={`grid w-full  transition-all duration-700 ${currentSlide === item.id
                            ? 'z-10 zoomCarousel'
                            : 'opacityCarousel'
                            }`}>
                        <Image width={imageWidth} height={imageWidth} src={item?.path as string} className=' mx-auto m-auto' alt='imagen' />
                    </div>
                )
            }
        })
    })

    useListenToCustomEvent((event: any) => {
        if (event.eventName === 'onSlideStartChange') {
            setCurrentSlide(event?.nextItem?.id)
        }
    })

    return (
        <div className="py-20 relative">
            <button onClick={slideToPrevItem} className="absolute flechaIzquierda">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <div className="mx-auto  overflow-x-clip py-[4%] relative">
                {carouselFragment}
            </div>
            <button onClick={slideToNextItem} className="absolute flechaDerecha">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    )
}
const Eventos = () => {
    const mockItems = [
        {
            idFecha: 'item-2',
            title: 'FEB',
            url: '23',
            dia: 'VIERNES',
            hora: '7:00 pm'
        },
        {
            idFecha: 'item-2',
            title: 'FEB3232',
            url: '23',
            dia: 'VIERNES',
            hora: '7:00 pm'
        },
        {
            idFecha: 'item-3',
            title: 'FEB sss',
            url: '23',
            dia: 'VIERNES',
            hora: '7:00 pm'
        }

    ]
    const [currentSlide, setCurrentSlide] = useState(mockItems[0].idFecha)

    const {
        carouselFragment,
        slideToPrevItem, // go back to previous slide
        slideToNextItem, // move to next slide
        useListenToCustomEvent //custom hook to listen event when the slide changes
    } = useSpringCarousel({
        itemsPerSlide: 3, // number of slides per view
        withLoop: true, // will loop
        initialStartingPosition: 'center', // the active slide will be at the center
        gutter: 0, // to add the space between slides
        items: mockItems.map((item) => {
            return {
                ...item,
                renderItem: (
                    <div className={`grid internaExperiencia__reserva__right__contenedor__card ${currentSlide === item.idFecha
                        ? 'active'
                        : ''
                        }`}>
                        <h3 className="tituloh3">
                            {item.title}
                        </h3>
                        <hr />
                        <h4>{item.title}</h4>
                        <p>
                            VIERNES
                        </p>
                        <hr />
                        <h5 className="tituloh5">7:00 pm</h5>
                    </div>
                )
            }
        })
    })

    useListenToCustomEvent((event: any) => {
        if (event.eventName === 'onSlideStartChange') {
            setCurrentSlide(event?.nextItem?.idFecha)
        }
    })

    return (
        <div className="py-20 ">
            {/* <button onClick={slideToPrevItem} className="absolute flechaIzquierda">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button> */}
            <div className="">
                {carouselFragment}
            </div>
            {/* <button onClick={slideToNextItem} className="absolute flechaDerecha">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button> */}
        </div>
    )
}
export {
    Eventos
}
export default CarouselV2
