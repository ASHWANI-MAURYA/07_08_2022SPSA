import { useEffect } from "react";
import "./SideNavigation.css";

const SideNavigation = (props) => {
  useEffect(() => {
    if (props.activesubitem) {
      document.getElementsByClassName("accordion")[0].classList.toggle("active");
      const panel = document.getElementsByClassName("accordion")[0].nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }, []);
  const onExpand = (evt) => {
    evt.target.classList.toggle("active");
    const panel = evt.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };

  return (
    <div className="side-navigation">
      <div className="container navigation-list" style={{ width: "auto" }}>
        <div className="navigation-list-title">{props.title}</div>
        {props.listitems.map((obj, i) => {
          let navigationitemclass = "";
          if (props.activeitem === i + 1) {
            if (props.activesubitem) {
              // navigationsubitemclass = "navigation-active-item";
            } else {
              navigationitemclass = "navigation-active-item";
            }
          }

          const currentitem =
            obj.expandable === true
              ? (
              <>
                <button
                  className={"accordion " + navigationitemclass}
                  onClick={onExpand}
                >
                  {obj.item}
                </button>
                <div className="panel">
                  {obj.subitems.map((obj2, j) => {
                    let navigationsubitemclass = "";
                    if (props.activesubitem === j + 1) {
                      navigationsubitemclass = "navigation-active-item";
                    }
                    return (
                      <a key={j} href={obj2.href}><div className={"accordion-inner-item " + navigationsubitemclass}>
                        {obj2.title}
                      </div>
                      </a>
                    );
                  })}
                </div>
              </>
                )
              : (
              <a key={i} className="navigation-hyperlinks" href={obj.href}>
                <div className={"navigation-item " + navigationitemclass}>
                  {obj.item}
                </div>
              </a>
                );
          return currentitem;
        })}
      </div>
    </div>
  );
};

export default SideNavigation;
