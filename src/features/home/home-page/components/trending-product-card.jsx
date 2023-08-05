import { useSelector } from "react-redux";
import { formatNumberWithCommas } from "@/utils";

const TrendingProductCard = (props) => {
  const currentLanguage = useSelector((store) => store.language);

  return (
    <div className="item">
      <div className="media">
        <div className="thumbnail object-cover">
          <a href="#">
            <img src={props.image} alt="" />
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
          <span>{props.discount}%</span>
        </div>
      </div>
      <div className="content">
        <h3 className="main-links">
          <a href="#">
            {props.title.find((t) => t.lan === currentLanguage.symbol).text}
          </a>
        </h3>
        <div className="rating">
          <div className="stars"></div>
          <span className="mini-text">
            ({formatNumberWithCommas(props.rate_count)})
          </span>
        </div>
        <div className="price">
          <span className="current">$129.99</span>
          <span className="normal mini-text">$179.99</span>
        </div>
        <div className="mini-text">
          <p>3000 sold</p>
          <p>Free Shipping</p>
          {props.existence < 10 && (
            <p className="stock-danger">Stock : {props.existence} left</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default TrendingProductCard;
