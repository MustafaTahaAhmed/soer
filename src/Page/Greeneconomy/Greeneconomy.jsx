import BlueNAv from "../../Component/BlueNAv/BlueNAv";
import "./Greeneconomy.css";
import { useState } from "react";

function Greeneconomy() {
  const [data, setData] = useState("DRIVERS");

  return (
    <div>
      <BlueNAv />
      <div className="information-content">
        <div className="secondplacer">
          Pillar Data Visualization / Green Economy
        </div>
        <div className="rowinclimatechange">
          <div
            className={
              data != "DRIVERS" ? "itemnav-climate" : "itemnav-climateselecet"
            }
            onClick={() => setData("DRIVERS")}
          >
            DRIVERS
          </div>
          <div
            className={
              data != "PRESSURES" ? "itemnav-climate" : "itemnav-climateselecet"
            }
            onClick={() => setData("PRESSURES")}
          >
            PRESSURES
          </div>
          <div
            className={
              data != "STATES" ? "itemnav-climate" : "itemnav-climateselecet"
            }
            onClick={() => setData("STATES")}
          >
            STATES
          </div>
          <div
            className={
              data != "IMPACTS" ? "itemnav-climate" : "itemnav-climateselecet"
            }
            onClick={() => setData("IMPACTS")}
          >
            IMPACTS
          </div>
          <div
            className={
              data != "RESPONSES" ? "itemnav-climate" : "itemnav-climateselecet"
            }
            onClick={() => setData("RESPONSES")}
          >
            RESPONSES
          </div>
        </div>
        <div className="secondplacer">What are the key values and trends?</div>
        <div className="titlespan">Domestic material consumption</div>
      </div>
    </div>
  );
}

export default Greeneconomy;
