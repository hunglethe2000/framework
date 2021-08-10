import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../../api/productAPI";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const Detail = (props) => {
  const [product, setProduct] = useState({});
  const { reset } = useForm();
  const { id } = useParams();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await get(id);
      setProduct(data);
      reset(data);
    };
    getProduct();
  });
  return (
    <>
      <div className="row">
        <div className="page-head_agile_info_w3l">
          <div className="container">
            <h3>
              Detail <span>Page </span>
            </h3>
            <div className="services-breadcrumb">
              <div className="agile_inner_breadcrumb">
                <ul className="w3_short">
                  <li>
                    <Link to="">Home</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-bootom-w3-agileits">
          <div className="container">
            <div className="col-md-4 single-right-left ">
              <div className="grid images_3_of_2">
                <div className="flexslider">
                  <ul className="slides">
                    <li data-thumb="">
                      <div className="thumb-image">
                        <img
                          src=""
                          data-imagezoom="true"
                          className="img-responsive"
                        />
                      </div>
                    </li>
                  </ul>
                  <div className="clearfix"></div>
                  <div className="responsive_tabs_agileits">
                    <div id="horizontalTab">
                      <ul className="resp-tabs-list">
                        <li>Description</li>
                      </ul>
                      <div className="resp-tabs-container">
                        <div className="tab1">
                          <div className="single_page_agile_its_w3ls">
                            <h6>Lorem ipsum dolor sit amet</h6>
                            <p>zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 single-right-left simpleCart_shelfItem">
              <h3>{product.name}</h3>
              <p>
                <span className="item_price">Giá: {product.price} $ </span>
              </p>
              <div className="rating1">
                <span className="starRating">
                  <input id="rating5" type="radio" name="rating" value="5" />
                  <label for="rating5">5</label>
                  <input id="rating4" type="radio" name="rating" value="4" />
                  <label for="rating4">4</label>
                  <input
                    id="rating3"
                    type="radio"
                    name="rating"
                    value="3"
                    checked=""
                  />
                  <label for="rating3">3</label>
                  <input id="rating2" type="radio" name="rating" value="2" />
                  <label for="rating2">2</label>
                  <input id="rating1" type="radio" name="rating" value="1" />
                  <label for="rating1">1</label>
                </span>
              </div>
              <div className="occasional">
                <div className="occasion-cart">
                  <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out button2">
                    <form action="#" method="post">
                      <fieldset>
                        <input
                          type="submit"
                          name="submit"
                          value="Add to cart"
                          className="button"
                        />
                      </fieldset>
                    </form>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;
