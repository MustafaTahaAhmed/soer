// import BlueNAv from "../../Component/BlueNAv/BlueNAv";
import "./Information.css";
function Information() {
  return (
    <div className="information-container">
      {/* <BlueNAv /> */}
      <div className="information-content">
        <span className="titlespan">InforMEA</span>:{" "}
        <span className="titlespan1">
          United Nations Information Portal on Multilateral Environmental
          Agreements{" "}
        </span>
        <br></br>
        <span className="titlespan2">
          InforMEA is the United Nations Information Portal on Multilateral
          Environmental Agreements. It is a one-stop portal for information on
          Multilateral Environmental Agreements – or MEAs Information concerning
          Party Status and Action Plans for the country are harvested from the
          <span className="linksss">InforMEA platform</span>.
        </span>
        <br></br>
        <span className="titlespan3">
          {" "}
          For a most accurate status of ratification including all supplementary
          information, please refers on the websites of the respective
          conventions.
        </span>
        <div className="titlespan">Party Status</div>
        <table className="class=" max-h-96 overflow-auto>
          <thead>
            <tr>
              <th className="firstcolomn">Treaty</th>
              <th>Signature</th>
              <th>Ratification</th>
              <th>Party status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Kigali Amendment (2016)</td>
              <td>2019-10-16</td>
              <td>2019-10-16</td>
              <td>Ratification</td>
            </tr>
            <tr>
              <td>Paris Agreement</td>
              <td>2016-04-22</td>
              <td>2016-11-04</td>
              <td>Ratification</td>
            </tr>
            <tr>
              <td>Paris Agreement</td>
              <td>2016-04-22</td>
              <td>2016-11-04</td>
              <td>Ratification</td>
            </tr>
            <tr>
              <td>Paris Agreement</td>
              <td>2016-04-22</td>
              <td>2016-11-04</td>
              <td>Ratification</td>
            </tr>
          </tbody>
        </table>
        <div className="titlespan">Action Plans</div>
        <table className="class=" max-h-96 overflow-auto>
          <thead>
            <tr>
              <th className="firstcolomn">Title</th>
              <th>Updated date</th>
              <th>Files</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                National Implementation Plan for the Stockholm Convention on
                Persistent Organic Pollutants
              </td>
              <td>2019-10-16</td>
              <td>
                <span className="linksss">
                  UNEP-POPS-NIP-Jordan-1.English.pdf
                </span>
              </td>
            </tr>
            <tr>
              <td>
                National Implementation Plan for the Stockholm Convention on
                Persistent Organic Pollutants
              </td>
              <td>2016-04-22</td>
              <td>
                <span className="linksss">
                  UNEP-POPS-NIP-Jordan-1.English.pdf
                </span>
              </td>
            </tr>
            <tr>
              <td>
                National Implementation Plan for the Stockholm Convention on
                Persistent Organic Pollutants
              </td>
              <td>2016-04-22</td>
              <td>
                <span className="linksss">
                  UNEP-POPS-NIP-Jordan-1.English.pdf
                </span>
              </td>
            </tr>
            <tr>
              <td>
                National Implementation Plan for the Stockholm Convention on
                Persistent Organic Pollutants
              </td>
              <td>2016-04-22</td>
              <td>
                <span className="linksss">
                  UNEP-POPS-NIP-Jordan-1.English.pdf
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="titlespan">Knowledge repository</div>
        <div>
          Explore UNEP's vast repository of documents, publications and reports.
          <br></br>
          The selected documentation for the country is harvested from the{" "}
          <span className="linksss">knowledge repository platform.</span>
        </div>
      </div>
    </div>
  );
}

export default Information;
