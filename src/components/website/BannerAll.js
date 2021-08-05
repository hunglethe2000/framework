export default function BannerAll() {
  return (
    <>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1" className=""></li>
          <li data-target="#myCarousel" data-slide-to="2" className=""></li>
          <li data-target="#myCarousel" data-slide-to="3" className=""></li>
          <li data-target="#myCarousel" data-slide-to="4" className=""></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <div className="container">
              <div className="carousel-caption">
                <h3>
                  The Biggest <span>Sale</span>
                </h3>
                <p>Special for today</p>
                <a className="hvr-outline-out button2" href="/#/products">
                  Shop Now{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="item item2">
            <div className="container">
              <div className="carousel-caption">
                <h3>
                  Summer <span>Collection</span>
                </h3>
                <p>New Arrivals On Sale</p>
                <a className="hvr-outline-out button2" href="/#/products">
                  Shop Now{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="item item3">
            <div className="container">
              <div className="carousel-caption">
                <h3>
                  The Biggest <span>Sale</span>
                </h3>
                <p>Special for today</p>
                <a className="hvr-outline-out button2" href="/#/products">
                  Shop Now{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="item item4">
            <div className="container">
              <div className="carousel-caption">
                <h3>
                  Summer <span>Collection</span>
                </h3>
                <p>New Arrivals On Sale</p>
                <a className="hvr-outline-out button2" href="/#/products">
                  Shop Now{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="item item5">
            <div className="container">
              <div className="carousel-caption">
                <h3>
                  The Biggest <span>Sale</span>
                </h3>
                <p>Special for today</p>
                <a className="hvr-outline-out button2" href="/#/products">
                  Shop Now{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          className="left carousel-control"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="banner_bottom_agile_info">
        <div className="container">
          <div className="banner_bottom_agile_info_inner_w3ls">
            <div className="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
              <figure className="effect-roxy">
                <img
                  src="images/bottom1.jpg"
                  alt=" "
                  className="img-responsive"
                />
                <figcaption>
                  <h3>
                    <span>F</span>all Ahead
                  </h3>
                  <p>New Arrivals</p>
                </figcaption>
              </figure>
            </div>
            <div className="col-md-6 wthree_banner_bottom_grid_three_left1 grid">
              <figure className="effect-roxy">
                <img
                  src="images/bottom2.jpg"
                  alt=" "
                  className="img-responsive"
                />
                <figcaption>
                  <h3>
                    <span>F</span>all Ahead
                  </h3>
                  <p>New Arrivals</p>
                </figcaption>
              </figure>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </>
  );
}
