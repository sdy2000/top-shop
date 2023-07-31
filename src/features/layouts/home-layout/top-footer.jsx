import { useSelector } from "react-redux";
import { footerDiffLanguage } from "./data";

const TopFooter = () => {
  const currentLanguage = useSelector((store) => store.language);
  const { data } = footerDiffLanguage.find(
    (data) => data.lan === currentLanguage.symbol
  );

  return (
    <div>
      <div className="newsletter">
        <div className="container">
          <div className="wrapper">
            <div className="box">
              <div className="content">
                <h3>{data.title}</h3>
                <p>
                  {data.text} <strong>{data.special_text}</strong>
                </p>
              </div>
              <form action="" className="search">
                <span className="icon-large">
                  <i className="ri-mail-line"></i>
                </span>
                <input type="email" placeholder={data.placeholder} required />
                <button type="submit">{data.sing_up}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopFooter;
