import { useEffect, useState } from "react";
import axios from "axios";
import { ProjectCard, apiProjects } from "./index";
// import { FaReply, FaCampground } from "react-icons/fa6";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  useEffect(() => {
      axios
        .get(apiProjects.url, {
          headers: {
            apikey: apiProjects.apikey,
          },
        })
        .then((res) => {
          setProjects(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
  }, []);
  // ==========
  // loading 👇
  //===========
  if (loading) {
    return (
      <>
        <SectionTitle>my projects</SectionTitle>
        <div id="projects" className="flex justify-center py-20">
          <div className="loader" />
        </div>
      </>
    );
  }
  // ==========
  // error 👇
  // ==========
  if (error) {
    return (
      <>
        <SectionTitle>my projects</SectionTitle>
        <div id="projects" className="flex flex-col items-center gap-8 py-20">
          <p className="text-5xl">{error}</p>
          <button
            onClick={() =>window.location.reload()}
            className="bg-blue-700 text-white py-4 px-6 rounded-full text-3xl hover:-translate-y-1 transition-all "
          >
            Reload
          </button>
        </div>
      </>
    );
  }
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
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
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
