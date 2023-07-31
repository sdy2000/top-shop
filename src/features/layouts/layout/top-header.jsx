import { useDispatch, useSelector } from "react-redux";
import { ThemeButton } from "./components";
import { barDiffLanguage, currency, language } from "./data";
import { onChangeCurrency, onChangeLanguage } from "@/context/features";

const TopHeader = () => {
  const dispatch = useDispatch();
  const currentCurrency = useSelector((store) => store.currency);
  const currentLanguage = useSelector((store) => store.language);
  const { data } = barDiffLanguage.find(
    (bar) => bar.lan === currentLanguage.symbol
  );

  console.log(data);
  return (
    <div>
      <aside className="site-off desktop-hide">
        <div className="off-canvas">
          <div className="canvas-head flexitem">
            <div className="logo">
              <a href="/">
                <span className="circle"></span>.Store
              </a>
            </div>
            <a href="#" className="t-close flexcenter">
              <i className="ri-close-line"></i>
            </a>
          </div>
          <div className="departments"></div>
          <nav></nav>
          <div className="thetop-nav"></div>
        </div>
      </aside>
      <header>
        <div className="header-top mobile-hide">
          <div className="container">
            <div className="wrapper flexitem">
              <div className="left">
                <ul className="flexitem main-links">
                  <li>
                    <a href="/blog">{data.blog}</a>
                  </li>
                  <li>
                    <a href="#">{data.featured}</a>
                  </li>
                  <li>
                    <a href="#">{data.wishlist}</a>
                  </li>
                </ul>
              </div>
              <div className="right">
                <ul className="flexitem main-links">
                  <li>
                    <ThemeButton />
                  </li>
                  <li>
                    <a href="#">{data.sing_up}</a>
                  </li>
                  <li>
                    <a href="#">{data.my_account}</a>
                  </li>
                  <li>
                    <a href="#">{data.order_tracking}</a>
                  </li>
                  {/* //! //! */}
                  {/* //!  Currency DropDown //!  */}
                  {/* //! //! */}
                  <li>
                    <a href="#">
                      <div className="flex justify-center items-center gap-2 px-2 py-1">
                        <span className="h-4 w-4">
                          <img
                            src={currentCurrency.currency_image}
                            alt={currentCurrency.currency_name}
                          />
                        </span>
                        <span>{currentCurrency.currency}</span>
                      </div>
                      <span className="icon-small">
                        <i className="ri-arrow-down-s-line"></i>
                      </span>
                    </a>
                    <ul>
                      {currency.map((cur) => (
                        <li
                          className={`${
                            cur.id === currentCurrency.currency
                              ? "bg-slate-300"
                              : " hover:bg-slate-200"
                          } duration-200`}
                          key={cur.id}
                        >
                          <button
                            title={cur.currency_name}
                            className="flex justify-center items-center gap-2 px-2 py-1"
                            onClick={() => dispatch(onChangeCurrency(cur))}
                          >
                            <span className="h-4 w-4">
                              <img src={cur.image} alt={cur.currency_name} />
                            </span>
                            <span>{cur.id}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>

                  {/* //! //! */}
                  {/* //!  Language DropDown //!  */}
                  {/* //! //! */}
                  <li>
                    <a href="#">
                      {currentLanguage.language}
                      <span className="icon-small">
                        <i className="ri-arrow-down-s-line"></i>
                      </span>
                    </a>
                    <ul>
                      {language.map((lan, idx) => (
                        <li
                          className={`${
                            lan.symbol === currentLanguage.symbol
                              ? "bg-slate-300"
                              : " hover:bg-slate-200"
                          } duration-200 gap-2 px-2 py-1`}
                          key={idx}
                        >
                          <button
                            onClick={() => dispatch(onChangeLanguage(lan))}
                            title={lan.title}
                          >
                            {lan.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*// <!-- Header top -->*/}
      </header>
    </div>
  );
};
export default TopHeader;
