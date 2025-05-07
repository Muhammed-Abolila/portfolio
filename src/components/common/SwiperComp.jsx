import { Swiper, SwiperSlide } from "swiper/react";
const SwiperComp = ({ swiperData }) => {
const formatDate = (dateString) => {
  const [year, month] = dateString.split('-');
  return `${month}-${year}`;
};
  return (
    <div className="slider order-1 md:w-2/3 flex justify-center items-center">
      {swiperData?.length > 0 && (
        <Swiper
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
            1280: {
              slidesPerView: 2,
            },
          }}
          className="w-full h-full bg-firstBgColor"
        >
          {swiperData?.map((swiperElement, index) => (
            <SwiperSlide
              key={index}
              className="border-t md:border-t-0 xl:border-l border-identityColor px-1 text-mainColor "
            >
              <div className="top border-b border-identityColor text-right py-2 pr-2 realative min-h-[100px]">
                <h2 className="text-base lg:text-lg font-bold capitalize">
                  {swiperElement?.title}
                </h2>
                <h3 className="text-lg lg:text-xl lg:my-1 capitalize">
                  {swiperElement?.company}
                </h3>
                <h4 className="text-sm font-semibold">{formatDate(swiperElement?.from)} / {formatDate(swiperElement?.to)}</h4>
                <div className="absolute top-2 left-2 bg-identityColor text-white w-7 h-10 rounded-[4px] flex justify-center items-center text-lg font-semibold">
                  {index + 1}
                </div>
              </div>
              <ul className="pt-3 pb-10 px-6 list-disc flex flex-col gap-1 lg:pb-0">
                {swiperElement?.desc?.map((desc, index) => (
                  <li key={index} className="text-sm lg:text-base ">
                    {desc?.text}
                  </li>
                ))}
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
export default SwiperComp;
