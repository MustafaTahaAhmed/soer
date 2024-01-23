import "./CountryInformationNavBar.css";
import { LuBookOpen } from "react-icons/lu";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { MdAir } from "react-icons/md";
import { BsWater } from "react-icons/bs";
import { PiButterfly } from "react-icons/pi";
import { PiTreeBold } from "react-icons/pi";
import { CiMountain1 } from "react-icons/ci";
import { BsBank } from "react-icons/bs";
import { PiFlowerTulipLight } from "react-icons/pi";
import { CgPerformance } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import Countrynavitem from "./Countrynavitem";

function CountryInformationNavBar() {
  const navigate = useNavigate();

  return (
    <div className="test1">
      <div className="container-navblue1">
        <Countrynavitem
          title="Overview"
          icon={LuBookOpen}
          link="/CountrySpecificinformData/Overview"
          iconcolor="#FFC300"
          colortitle="#FFC300"
        />
        <Countrynavitem
          title="Overview"
          icon={LuBookOpen}
          link="/CountrySpecificinformData/Overview"
          iconcolor="#FFC300"
          colortitle="#FFC300"
        />
        <Countrynavitem
          title="Overview"
          icon={LuBookOpen}
          link="/CountrySpecificinformData/Overview"
          iconcolor="#FFC300"
          colortitle="#FFC300"
        />
        <Countrynavitem
          title="Overview"
          icon={LuBookOpen}
          link="/CountrySpecificinformData/Overview"
          iconcolor="#FFC300"
          colortitle="#FFC300"
        />
        <Countrynavitem
          title="Overview"
          icon={LuBookOpen}
          link="/CountrySpecificinformData/Overview"
          iconcolor="#FFC300"
          colortitle="#FFC300"
        />
        <Countrynavitem
          title="Overview"
          icon={LuBookOpen}
          link="/CountrySpecificinformData/Overview"
          iconcolor="#FFC300"
          colortitle="#FFC300"
        />
        <Countrynavitem
          title="Overview"
          icon={LuBookOpen}
          link="/CountrySpecificinformData/Overview"
          iconcolor="#FFC300"
          colortitle="#FFC300"
        />
        <Countrynavitem
          title="Overview"
          icon={LuBookOpen}
          link="/CountrySpecificinformData/Overview"
          iconcolor="#FFC300"
          colortitle="#FFC300"
        />
        <Countrynavitem
          title="Overview"
          icon={LuBookOpen}
          link="/CountrySpecificinformData/Overview"
          iconcolor="#FFC300"
          colortitle="#FFC300"
        />
      </div>
    </div>
  );
}

export default CountryInformationNavBar;
