import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-rabbit-red text-white">
      {/* Topbar Container */}
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Links */}
        <div className="md:flex items-center space-x-4 hidden">
          <a href="#" className="hover:text-black">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-black">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-black">
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>

        {/* Center Message */}
        <div className="text-sm text-center grow">
          <span>We Ship Countrywide - FREE HOME DELIVERY !</span>
        </div>

        {/* Phone Number */}
        <div className="text-sm hidden md:block">
          <a href="tel:+923101111329" className="hover:text-black">
            0310 1111-329
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
