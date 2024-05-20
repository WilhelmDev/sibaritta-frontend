import { Events } from '@/interface/events'
import moment from 'moment'
import React, { useState, CSSProperties } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'
import 'moment/locale/es';

moment.locale('es');

interface CarrouselProps {
  data: Events[]
  selectEvent:  (el: Events) => Promise<void>
  active: null | Events
}

const CarrouselEvents = ({ data, selectEvent, active }: CarrouselProps) => {
    const [currentSlide, setCurrentSlide] = useState(data[0].id)

    const stylesCardCustom:CSSProperties = {
      width: '100%',
    //   maxWidth: '15rem',
      minWidth: '5rem'
    }

    const {
        carouselFragment,
        slideToPrevItem, // go back to previous slide
        slideToNextItem, // move to next slide
        useListenToCustomEvent //custom hook to listen event when the slide changes
    } = useSpringCarousel({
        itemsPerSlide: (data.length >= 3) ? 3 : data.length, // number of slides per view
        gutter: 5, // to add the space between slides
        items: data.map((event: Events) => {
            return {
                ...event,
                renderItem: (
                    // <div
                    //     className={`grid aspect-[2] w-full place-items-center text-2xl text-white transition-all duration-700 ${currentSlide === item.id
                    //         ? 'z-10 scale-150 bg-yellow-600'
                    //         : 'bg-violet-500'
                    //         }`}>
                    //     {item.title}
                    // </div>
                    <div className={`internaExperiencia__reserva__right__contenedor__card cursor-pointer z-10 
                    grid 
                    place-items-center
                    justify-center
                    text-2xl text-white transition-all duration-100
                    ${currentSlide === event.id 
                      ? 'active'
                      : 'opacity-50'
                    }
                    `}
                    onClick={() => selectEvent(event)}
                    style={stylesCardCustom}
                    >
                      <h3 className="tituloh3">
                        { moment(event.date).locale('es').format('MMMM').toLocaleUpperCase()}
                      </h3>
                      <hr />
                      <h4>{moment(event.date).format('DD').toLocaleUpperCase()}</h4>
                      <p>
                        {moment(event.date).locale('es').format('dddd').toLocaleUpperCase()}
                      </p>
                      <hr />
                      <h5 className="tituloh5">{`${event.hour}:${event.minute}`}</h5>
                  </div>
                )
            }
        }),
        ...(data.length % 2 === 0 
            ? { initialStartingPosition: 'center', withLoop: true, }
            : { withLoop: false, })
    })

    useListenToCustomEvent((event) => {
        if (event.eventName === 'onSlideStartChange') {
            setCurrentSlide(event?.nextItem?.id)
            const eventSelected = data.filter((el) => event?.nextItem?.id === el.id)[0]
            selectEvent(eventSelected)
        }
    })

    return (
         <div className="relative">
            <button onClick={slideToPrevItem} className="absolute flechaIzquierda">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <div className="mx-auto overflow-x-clip relative z-0" >
                {carouselFragment}
            </div>
            <button onClick={slideToNextItem} className="absolute flechaDerecha">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
         </div>
    )
}

export default CarrouselEvents
