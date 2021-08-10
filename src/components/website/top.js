import { Link } from "react-router-dom";

export default function Top(props) {
  return (
    <>
      <div className="header" id="home">
        <div className="container">
          <ul>
            <li>
              {" "}
              <Link to="/#/signin" data-toggle="modal" data-target="#myModal">
                <i className="fa fa-unlock-alt" aria-hidden="true"></i> Sign In{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/#/signup" data-toggle="modal" data-target="#myModal2">
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>{" "}
                Sign Up{" "}
              </Link>
            </li>
            <li>
              <i className="fa fa-phone" aria-hidden="true"></i> Call :
              0967758023
            </li>
            <li>
              <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
              <Link to="mailto:hungltph08107@fpt.edu.vn">
                hungltph08107@fpt.edu.vn
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-bot">
        <div className="header-bot_inner_wthreeinfo_header_mid">
          <div className="col-md-4 header-middle">
            <form action="#" method="post">
              <input
                type="search"
                name="search"
                placeholder="Search here..."
                required=""
              />
              <input type="submit" value=" " />
              <div className="clearfix"></div>
            </form>
          </div>
          <div className="col-md-4 logo_agile">
            <h1>
              <Link to="/">
                <span>E</span>lite Shoppy{" "}
                <i
                  className="fa fa-shopping-bag top_logo_agile_bag"
                  aria-hidden="true"
                ></i>
              </Link>
            </h1>
          </div>
          <div className="col-md-4 agileits-social top_content">
            <ul className="social-nav model-3d-0 footer-social w3_agile_social">
              <li className="share">Share On : </li>
              <li>
                <Link to="#" className="facebook">
                  <div className="front">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </div>
                  <div className="back">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#" className="twitter">
                  <div className="front">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </div>
                  <div className="back">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#" className="instagram">
                  <div className="front">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </div>
                  <div className="back">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="#" className="pinterest">
                  <div className="front">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </div>
                  <div className="back">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      <div className="ban-top">
        <div className="container">
          <div className="top_nav_left">
            <nav className="navbar navbar-default">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>
                <div
                  className="collapse navbar-collapse menu--shylock"
                  id="bs-example-navbar-collapse-1"
                >
                  <ul className="nav navbar-nav menu__list">
                    <li className="active menu__item menu__item--current">
                      <Link className="menu__link" to="/">
                        Home <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    {/* <li className=" menu__item">
                      <a className="menu__link" href="/products">
                        Product
                      </Link>
                    </li> */}
                    {props.categories &&
                      props.categories.map((cate) => (
                        <li className="menu__item">
                          <Link
                            to={`/category/${cate.id}`}
                            className="dropdown-toggle menu__link"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {cate.name}
                          </Link>
                        </li>
                      ))}
                    <li className="menu__item">
                      <Link className="menu__link" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  );
}
