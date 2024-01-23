import { useNavigate } from "react-router-dom";

function Countrynavitem(props) {
  const navigate = useNavigate();
  const Icon = props.icon;

  return (
    <div
      className="divinnav1"
      onClick={() => {
        navigate(`${props.link}`);
      }}
    >
      <div className="title121">
        <Icon size={30} color={props.iconcolor} />
      </div>
      <div className="title1" style={{ color: props.colortitle }}>
        {props.title}
      </div>
    </div>
  );
}

export default Countrynavitem;
