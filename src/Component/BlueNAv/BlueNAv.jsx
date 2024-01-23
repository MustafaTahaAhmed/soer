import "./BlueNAv.css";
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
function BlueNAv() {
  const navigate = useNavigate();

  return (
    <div className="test">
      <div className="container-navblue">
        <div
          className="divinnav"
          onClick={() => {
            navigate(`/cca/jordan/knowledge`);
          }}
        >
          <div className="title12">
            <LuBookOpen size={30} color="white" />
          </div>
          <div className="title">KNOWLEDGE</div>
        </div>
        <div
          className="divinnav"
          onClick={() => {
            navigate(`/cca/jordan/environmental-performance`);
          }}
        >
          <div className="title12">
            <CgPerformance size={30} color="white" />
          </div>
          <div className="title">
            ENVIRONMENTAL<br></br> PERFORMANCE
          </div>
        </div>
        <div
          className="divinnav"
          onClick={() => {
            navigate(`/cca/jordan/climate-change-section-drivers`);
          }}
        >
          <div className="title12">
            <TiWeatherPartlySunny size={30} color="white" />
          </div>
          <div className="title">
            {" "}
            CLIMATE<br></br> CHANGE
          </div>
        </div>
        <div
          className="divinnav"
          onClick={() => {
            navigate(`/cca/jordan/pollution-section-responses`);
          }}
        >
          <div className="title12">
            <MdAir size={30} color="white" />
          </div>
          <div className="title">POLUTION</div>
        </div>
        <div
          className="divinnav"
          onClick={() => {
            navigate(`/cca/jordan/water-change-section-drivers`);
          }}
        >
          <div className="title12">
            <BsWater size={30} color="white" />
          </div>
          <div className="title">WATER</div>
        </div>
        <div
          className="divinnav"
          onClick={() => {
            navigate(`/cca/jordan/biodiversity-section-drivers`);
          }}
        >
          <div className="title12">
            <PiButterfly size={30} color="white" />
          </div>
          <div className="title">BIODIVERSITY</div>
        </div>
        <div
          className="divinnav"
          onClick={() => {
            navigate(`/cca/jordan/forest-section-drivers`);
          }}
        >
          <div className="title12">
            <PiTreeBold size={30} color="white" />
          </div>
          <div className="title">FORSET</div>
        </div>
        <div
          className="divinnav"
          onClick={() => {
            navigate(`/cca/jordan/land-section-drivers`);
          }}
        >
          <div className="title12">
            <CiMountain1 size={30} color="white" />
          </div>
          <div className="title">LAND</div>
        </div>
        <div
          className="divinnav"
          onClick={() => {
            navigate(`/cca/jordan/green-section-drivers`);
          }}
        >
          <div className="title12">
            <PiFlowerTulipLight size={30} color="white" />
          </div>
          <div className="title">
            GREEN<br></br>ECONOMY
          </div>
        </div>
        <div
          className="divinnav"
          onClick={() => {
            navigate(`/cca/jordan/sustainable-finance-section-drivers`);
          }}
        >
          <div className="title12">
            <BsBank size={30} color="white" />
          </div>
          <div className="title">
            SUSTAINABLE<br></br>FINANCE
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlueNAv;
