import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const AddCategoryForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    const category = {
      id: Math.random().toString(5).substring(2),
      ...data,
    };
    props.onAddCate(category);
    history.push("/category");
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Thêm danh mục</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên danh mục</label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="d-block mt-2 text-denger">
              Thiếu tên danh mục nè bạn
            </span>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Thêm Danh Mục
        </button>
      </form>
    </>
  );
};
export default AddCategoryForm;
