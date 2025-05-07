import { Link } from "react-router-dom";
import useSocialData from "../../hooks/useSocialData";
const SocialLinks = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const {socialData}=useSocialData()
  return (
    <ul className="socials-links flex justify-center items-center gap-5 my-5">
      {socialData?.length > 0 &&
        socialData?.map((link, index) => (
          <Link to={`${link.link}`} target="_blank" key={index}>
            <li
              className="border border-identityColor py-2 px-2 rounded-lg cursor-pointer bg-firstBgColor"
            >
              <img
                src={apiUrl + link?.img?.url}
                className="w-[40px] h-[40px]"
                alt="Muhammed Abo Lila portfolio"
              />
            </li>
          </Link>
        ))}
    </ul>
  );
};

export default SocialLinks;
