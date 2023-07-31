import { useSelector } from "react-redux";
import { CurrencyDropdown, LanguageDropdown, ThemeButton } from "./components";
import { barDiffLanguage } from "./data";

const TopHeader = () => {
  const currentLanguage = useSelector((store) => store.language);
  const { data } = barDiffLanguage.find(
    (bar) => bar.lan === currentLanguage.symbol
  );

  return (
    <div>
      <aside className="site-off desktop-hide">
        <div className="off-canvas">
          <div className="canvas-head flexitem">
            <div className="logo">
              <a href="/">
                <span className="circle"></span>
                <span className="text-secondary-color z-10">TOP</span>Shop
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
                    <CurrencyDropdown />
                  </li>

                  {/* //! //! */}
                  {/* //!  Language DropDown //!  */}
                  {/* //! //! */}
                  <li>
                    <LanguageDropdown />
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
