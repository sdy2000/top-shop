import { Link } from "react-router-dom";

const HomeContentContainer = ({ title, slug, children }) => {
  return (
    <div className="features">
      <div className="container">
        <div className="wrapper">
          <div className="sectop flexitem">
            <h2>
              <span className="circle"></span>
              <span>{title}</span>
            </h2>
            <div className="second-links">
              <Link to={slug} className="view-all">
                View All
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
export default HomeContentContainer;
