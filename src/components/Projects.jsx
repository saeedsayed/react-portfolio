import { ProjectCard } from "./index";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useMainContext } from "../context/MainContext";

const projects = () => {
  const { projectsData } = useMainContext();

  // swiper responsive display
  const breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };
  //===========
  // content
  //===========
  return (
    <div id="projects">
      <SectionTitle>my projects</SectionTitle>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={breakpoints}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation, Keyboard]}
          loop={true}
          keyboard
        >
          {projectsData.map((project) => (
            <SwiperSlide key={project.name}>
              <div className="pb-8">
                <ProjectCard project={project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default projects;
