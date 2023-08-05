import { useSelector } from "react-redux";
import { formatNumberWithCommas, roundToNearestHundred } from "@/utils";

const FeaturedProductCard = (props) => {
  const currentLanguage = useSelector((store) => store.language);
  return (
    <div className="item">
      <div className="media">
        <div className="thumbnail object-cover">
          <a href="#">
            <img
              src={props.image}
              alt={
                props.title.find((t) => t.lan === currentLanguage.symbol).text
              }
            />
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
        <div className="rating">
          <div className="stars"></div>
          <span className="mini-text">
            {" "}
            ({formatNumberWithCommas(props.rate_count)})
          </span>
        </div>
        {props.description && (
          <div className="footer">
            <ul className="mini-text">
              <li>65% Polyester,35% Cotton</li>
              <li>Imported</li>
              <li>Machine Wash</li>
            </ul>
          </div>
        )}
        <h3 className="main-links">
          <a href="#">
            {props.title.find((t) => t.lan === currentLanguage.symbol).text}
          </a>
        </h3>
        <div className="price">
          <span className="current">$56.50</span>
          <span className="normal mini-text">$75.50</span>
        </div>
      </div>
    </div>
  );
};
export default FeaturedProductCard;
