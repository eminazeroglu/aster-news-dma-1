import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card from "../card";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { useRef } from 'react';


function CardSlider({ items = [], children, title, titleIcon }) {

    const btnLeft = useRef(null)
    const btnRight = useRef(null)

    return (
        <Card
            title={title}
            titleIcon={titleIcon}
            rightRender={
                <div className="flex items-center gap-x-[10px]">
                    <button ref={btnLeft} className="size-[24px] disabled:opacity-20 inline-flex items-center justify-center bg-primary text-white rounded-full">
                        <FiChevronLeft />
                    </button>

                    <button ref={btnRight} className="size-[24px] disabled:opacity-20 inline-flex items-center justify-center bg-primary text-white rounded-full">
                        <FiChevronRight />
                    </button>
                </div>
            }
        >
            <div className="card-slider">
                <Swiper
                    navigation={{
                        prevEl: btnLeft.current,
                        nextEl: btnRight.current,
                    }}
                    pagination={{
                        el: ".card-slider-bullet-content",
                        type: "bullets",
                        bulletClass: "card-slider-bullet",
                        bulletActiveClass: "card-slider-bullet-active",
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = btnLeft.current;
                        swiper.params.navigation.nextEl = btnRight.current;
                    }}
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            {children(item)}
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="card-slider-bullet-content"></div>
            </div>
        </Card>
    );
}

export default CardSlider;