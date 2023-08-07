import { BrandsSlider } from "@/features/home/shared/components";
import {
  FeaturedProductCard,
  HomeContentContainer,
  HomeDepartmentsBar,
  HomeSlider,
  TrendingProductCard,
} from "./components";
import { trendingProducts, featuredProducts } from "./data";
import { useSelector } from "react-redux";

export const HomeTopPart = () => {
  const currentLanguage = useSelector((store) => store.language);
  // const data ;

  return (
    <>
      <HomeDepartmentsBar />
      {/* Header Nav */}
      <main>
        <HomeSlider />

        <BrandsSlider />
        <HomeContentContainer
          title="Trending Products"
          slug="/"
          children={
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
                          <img src="/assets/products/apparel4.jpg" alt="" />
                        </a>
                      </div>
                      <div className="hoverable">
                        <ul>
                          <li className="active">
                            <a href="#">
                              <i className="ri-heart-line"></i>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i className="ri-eye-line"></i>
                            </a>
                          </li>
                          <li>
                            <a href="">
                              <i className="ri-shuffle-line"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="discount circle flexcenter">
                        <span>31%</span>
                      </div>
                    </div>
                    <div className="content">
                      <div className="rating">
                        <div className="stars"></div>
                        <span className="mini-text">(2,548)</span>
                      </div>
                      <h3 className="main-links">
                        <a href="#">Happy Sailed Womens Summer Boho Floral</a>
                      </h3>
                      <div className="price">
                        <span className="current">$129.99</span>
                        <span className="normal mini-text">$179.99</span>
                      </div>
                      <div className="stock mini-text">
                        <div className="qty">
                          <span>
                            Stock:{" "}
                            <strong className="qty-available">107</strong>
                          </span>
                          <span>
                            Sold: <strong className="qty-sold">3,500</strong>
                          </span>
                        </div>
                        <div className="bar">
                          <div className="available"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row products mini">
                  {trendingProducts.map((product, idx) => (
                    <TrendingProductCard {...product} key={idx} />
                  ))}
                </div>
              </div>
            </div>
          }
        />
        <HomeContentContainer
          title="Featured Products"
          slug="/"
          children={
            <div className="products main flexwrap">
              {featuredProducts.map((product, idx) => (
                <FeaturedProductCard {...product} key={idx} />
              ))}
            </div>
          }
        />
      </main>
    </>
  );
};
