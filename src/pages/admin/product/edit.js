import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { get } from "../../../api/productAPI";

const EditProductForm = (props) => {
  const [product, setProduct] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await get(id);
      setProduct(data);
      reset(data);
    };
    getProduct();
  }, []);
  const { categories } = props;

  const onSubmit = (data) => {
    const product = {
      id: id,
      ...data,
    };
    props.onEdit(product);
    history.push("/product");
  };

  return (
    <>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Sửa sản phẩm</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Ten san pham</label>
          <input
            type="text"
            defaultValue={product.name}
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="d-block mt-2 text-denger">
              Thieu ten san pham kia ban oi
            </span>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Gia san pham</label>
          <input
            type="number"
            defaultValue={product.price}
            className="form-control"
            {...register("price")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Danh muc</label>
          <select
            className="form-control"
            {...register("category")}
            defaultValue={product.catagory}
          >
            {categories.map((cate) => {
              if (cate.id == product.cate) {
                return (
                  <option selected value={cate.id}>
                    {cate.name}
                  </option>
                );
              }
              return <option value={cate.id}>{cate.name}</option>;
            })}
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Sửa San Pham
        </button>
      </form>
    </>
  );
};
export default EditProductForm;
