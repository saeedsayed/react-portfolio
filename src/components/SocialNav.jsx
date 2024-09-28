import { useMainContext } from "../context/MainContext";

const SocialNav = () => {
  const { aboutData } = useMainContext();
  if (!aboutData) return;
  return (
    <ul className="flex justify-center gap-5 sm:gap-8 md:justify-start">
      {Object.entries(aboutData?.social)?.map(([key, value], i) => {
        return (
          <li key={i} className="relative">
            <a href={value.URL} target="_blank" title={key}>
              <img src={value.icon} alt={key}
              className={`w-12 aspect-square transition rounded-full border-2 border-white shadow-lg`}
              />
              <img src={value.icon} alt={key}
              className={`w-12 aspect-square absolute rounded-full top-0 transition border-2 border-white hover:animate-ping`}
              />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialNav;
