import { Link } from "react-router-dom";

const SliderCard = (props) => {
  // Why swiper-slide class is useful ?
  // Add class in img tag .
  return (
    <div className="item">
      <div className="image">
        <img
          src={props.img}
          alt={props.title}
          className="h-[29.5rem] w-full object-cover"
        />
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
  );
};
export default SliderCard;
