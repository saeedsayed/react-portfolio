
import { socialMedia } from "./index";

const SocialNav = () => {
  return (
    <ul className="flex justify-center gap-5 sm:gap-8 md:justify-start">
      {socialMedia.map((media, i) => (
        <li key={i} className="relative">
          <a href={media.url} target="_blank" title={media.name}>
            <media.icon
              className={`text-3xl transition ${media.name.toLowerCase()}-icon`}
            />
            <media.icon
              className={`text-3xl absolute top-0 transition hover:animate-ping ${media.name.toLowerCase()}-icon`}
            />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialNav;
