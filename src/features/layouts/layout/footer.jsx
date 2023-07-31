const Footer = () => {
  return <footer>
    <div className="widgets">
      <div className="container">
        <div className="wrapper">
          <div className="flexwrap">
            <div className="row">
              <div className="item mini-links">
                <h4>Help & Contact</h4>
                <ul className="flexcol">
                  <li><a href="">Your Account</a></li>
                  <li><a href="">Your Orders</a></li>
                  <li><a href="">Shipping Rates</a></li>
                  <li><a href="">Returns</a></li>
                  <li><a href="">Assistant</a></li>
                  <li><a href="">Help</a></li>
                  <li><a href="">Contact us</a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="item mini-links">
                <h4>Product Categories</h4>
                <ul className="flexcol">
                  <li><a href="">Beauty</a></li>
                  <li><a href="">Electronic</a></li>
                  <li><a href="">Womens Fashion</a></li>
                  <li><a href="">Mens Fashion</a></li>
                  <li><a href="">Girls Fashion</a></li>
                  <li><a href="">Boys Fashion</a></li>
                  <li><a href="">Health & Household</a></li>
                  <li><a href="">Home & Kitchen</a></li>
                  <li><a href="">Pet Supplies</a></li>
                  <li><a href="">Sports</a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="item mini-links">
                <h4>Payment Info</h4>
                <ul className="flexcol">
                  <li><a href="">Bussiness Card</a></li>
                  <li><a href="">Shop with Points</a></li>
                  <li><a href="">Reload Your Balance</a></li>
                  <li><a href=""></a>Paypal</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="item mini-links">
                <h4>About Us</h4>
                <ul className="flexcol">
                  <li><a href="">Company Info</a></li>
                  <li><a href="">News</a></li>
                  <li><a href="">Investors</a></li>
                  <li><a href="">Careers</a></li>
                  <li><a href="">Policies</a></li>
                  <li><a href="">Customer reviews</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*// <!--   Widgets -->*/}

    <div className="footer-info">
      <div className="container">
        <div className="wrapper">
          <div className="flexcol">
            <div className="logo">
              <a href=""><span className="circle"></span>.Store</a>
            </div>
            <div className="socials">
              <ul className="flexitem">
                <li><a href=""><i className="ri-twitter-line"></i></a></li>
                <li><a href=""><i className="ri-facebook-line"></i></a></li>
                <li><a href=""><i className="ri-instagram-line"></i></a></li>
                <li><a href=""><i className="ri-linkedin-line"></i></a></li>
                <li><a href=""><i className="ri-youtube-line"></i></a></li>
              </ul>
            </div>
          </div>
          <p className="mini-text">Copyright 2023 .Store. All right reserved.</p>
        </div>
      </div>
    </div>
    {/*// <!--   Footer Info -->*/}

  </footer>;
};
export default Footer;
