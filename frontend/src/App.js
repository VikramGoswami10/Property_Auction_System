import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom'; // Import BrowserRouter to enable routing
import { Home, Layout } from './Routes/index';
import { ScrollToTop} from './Routes/index';
import { Login ,Register ,LoginAsSeller } from './Routes/index';
function App() {
  return (
    <>
    <BrowserRouter>
        <ScrollToTop />
        <Routes>

          {/* HOME PAGE  */}
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          {/* LOGIN IN PAGE */}
          <Route
            path="/login"
            element={
              <Layout>
                <Login />
              </Layout>
            }
          />


          {/* REGISTER PAGE */}
          <Route
            path="/register"
            element={
              <Layout>
                <Register />
              </Layout>
            }
          />

          {/* Seller Login Page */}
          <Route
            path="/seller/login"
            element={
              // <PrivateRoute>
                <Layout>
                  <LoginAsSeller />
                </Layout>
              // </PrivateRoute>
            }
          />


        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
