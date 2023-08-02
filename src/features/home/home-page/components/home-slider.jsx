import { useSelector } from "react-redux";
import { homeSliderDiffLanguage } from "../data/home-slider-diff-language";
import { SliderCard } from ".";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

const HomeSlider = () => {
  const currentLanguage = useSelector((store) => store.language);
  const { data } = homeSliderDiffLanguage.find(
    (slider) => slider.lan === currentLanguage.symbol
  );

  return (
    <>
      <div className="slider">
        <div className="container">
          <div className="wrapper">
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {data.map((slider, idx) => (
                <SwiperSlide key={idx}>
                  <SliderCard {...slider} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="brands">
        <div className="container">
          <div className="wrapper flexitem">
            <div className="item">
              <a href="#">
                <img src="./assets/brands/zara.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="./assets/brands/samsung.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="./assets/brands/oppo.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="./assets/brands/asus.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="./assets/brands/hurley.png" alt="" />
              </a>
            </div>
            <div className="item">
              <a href="#">
                <img src="./assets/brands/dng.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="trending">
        <div className="container">
          <div className="wrapper">
            <div className="sectop flexitem">
              <h2><span className="circle"></span><span>Trending Products</span></h2>
            </div>
            <div className="column">
              <div className="flexwrap">
                <div className="row products big">
                  <div className="item">
                    <div className="offer">
                      <p>Offer ends at</p>
                      <ul className="flexcenter">
                        <li>1</li>
                        <li>15</li>
                        <li>27</li>
                        <li>68</li>
                      </ul>
                    </div>
                    <div className="media">
                      <div className="image">
                        <a href="#">
                          <img src="./assets/products/apparel4.jpg" alt="" />
                        </a>
                      </div>
                      <div className="hoverable">
                        <ul>
                          <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                          <li><a href=""><i className="ri-eye-line"></i></a></li>
                          <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                        </ul>
                      </div>
                      <div className="discount circle flexcenter"><span>31%</span></div>
                    </div>
                    <div className="content">
                      <div className="rating">
                        <div className="stars"></div>
                        <span className="mini-text">(2,548)</span>
                      </div>
                      <h3 className="main-links"><a href="#">Happy Sailed Womens Summer Boho Floral</a></h3>
                      <div className="price">
                        <span className="current">$129.99</span>
                        <span className="normal mini-text">$179.99</span>
                      </div>
                      <div className="stock mini-text">
                        <div className="qty">
                          <span>Stock: <strong className="qty-available">107</strong></span>
                          <span>Sold: <strong className="qty-sold">3,500</strong></span>
                        </div>
                        <div className="bar">
                          <div className="available"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row products mini">
                  <div className="item">
                    <div className="media">
                      <div className="thumbnail object-cover">
                        <a href="#">
                          <img src="./assets/products/shoe1.jpg" alt="" />
                        </a>
                      </div>
                      <div className="hoverable">
                        <ul>
                          <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                          <li><a href=""><i className="ri-eye-line"></i></a></li>
                          <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                        </ul>
                      </div>
                      <div className="discount circle flexcenter"><span>30%</span></div>
                    </div>
                    <div className="content">
                      <h3 className="main-links"><a href="#">Men Slip On Shoes Casual with Arch Support Insoles</a></h3>
                      <div className="rating">
                        <div className="stars"></div>
                        <span className="mini-text">(2,548)</span>
                      </div>
                      <div className="price">
                        <span className="current">$129.99</span>
                        <span className="normal mini-text">$179.99</span>
                      </div>
                      <div className="mini-text">
                        <p>3000 sold</p>
                        <p>Free Shipping</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="media">
                      <div className="thumbnail object-cover">
                        <a href="#">
                          <img src="./assets/products/apparel1.jpg" alt="" />
                        </a>
                      </div>
                      <div className="hoverable">
                        <ul>
                          <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                          <li><a href=""><i className="ri-eye-line"></i></a></li>
                          <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                        </ul>
                      </div>
                      <div className="discount circle flexcenter"><span>25%</span></div>
                    </div>
                    <div className="content">
                      <h3 className="main-links"><a href="#">Under Armour Mens Tech</a></h3>
                      <div className="rating">
                        <div className="stars"></div>
                        <span className="mini-text">(1,148)</span>
                      </div>
                      <div className="price">
                        <span className="current">$56.99</span>
                        <span className="normal mini-text">$75.99</span>
                      </div>
                      <div className="mini-text">
                        <p>2600 sold</p>
                        <p>Free Shipping</p>
                        <p className="stock-danger">Stock : 10left</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="media">
                      <div className="thumbnail object-cover">
                        <a href="#">
                          <img src="./assets/products/home1.jpg" alt="" />
                        </a>
                      </div>
                      <div className="hoverable">
                        <ul>
                          <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                          <li><a href=""><i className="ri-eye-line"></i></a></li>
                          <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                        </ul>
                      </div>
                      <div className="discount circle flexcenter"><span>37%</span></div>
                    </div>
                    <div className="content">
                      <h3 className="main-links"><a href="#">Vonanda Velvet Sofa Couch</a></h3>
                      <div className="rating">
                        <div className="stars"></div>
                        <span className="mini-text">(2,548)</span>
                      </div>
                      <div className="price">
                        <span className="current">$469.99</span>
                        <span className="normal mini-text">$755.99</span>
                      </div>
                      <div className="mini-text">
                        <p>1000 sold</p>
                        <p>Free Shipping</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="media">
                      <div className="thumbnail object-cover">
                        <a href="#">
                          <img src="./assets/products/electronic3.jpg" alt="" />
                        </a>
                      </div>
                      <div className="hoverable">
                        <ul>
                          <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                          <li><a href=""><i className="ri-eye-line"></i></a></li>
                          <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                        </ul>
                      </div>
                      <div className="discount circle flexcenter"><span>20%</span></div>
                    </div>
                    <div className="content">
                      <h3 className="main-links"><a href="#">Wireless Headphones</a></h3>
                      <div className="rating">
                        <div className="stars"></div>
                        <span className="mini-text">(548)</span>
                      </div>
                      <div className="price">
                        <span className="current">$100</span>
                        <span className="normal mini-text">$120</span>
                      </div>
                      <div className="mini-text">
                        <p>3000 sold</p>
                        <p>Free Shipping</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row products mini">
                  <div className="item">
                    <div className="media">
                      <div className="thumbnail object-cover">
                        <a href="#">
                          <img src="./assets/products/apparel3.jpg" alt="" />
                        </a>
                      </div>
                      <div className="hoverable">
                        <ul>
                          <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                          <li><a href=""><i className="ri-eye-line"></i></a></li>
                          <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                        </ul>
                      </div>
                      <div className="discount circle flexcenter"><span>30%</span></div>
                    </div>
                    <div className="content">
                      <h3 className="main-links"><a href="#">Black Womens Coat Dress</a></h3>
                      <div className="rating">
                        <div className="stars"></div>
                        <span className="mini-text">(2,548)</span>
                      </div>
                      <div className="price">
                        <span className="current">$129.99</span>
                        <span className="normal mini-text">$179.99</span>
                      </div>
                      <div className="mini-text">
                        <p>3000 sold</p>
                        <p>Free Shipping</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="media">
                      <div className="thumbnail object-cover">
                        <a href="#">
                          <img src="./assets/products/apparel2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="hoverable">
                        <ul>
                          <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                          <li><a href=""><i className="ri-eye-line"></i></a></li>
                          <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                        </ul>
                      </div>
                      <div className="discount circle flexcenter"><span>47%</span></div>
                    </div>
                    <div className="content">
                      <h3 className="main-links"><a href="#">Womens Lightweight</a></h3>
                      <div className="rating">
                        <div className="stars"></div>
                        <span className="mini-text">(994)</span>
                      </div>
                      <div className="price">
                        <span className="current">$37.50</span>
                        <span className="normal mini-text">$45.50</span>
                      </div>
                      <div className="mini-text">
                        <p>1257 sold</p>
                        <p>Free Shipping</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="media">
                      <div className="thumbnail object-cover">
                        <a href="#">
                          <img src="./assets/products/home2.jpg" alt="" />
                        </a>
                      </div>
                      <div className="hoverable">
                        <ul>
                          <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                          <li><a href=""><i className="ri-eye-line"></i></a></li>
                          <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                        </ul>
                      </div>
                      <div className="discount circle flexcenter"><span>44%</span></div>
                    </div>
                    <div className="content">
                      <h3 className="main-links"><a href="#">Dimmable Ceiling Light Modern</a></h3>
                      <div className="rating">
                        <div className="stars"></div>
                        <span className="mini-text">(543)</span>
                      </div>
                      <div className="price">
                        <span className="current">$279.99</span>
                        <span className="normal mini-text">$499.99</span>
                      </div>
                      <div className="mini-text">
                        <p>995 sold</p>
                        <p>Free Shipping</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="media">
                      <div className="thumbnail object-cover">
                        <a href="#">
                          <img src="./assets/products/home3.jpg" alt="" />
                        </a>
                      </div>
                      <div className="hoverable">
                        <ul>
                          <li className="active"><a href="#"><i className="ri-heart-line"></i></a></li>
                          <li><a href=""><i className="ri-eye-line"></i></a></li>
                          <li><a href=""><i className="ri-shuffle-line"></i></a></li>
                        </ul>
                      </div>
                      <div className="discount circle flexcenter"><span>18%</span></div>
                    </div>
                    <div className="content">
                      <h3 className="main-links"><a href="#">Modern Storage Cabinet</a></h3>
                      <div className="rating">
                        <div className="stars"></div>
                        <span className="mini-text">(335)</span>
                      </div>
                      <div className="price">
                        <span className="current">$129.99</span>
                        <span className="normal mini-text">$159.99</span>
                      </div>
                      <div className="mini-text">
                        <p>700 sold</p>
                        <p>Free Shipping</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
