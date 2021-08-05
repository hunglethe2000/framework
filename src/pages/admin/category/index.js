import { Link } from "react-router-dom";

export default function Category(props) {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Quản lý Danh Mục</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link
            to="/category/add"
            type="button"
            className="btn btn-sm btn-outline-primary"
          >
            Thêm danh mục
          </Link>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên danh mục</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.categories.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td width="150">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => props.onRemoveCate(item.id)}
                  >
                    Xóa
                  </button>
                  <Link
                    to={`/category/${item.id}/edit`}
                    className="btn btn-primary ms-1 btn-sm"
                  >
                    Sửa
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
