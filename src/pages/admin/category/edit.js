import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import Category from ".";
import { getCate } from "../../../api/categoryAPI";

const EditCategoryForm = (props) => {
  const [category, setCategory] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await getCate(id);
      setCategory(data);
      reset(data);
    };
    getCategory();
  }, []);

  const onSubmit = (data) => {
    const category = {
      id: id,
      ...data,
    };
    props.onEditCate(category);
    history.push("/category");
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Sửa sản phẩm</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Tên danh mục</label>
          <input
            type="text"
            defaultValue={category.name}
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
          Sửa Danh Mục
        </button>
      </form>
    </>
  );
};
export default EditCategoryForm;
