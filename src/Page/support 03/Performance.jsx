import React, { useState } from "react";
import "./Performance.css";
import BlueNAv from "../../Component/BlueNAv/BlueNAv";

function Performance() {
  const [selecteditem, setselecteditem] = useState(
    "Sustainable use of raw material"
  );
  return (
    <div className="information-container">
      <BlueNAv />
      <div className="information-content">
        <span className="secondplacer">Analysing country performance </span>{" "}
        <br />
        <span className="tesinperformance">
          Provides the key information regarding the country’s environmental
          performance, in the context of the most relevant policy questions.{" "}
          <br /> The Sustainable Consumption and Production Hotspots Analysis
          Tool (SCP-HAT) allows for analysing direct as well as indirect, i.e.
          trade-related impacts, brought about by production and consumption
          activities of national economies. It is therefore able to identify
          hotspots related to domestic pressures and impacts (production or
          territorial perspective), but also impacts occurring along the supply
          chains of goods and services for final consumption in a given country.
        </span>
        <span className="undertext">
          {" "}
          <br />
          All the data and analysis are harvested from the
          <span className="linksss"> SCP-Hotspots Analysis platform</span>
        </span>
        <br />
        <br />
        <span className="secondplacer">Environmental pressures </span>{" "}
        <div className="rawperformance">
          <div
            className={
              selecteditem == "Sustainable use of raw material"
                ? "iteminraw1"
                : "iteminraw"
            }
            onClick={() => {
              setselecteditem("Sustainable use of raw material");
            }}
          >
            Sustainable use of raw material
          </div>
          <div
            className={
              selecteditem == "Greenhouse gas emissions and climate change"
                ? "iteminraw1"
                : "iteminraw"
            }
            onClick={() => {
              setselecteditem("Greenhouse gas emissions and climate change");
            }}
          >
            Greenhouse gas emissions and climate change
          </div>
          <div
            className={
              selecteditem == "Air pollution and related health impacts"
                ? "iteminraw1"
                : "iteminraw"
            }
            onClick={() => {
              setselecteditem("Air pollution and related health impacts");
            }}
          >
            Air pollution and related health impacts
          </div>
          <div
            className={
              selecteditem == "Sustainable land use"
                ? "iteminraw1"
                : "iteminraw"
            }
            onClick={() => {
              setselecteditem("Sustainable land use");
            }}
          >
            Sustainable land use
          </div>
        </div>
        {selecteditem === "Sustainable use of raw material" && (
          <div>
            {" "}
            <div className="titleofdescription">
              Sustainable use of raw materials
            </div>
            <div className="descriptionperf">
              Our society, its production and consumption systems, build upon
              the use of raw materials such as biomass, fossil fuels, and
              minerals. With increasing material extraction, related
              environmental and social impacts are getting close or already
              trespassing natural boundaries. The sustainable development goals
              (SDG) 8 (Decent work and economic growth) and 12 (Responsible
              consumption and production) target the achievement of a
              sustainable management and efficient use of natural resources by
              2030. Also the circular economy aims at increasing material
              efficiency by slowing, closing, and narrowing energy and material
              loops
            </div>
            <div className="thirdcontinperformance">
              <div className="thirdcontinperformance1">
                <div className="titleofdescription">
                  Material use and development
                </div>
                <div className="descriptionperf">
                  To achieve sustainable raw material use, it is essential to
                  decouple a society’s development, measured by means of GDP or
                  HDI, from the use of raw materials. One indicator used to
                  evaluate the use of raw materials by society and the
                  achievement of the related SDGs is the “material footprint”,
                  measuring the sum of all raw materials used along the supply
                  chains of goods and services consumed in a country.
                </div>
              </div>
              <div className="firstplacer">Place Holder</div>
            </div>
            <div className="graphplaceholder">Place holder</div>
          </div>
        )}
        {selecteditem === "Greenhouse gas emissions and climate change" && (
          <div>
            {" "}
            <div className="titleofdescription">
              Greenhouse gas emissions and climate change
            </div>
            <div className="descriptionperf">
              Not least by means of SDG 13 (Climate action) the United Nations
              warn that today every country on every continent is affected by
              climate change and that as a result national economies are
              disrupted, while at the same time being an enormous threat to
              development. One of the major drivers of climate change,
              greenhouse gas (GHG) emissions from human activities, continues to
              rise and is now at its highest level in history. Countries report
              their national emissions to the IPCC and, according to the Paris
              Agreement, are requested to prepare and communicate their National
              Determined Contribution (for climate actions).
            </div>
            <div className="thirdcontinperformance">
              <div className="thirdcontinperformance1">
                <div className="titleofdescription">
                  GHG emissions and development
                </div>
                <div className="descriptionperf">
                  To reduce societies’ contribution to climate change it is of
                  utmost importance to reduce GHG emissions produced, while at
                  the same time achieving development of different kinds – e.g.
                  measured by GDP or HDI Hotspot areas are mobility, housing and
                  nutrition. Apart from the emissions produced within a country
                  (domestic GHG emissions), it is important to also account for
                  the sum of all GHG emissions produced along the supply chains
                  of goods and services consumed in a country ("carbon
                  footprint"). Both domestic emissions and the carbon footprint
                  can be translated via characterisation factors into their
                  "global warming potential".
                </div>
              </div>
              <div className="firstplacer">Place Holder</div>
            </div>
            <div className="graphplaceholder">Place holder</div>
          </div>
        )}
        {selecteditem === "Air pollution and related health impacts" && (
          <div>
            {" "}
            <div className="titleofdescription">
              Air pollution and related health impacts
            </div>
            <div className="descriptionperf">
              Air pollution is the biggest environmental health risk of our time
              and fundamentally altering our climate, with profound impacts on
              the health of the planet. Air pollution comes from many sources –
              from cook stoves and kerosene lamps to coal-fired power plants,
              vehicle emissions, industrial furnaces, wildfires, and sand and
              dust storms. Air pollution is a crosscutting topic related to a
              number of SDGs, like Goal 3 (Good health and well-being) and Goal
              11 (Sustainable cities and communities). Tackling air pollution
              via, for instance, setting emission targets and applying technical
              emission standards can bring significant benefits for economies,
              human health, and the climate.
            </div>
            <div className="thirdcontinperformance">
              <div className="thirdcontinperformance1">
                <div className="titleofdescription">
                  Air pollution and development
                </div>
                <div className="descriptionperf">
                  As economies develop, an increase in air pollution can be
                  observed. The main goal is to decrease relevant emissions
                  especially from the main sources such as vehicle emissions and
                  coal-fired power plants. By that means, health and
                  environmental impacts of air pollution shall be reduced and
                  decoupled from human and economic development (HDI and GDP,
                  respectively). To measure progress, the amount of air
                  pollutants emitted, both domestically as well as along the
                  supply chains of consumed goods, can be used as pressure
                  indicator. The main indicator is DALY - disability-adjusted
                  life years, as consequence of air pollution.
                </div>
              </div>
              <div className="firstplacer">Place Holder</div>
            </div>
            <div className="graphplaceholder">Place holder</div>
          </div>
        )}
        {selecteditem === "Sustainable land use" && (
          <div>
            {" "}
            <div className="titleofdescription">Sustainable land use</div>
            <div className="descriptionperf">
              Land is used in multiple ways by societies, such as for
              agricultural production, forestry, urban and industrial areas,
              recreation, etc. However, land sealing and intensive agriculture
              are limiting the capacity of land areas to function as part of the
              ecosystem. SDG 15 (Life on land) sets its focus mainly on the
              conservation and sustainable use of biodiversity and ecosystems
              and sustainable land and forest management. This implies reducing
              the demand for land for production to decrease pressure on and
              competition about available land.{" "}
            </div>
            <div className="thirdcontinperformance">
              <div className="thirdcontinperformance1">
                <div className="titleofdescription">
                  Land use and development
                </div>
                <div className="descriptionperf">
                  Globally, the main uses of land are agriculture and forestry.
                  Altering land cover for industrial production often causes
                  severe impacts such as biodiversity loss. In many cases, the
                  goods produced on the converted land are exported to other
                  countries. The 'land footprint' accounts for the total land
                  area used to produce the goods and services consumed in a
                  country. Land use policies should aim at reducing the land
                  footprint as well as the biodiversity loss associated to it.
                  Note: SCP-HAT currently covers agricultural and forestry land
                  occupation only.{" "}
                </div>
              </div>
              <div className="firstplacer">Place Holder</div>
            </div>
            <div className="graphplaceholder">Place holder</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Performance;
