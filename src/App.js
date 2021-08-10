import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { add, getAll, remove, update } from "./api/productAPI";
import { addCate, getCateAll, removeCate, updateCate } from "./api/categoryAPI";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await getAll();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const { data } = await getCateAll();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
  }, []);

  const onHandleRemove = (id) => {
    try {
      remove(id); // xoa data tren api
      const newProduct = products.filter((item) => item.id != id);
      setProducts(newProduct);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleRemoveCate = (id) => {
    try {
      removeCate(id); // xoa data tren api
      const newCategory = categories.filter((item) => item.id != id);
      setCategories(newCategory);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleAdd = async (item) => {
    try {
      const { data } = await add(item);
      setProducts([...products, data]);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleAddCate = async (item) => {
    try {
      const { data } = await addCate(item);
      setCategories([...categories, data]);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleEdit = async (item) => {
    try {
      const { data } = await update(item);
      const newProducts = products.map((product) =>
        product.id == data.id ? data : product
      );
      setProducts(newProducts);
    } catch (error) {
      console.log(error);
    }
  };
  const onHandleEditCate = async (item) => {
    try {
      const { data } = await updateCate(item);
      const newCategory = categories.map((category) =>
        category.id == data.id ? data : category
      );
      setCategories(newCategory);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <BrowserRouter>
      <Routes
        products={products}
        categories={categories}
        onRemove={onHandleRemove}
        onAdd={onHandleAdd}
        onEdit={onHandleEdit}
        onRemoveCate={onHandleRemoveCate}
        onAddCate={onHandleAddCate}
        onEditCate={onHandleEditCate}
      />
    </BrowserRouter>
  );
}
