import { Route, Router, Switch } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard";
import Product from "./pages/admin/product";
import Category from "./pages/admin/category";
import AddProductForm from "./pages/admin/product/add";
import EditProductForm from "./pages/admin/product/edit";
import AddCategoryForm from "./pages/admin/category/add";
import EditCategoryForm from "./pages/admin/category/edit";
import NotFound from "./pages/404";
import Signup from "./pages/website/signup";
import Signin from "./pages/website/signin";
import AdminLayout from "./layouts/adminLayout";
import PrivateAdmin from "./auth/privateAdmin";
import WebsiteLayout from "./layouts/websiteLayout";
import Home from "./pages/website/home";
import Contact from "./pages/website/contact";
import Detail from "./pages/website/detail";
import Categories from "./pages/website/category";

const Routes = (props) => {
  return (
    <Switch>
      <PrivateAdmin exact path="/admin/:path?/:path?/:path?">
        <AdminLayout>
          <Switch>
            <PrivateAdmin exact path="/admin">
              <Dashboard {...props} />
            </PrivateAdmin>
            <PrivateAdmin exact path="/admin/product">
              <Product {...props} />
            </PrivateAdmin>
            <PrivateAdmin exact path="/admin/product/add">
              <AddProductForm {...props} />
            </PrivateAdmin>
            <PrivateAdmin exact path="/admin/product/:id/edit">
              <EditProductForm {...props} />
            </PrivateAdmin>
            <PrivateAdmin exact path="/admin/category">
              <Category {...props} />
            </PrivateAdmin>
            <PrivateAdmin exact path="/admin/category/add">
              <AddCategoryForm {...props} />
            </PrivateAdmin>
            <PrivateAdmin exact path="/admin/category/:id/edit">
              <EditCategoryForm {...props} />
            </PrivateAdmin>
          </Switch>
        </AdminLayout>
      </PrivateAdmin>

      <Route>
        <WebsiteLayout {...props}>
          <Switch>
            <Route exact path="/">
              <Home {...props} />
            </Route>
            <Route exact path="/product/:id">
              <Detail {...props} />
            </Route>
            <Route exact path="/category/:id">
              <Categories {...props} />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/signin">
              <Signin />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </WebsiteLayout>
      </Route>
    </Switch>
  );
};
export default Routes;
