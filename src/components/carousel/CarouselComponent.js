import { Carousel } from "react-responsive-carousel";
import banner from "../../images/homepage-banner.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import PropTypes from "react";

const CarouselComponent = (props) => {
  const onChange = () => {};

  const onClickItem = () => {};

  const onClickThumb = () => {};

  return (
    <Carousel
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
    >
      {props.bannergroup.map((obj, i) => {
        return (
          <div key={i}>
            <img alt="banner" src={banner} />
            {/* <div className="legend banner-description">
              <h2 className="legend-title">{obj.legendtitle}</h2>
              <div className="legend-subtitle">{obj.legendsubtitle}</div>
              <button className="button-blue learn-more">
                {obj.bannerbutton}
              </button>
            </div> */}
            <div className="container">
              <div className="home-page-banner-text-yellow">
                SPSU is relaunching
              </div>
              <div className="home-page-banner-text-white">
                Come join us in the transformed university that unlocks your
                future
              </div>

              <button className="button-white learn-more">
                {obj.bannerbutton}
              </button>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

CarouselComponent.propTypes = {
  bannergroup: PropTypes.array
};

export default CarouselComponent;
