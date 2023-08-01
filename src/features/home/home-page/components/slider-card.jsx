import { Link } from "react-router-dom";

const SliderCard = (props) => {
  return (
    <div className="swiper-slide">
      <div className="item">
        <div className="image object-cover">
          <img src={props.img} alt={props.title} />
        </div>
        <div className="text-content flexcol">
          <h4>{props.title}</h4>
          <h2>
            <span>{props.first_content}</span>
            <br />
            <span>{props.second_content}</span>
          </h2>
          <Link href={props.slug} className="primary-button">
            {props.show_now}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default SliderCard;
