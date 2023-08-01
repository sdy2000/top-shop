const HomeSlider = () => {
  return (
    <div className="slider">
      <div className="container">
        <div className="wrapper">
          <div className="myslider swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="item">
                  <div className="image object-cover">
                    <img src="./assets/slider/slider0.jpg" alt="" />
                  </div>
                  <div className="text-content flexcol">
                    <h4>Shoes Fashion</h4>
                    <h2>
                      <span>Come and Get it!</span>
                      <br />
                      <span>Brand New Shoes</span>
                    </h2>
                    <a href="#" className="primary-button">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="item">
                  <div className="image object-cover">
                    <img src="./assets/slider/slider1.jpg" alt="" />
                  </div>
                  <div className="text-content flexcol">
                    <h4>Quick Fashion</h4>
                    <h2>
                      <span>Fit Your Wardrobe</span>
                      <br />
                      <span>with luxury items</span>
                    </h2>
                    <a href="#" className="primary-button">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="item">
                  <div className="image object-cover">
                    <img src="./assets/slider/slider2.jpg" alt="" />
                  </div>
                  <div className="text-content flexcol">
                    <h4>Quick Offer</h4>
                    <h2>
                      <span>Wooden Minimal Sofa</span>
                      <br />
                      <span>extra 50% off</span>
                    </h2>
                    <a href="#" className="primary-button">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="item">
                  <div className="image object-cover">
                    <img src="./assets/slider/slider3.jpg" alt="" />
                  </div>
                  <div className="text-content flexcol">
                    <h4>Best Deals</h4>
                    <h2>
                      <span>Home Workout Accessories</span>
                      <br />
                      <span>Push the limit</span>
                    </h2>
                    <a href="#" className="primary-button">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
