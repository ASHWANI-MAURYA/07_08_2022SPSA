import { useEffect } from "react";
import "../btechincse/Btech.css";
const IconTabBar = (props) => {
  const alltabs = document.getElementsByClassName("icon-tab");

  useEffect(() => {
    alltabs[0].style.borderBottom = "6px solid #0b38f2";
  }, []);
  const onTabSelect = (evt) => {
    for (let i = 0; i < alltabs.length; i++) {
      alltabs[i].style.border = "none";
    }
    evt.target.style.borderBottom = "6px solid #0b38f2";
  };
  return (
    <div className="icon-tab-bar">
      {props.tabs.map((obj, i) => {
        return (
          <a key={i} href={"#" + obj.tabid} className="icon-tab-hyperlinks">
            <div className="icon-tab" onClick={onTabSelect}>
              {obj.tabname}
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default IconTabBar;
