import { Carousel } from "react-responsive-carousel";
import banner from "../../images/main-page-banner.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";
import bannerstripes from "../../images/banner-stripes.png";

const CarouselComponent = () => {
  const onChange = () => {};

  const onClickItem = () => {};

  const onClickThumb = () => {};

  return (
    <Carousel
      showArrows
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
    >
      <div>
        <img
          alt="banner-stripes"
          src={bannerstripes}
          className="banner-stripes"
        />
        <img alt="banner" src={banner} />
        <div className="legend banner-description">
          <h2 className="legend-title">
            India’s Top University SPSU Rajasthan
          </h2>
          <div className="legend-subtitle">
            SPSU is the first choice for all aspiring candidates as it provided
            them with industry education which is highly in demand at various
            corps.
          </div>
          <button type="submit" className="button-blue learn-more">
            LEARN MORE
          </button>
        </div>
      </div>
      <div>
        <img alt="banner" src={banner} />
        <div className="legend banner-description">
          <h2 className="legend-title">
            India’s Top University SPSU Rajasthan
          </h2>
          <div className="legend-subtitle">
            SPSU is the first choice for all aspiring candidates as it provided
            them with industry education which is highly in demand at various
            corps.
          </div>
        </div>
      </div>
      <div>
        <img alt="banner" src={banner} />
        <div className="legend banner-description">
          <h2 className="legend-title">
            India’s Top University SPSU Rajasthan
          </h2>
          <div className="legend-subtitle">
            SPSU is the first choice for all aspiring candidates as it provided
            them with industry education which is highly in demand at various
            corps.
          </div>
        </div>
      </div>
      <div>
        <img alt="banner" src={banner} />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img alt="banner" src={banner} />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img alt="banner" src={banner} />
        <p className="legend">Legend 6</p>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
