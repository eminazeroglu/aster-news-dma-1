import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FiArrowLeft, FiArrowRight} from 'react-icons/fi';
import { useRef } from 'react';
import useDeviceType from "hooks/useDevice.jsx";

function Slider({ items = [], title, titleIcon, children }) {

    const {isMobile} = useDeviceType();
    const btnLeft = useRef(null)
    const btnRight = useRef(null)


    return (
        <section>
            <div className="flex items-center justify-between mb-[14px]">
                <h4 className="flex text-[15px] font-bold items-center gap-x-[13px]">
                    {titleIcon && <span className="text-[24px]">{titleIcon}</span>}
                    <span>{title}</span>
                </h4>

                <div className="flex gap-x-[10px] items-center">
                    <button ref={btnLeft} className="size-[22px] disabled:opacity-20 inline-flex items-center justify-center">
                        <FiArrowLeft />
                    </button>

                    <button ref={btnRight} className="size-[22px] disabled:opacity-20 inline-flex items-center justify-center">
                        <FiArrowRight />
                    </button>
                </div>
            </div>
            <div>
                <Swiper
                    navigation={{
                        prevEl: btnLeft.current,
                        nextEl: btnRight.current,
                    }}
                    modules={[Navigation]}
                    slidesPerView={isMobile ? 2 : 5}
                    spaceBetween={15}
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
            </div>
        </section>
    );
}

export default Slider;