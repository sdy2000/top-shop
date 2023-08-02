import { useSelector } from "react-redux";
import { departmentsDiffLanguage } from "../data";

const HomeDepartmentsBar = () => {
  const currentLanguage = useSelector((store) => store.language);
  const { data } = departmentsDiffLanguage.find(
    (dep) => dep.lan === currentLanguage.symbol
  );

  return (
    <div className="header-main mobile-hide">
      <div className="container">
        <div className="wrapper flexitem">
          <div className="left">
            <div className="dpt-cat">
              <div className="dpt-head">
                <div className="main-text">{data.department}</div>
                <div className="mini-text mobile-hide">{data.total}</div>
                <a href="#" className="dpt-trigger mobile-hide">
                  <i className="ri-menu-3-line ri-xl"></i>
                </a>
              </div>
              <div className="dpt-menu">
                <ul className="second-links">
                  <li className="has-child beauty">
                    <a href="#">
                      <div className="icon-large">
                        <i className="ri-bear-smile-line"></i>
                      </div>
                      {data.beauty}
                      <div className="icon-small">
                        <i className="ri-arrow-right-s-line"></i>
                      </div>
                    </a>
                    <ul>
                      <li>
                        <a href="#">{data.beauty1}</a>
                      </li>
                      <li>
                        <a href="#">{data.beauty2}</a>
                      </li>
                      <li>
                        <a href="#">{data.beauty3}</a>
                      </li>
                      <li>
                        <a href="#">{data.beauty4}</a>
                      </li>
                      <li>
                        <a href="#">{data.beauty5}</a>
                      </li>
                      <li>
                        <a href="#">{data.beauty6}</a>
                      </li>
                      <li>
                        <a href="#">{data.beauty7}</a>
                      </li>
                      <li>
                        <a href="#">{data.beauty8}</a>
                      </li>
                    </ul>
                  </li>

                  <li className="has-child electronic">
                    <a href="#">
                      <div className="icon-large">
                        <i className="ri-bluetooth-line"></i>
                      </div>
                      {data.electronic}
                      <div className="icon-small">
                        <i className="ri-arrow-right-s-line"></i>
                      </div>
                    </a>
                    <ul>
                      <li>
                        <a href="#">{data.electronic1}</a>
                      </li>
                      <li>
                        <a href="#">{data.electronic2}</a>
                      </li>
                      <li>
                        <a href="#">{data.electronic3}</a>
                      </li>
                      <li>
                        <a href="#">{data.electronic4}</a>
                      </li>
                      <li>
                        <a href="#">{data.electronic5}</a>
                      </li>
                      <li>
                        <a href="#">{data.electronic6}</a>
                      </li>
                      <li>
                        <a href="#">{data.electronic7}</a>
                      </li>
                      <li>
                        <a href="#">{data.electronic8}</a>
                      </li>
                      <li>
                        <a href="#">{data.electronic9}</a>
                      </li>
                    </ul>
                  </li>

                  <li className="has-child fashion">
                    <a href="#">
                      <div className="icon-large">
                        <i className="ri-t-shirt-air-line"></i>
                      </div>
                      {data.woman_fashion}
                      <div className="icon-small">
                        <i className="ri-arrow-right-s-line"></i>
                      </div>
                    </a>
                    <ul>
                      <li>
                        <a href="#">{data.woman_fashion1}</a>
                      </li>
                      <li>
                        <a href="#">{data.woman_fashion2}</a>
                      </li>
                      <li>
                        <a href="#">{data.woman_fashion3}</a>
                      </li>
                      <li>
                        <a href="#">{data.woman_fashion4}</a>
                      </li>
                      <li>
                        <a href="#">{data.woman_fashion5}</a>
                      </li>
                      <li>
                        <a href="#">{data.woman_fashion6}</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon-large">
                        <i className="ri-shirt-line"></i>
                      </div>
                      {data.men_fashion}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon-large">
                        <i className="ri-user-5-line"></i>
                      </div>
                      {data.boy_fashion}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon-large">
                        <i className="ri-user-6-line"></i>
                      </div>
                      {data.health_house}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon-large">
                        <i className="ri-heart-pulse-line"></i>
                      </div>
                      {data.health_house}
                    </a>
                  </li>
                  <li className="has-child homekit">
                    <a href="#">
                      <div className="icon-large">
                        <i className="ri-home-8-line"></i>
                      </div>
                      {data.home_kitchen}
                      <div className="icon-small">
                        <i className="ri-arrow-right-s-line"></i>
                      </div>
                    </a>
                    <div className="mega">
                      <div className="flexcol">
                        <div className="row">
                          <h4>
                            <a href="#">{data.home_kitchen1}</a>
                          </h4>
                          <ul>
                            <li>
                              <a href="#">{data.home_kitchen2}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen3}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen4}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen5}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen6}</a>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <h4>
                            <a href="#">{data.home_kitchen7}</a>
                          </h4>
                          <ul>
                            <li>
                              <a href="#">{data.home_kitchen8}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen9}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen10}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flexcol">
                        <div className="row">
                          <h4>
                            <a href="#">{data.home_kitchen11}</a>
                          </h4>
                          <ul>
                            <li>
                              <a href="#">{data.home_kitchen12}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen13}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen14}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen15}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen16}</a>
                            </li>
                          </ul>
                        </div>
                        <div className="row">
                          <h4>
                            <a href="#">{data.home_kitchen17}</a>
                          </h4>
                          <ul>
                            <li>
                              <a href="#">{data.home_kitchen18}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen19}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen20}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="flexcol">
                        <div className="row">
                          <h4>
                            <a href="#">{data.home_kitchen21}</a>
                          </h4>
                          <ul>
                            <li>
                              <a href="#">{data.home_kitchen22}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen23}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen24}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen25}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen26}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen27}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen28}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen29}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen30}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen31}</a>
                            </li>
                            <li>
                              <a href="#">{data.home_kitchen32}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon-large">
                        <i className="ri-android-line"></i>
                      </div>
                      {data.pet_supp}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon-large">
                        <i className="ri-basketball-line"></i>
                      </div>
                      {data.sport}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="icon-large">
                        <i className="ri-shield-star-line"></i>
                      </div>
                      {data.best_seller}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="search-box">
              <form action="" className="search">
                <span className="icon-large">
                  <i className="ri-search-line"></i>
                </span>
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder={data.placeholder}
                />
                <button type="submit">{data.search}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeDepartmentsBar;
