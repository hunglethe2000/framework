import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const AddProductForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const categories = props;

  const onSubmit = (data) => {
    const product = {
      id: Math.random().toString(5).substring(2),
      ...data,
    };
    props.onAdd(product);
    history.push("/product");
  };

  return (
    <>
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Thêm sản phẩm</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Ten san pham</label>
          <input
            type="text"
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
            className="form-control"
            {...register("price")}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Danh muc</label>
          <select className="form-control" {...register("category")}>
            {categories.map((cate) => (
              <option value={cate.id}>{cate.name}</option>
            ))}
          </select>
        </div>
        <button className="btn btn-primary" type="submit">
          Them San Pham
        </button>
      </form>
    </>
  );
};
export default AddProductForm;
