import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CourseList from "./pages/CourseList";
import CourseDetail from "./pages/CourseDetail";
import UsersManagement from "./pages/UsersManagement";

// Layout
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";

// Guard
import AdminRoute from "./guards/AdminRoute";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Cách 1 */}
        {/* <Route
          exact
          path="/"
          render={(props) => (
            <MainLayout {...props}>
              <HomePage {...props} />
            </MainLayout>
          )}
        />
        <Route
          exact
          path="/login"
          render={(props) => (
            <AuthLayout {...props}>
              <Login {...props} />
            </AuthLayout>
          )}
        />
        <Route
          exact
          path="/register"
          render={(props) => (
            <AuthLayout {...props}>
              <Register {...props} />
            </AuthLayout>
          )}
        /> */}

        {/* Cách 2: Route lồng nhau */}
        <Route exact path={["/", "/courses/:category", "/course/:courseId"]}>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/courses/:category" component={CourseList} />
              <Route path="/course/:courseId" component={CourseDetail} />
            </Switch>
          </MainLayout>
        </Route>

        <Route exact path={["/login", "/register"]}>
          <AuthLayout>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </AuthLayout>
        </Route>

        <Route exact path={["/admin/users"]}>
          <AdminLayout>
            <Switch>
              {/* <Route path="/admin/users" component={UsersManagement} /> */}
              {/* private router */}
              {/* <Route
                path="/admin/users"
                render={(props) => {
                  const maLoaiNguoiDung = "HV";

                  if (maLoaiNguoiDung !== "GV") {
                    return <Redirect to="/" />;
                  }

                  return <UsersManagement />;
                }}
              /> */}
              <AdminRoute path="/admin/users" component={UsersManagement} />
            </Switch>
          </AdminLayout>
        </Route>

        {/* 2 cách sử lý khi url không hợp lệ */}
        <Redirect to="/" />
        {/* <Route component={PageNotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
