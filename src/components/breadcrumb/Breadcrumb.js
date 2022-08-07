import "./Breadcrumb.css";
import greaterthan from "../../images/greater-than.png";

const Breadcrumb = (props) => {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb-item">HOME</div>
      <div className="breadcrumb-item">
        &nbsp;&nbsp;
        <img src={greaterthan} className="breadcrumb-greater-than" />
        &nbsp;&nbsp; {props.level1}
      </div>
      <div className="breadcrumb-item breadcrumb-active">
        &nbsp;&nbsp;
        <img src={greaterthan} className="breadcrumb-greater-than" />
        &nbsp;&nbsp; {props.level2}
      </div>
    </div>
  );
};

export default Breadcrumb;
