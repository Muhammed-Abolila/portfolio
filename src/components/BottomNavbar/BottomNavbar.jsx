import { Link } from "react-router-dom";
import useBottomNavbarData from "../../hooks/useBottomNavbarData";
const apiUrl = import.meta.env.VITE_API_URL;
const BottomNavbar = () => {
const {bottomNavbarData}=useBottomNavbarData();
  return (
    <section className="bottom-navbar z-10 fixed bottom-0 left-0 right-0 flex justify-center items-center ">
      <ul className="flex justify-center items-center gap-x-6 w-fit px-2 pt-[2px] pb-[15px] rounded-lg border border-identityColor bg-firstBgColor">
        {bottomNavbarData?.length > 0 &&
          bottomNavbarData.map((link, index) => (
            <Link to={`${link?.path}`} key={index}>
              <li className="cursor-pointer group/item">
                <div className="opacity-0 group-hover/item:opacity-100 transition-all duration-500 ease-in-out relative before:absolute before:content-[''] before:bg-identityColor before:w-[10px] before:h-[10px] before:bottom-[6px] before:left-1/2 before:right-1/2 before:-translate-x-1/2 before:rotate-45 ">
                  <span className="bg-identityColor text-mainColor absolute top-[-35px] left-1/2 right-1/2 w-fit -translate-x-1/2 text-sm py-[2px] px-2 rounded-lg uppercase">
                    {link?.name}
                  </span>
                </div>
                <div className="image-container border border-identityColor rounded-lg p-1 translate-y-[7px] hover:animate-links-animation">
                  <img
                    src={`${apiUrl}${link?.image?.url}`}
                    width={40}
                    height={40}
                    alt={link?.name}
                  />
                </div>
              </li>
            </Link>
          ))}
      </ul>
    </section>
  );
};
export default BottomNavbar;
