import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Categories = (props) => {
  const { id } = useParams();
  return (
    <>
      {props.products.data &&
        props.products.data
          .filter((products) => products.category == id)
          .map((item) => (
            <div className="col-md-3 product-men">
              <div className="men-pro-item simpleCart_shelfItem">
                <div className="men-thumb-item">
                  <img src="" alt="" className="pro-image-front" />
                  <img src="" alt="" className="pro-image-back" />
                  <div className="men-cart-pro">
                    <div className="inner-men-cart-pro">
                      <Link
                        to={`/product/${item.id}`}
                        className="link-product-add-cart"
                      >
                        Chi Tiết
                      </Link>
                    </div>
                  </div>
                  <span className="product-new-top">New</span>
                </div>
                <div className="item-info-product ">
                  <h4>
                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                  </h4>
                  <div className="info-product-price">
                    <span className="item_price">{item.price} $</span>
                  </div>
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
              </div>
            </div>
          ))}
      <h1>Category</h1>
    </>
  );
};
export default Categories;
