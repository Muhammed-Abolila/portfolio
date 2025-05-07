import "swiper/css/grid";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;
const ProjectsSwiper = ({ projectsData }) => {
  return (
    <Swiper
      grid={{
        rows: 2,
      }}
      slidesPerView={1}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Grid, Pagination, Autoplay]}
      className="mySwiper border border-identityColor w-full h-[650px]"
    >
      {projectsData?.map((project, index) => (
        <SwiperSlide
          key={index}
          className="border-b even:border-b-0 border-identityColor md:border-r  relative overflow-hidden group/item"
        >
          <img src={`${apiUrl}${project?.img?.url}`} alt={project?.name} />
          <div className="layer absolute z-10 top-0 bottom-0 left-0 right-0 bg-[rgba(252,252,252,0.5)]">
            <div className="slide-content h-full flex  flex-col justify-between items-center relative">
              <div className="top w-full flex justify-start items-center gap-2 ps-4 z-10 absolute -top-full group-hover/item:top-0 transition-all duration-300 ease-in-out">
                <Link
                  to={project?.demoLink}
                  target="_blank"
                  className="demo bg-firstBgColor px-4 py-2 rounded-lg border border-identityColor text-mainColor translate-y-[7px] hover:animate-links-animation hover:bg-identityColor hover:text-firstBgColor transition-all duration-300 ease-in-out"
                >
                  <FaExternalLinkAlt />
                </Link>
                <Link
                  to={project?.githubLink}
                  target="_blank"
                  className="github bg-firstBgColor px-4 py-2 rounded-lg border border-identityColor text-mainColor translate-y-[7px] hover:animate-links-animation hover:bg-identityColor hover:text-firstBgColor transition-all duration-300 ease-in-out"
                >
                  <FaGithub />
                </Link>
              </div>

              <div className="title w-full h-full flex flex-col justify-center items-center transition-all duration-300 ease-in-out scale-0 group-hover/item:scale-100 text-black">
                <h2>{project?.name}</h2>
                <h3>{project?.desc}</h3>
              </div>

              {project?.technologies && project?.technologies?.length > 0 && (
                <div className="utilities bg-firstBgColor py-2 text-mainColor text-center w-full border-t border-identityColor transition-all duration-300 ease-in-out gap-2 ps-4 absolute -bottom-full group-hover/item:bottom-0">
                  <h4>technologies:</h4>
                  <ul className="flex justify-center items-center gap-1">
                    {project?.technologies?.map((technology, index) => (
                      <li key={index} className="capitalize">
                        {technology?.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsSwiper;
