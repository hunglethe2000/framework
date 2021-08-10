import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { signin } from "../../api/authAPI";
import { authenticate, isAuthenticated } from "../../auth";

const Signin = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = async (user) => {
    try {
      const { data } = await signin(user);
      authenticate(data);
      setSuccess(true);
      setError("");
    } catch (error) {
      setError(error.response.data);
    }
  };

  const redirectUser = () => {
    if (success) {
      const id = isAuthenticated().user.id;
      if (id == 2) {
        console.log("neu", id);
        // return <Redirect to="/admin/dashboard" />;
        history.push("/admin/product");
      } else {
        console.log("nguoc lai", id);
        // return <Redirect to="/admin/rooms" />;
        history.push("/");
      }
    }
  };

  return (
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      {redirectUser()}
      <h2>Đăng Nhập</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="d-block mt-2 text-danger">
            Email không được để trống
          </span>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="d-block mt-2 text-danger">
            Password không được để trống
          </span>
        )}
      </div>
      <button className="btn btn-primary">Đăng Nhập</button>
    </form>
  );
};

export default Signin;
