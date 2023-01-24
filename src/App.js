import './App.css';
import Navbar from './components/Navbar';
import { publicRoutes } from './routes/publicRoutes';
import { Route, Routes } from 'react-router-dom';
// Animate_On_Scroll(AOS)
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import PrivateRoute from './authentication/PrivateRoute';
import Services from './pages/Services';
import { privateRoutes } from './routes/privateRoutes';
import About from './pages/About';
import RequireAdmin from './authentication/RequireAdmin';
import Dashboard from './pages/Dashboard/Dashboard';
import AddAdmin from './pages/Dashboard/AddAdmin';
import AddService from './pages/Dashboard/AddService';



function App() {

  // animate on scroll library
  // as a sideEffect
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <Navbar>
      <Routes>
        {/*-------------- Normal Style -----------------*/}
        {/* <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/services' element={<Services></Services>} ></Route>
        <Route path='/contact' element={<Contact></Contact>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route> */}


        {/* ---------- map routes ----------------- */}

        {
          publicRoutes.map(({ path, Component }, index) => <Route
            path={path}
            element={<Component />}
            key={index}
          ></Route>)
        }

        {/* <Route path='/services'
          element={
            <PrivateRoute>
              <Services></Services>
            </PrivateRoute>
          }>
        </Route>

        <Route path='/about'
          element={
            <PrivateRoute>
              <About></About>
            </PrivateRoute>
          }>
        </Route> */}

        {/* ----- third-party authentication route-------- */}
        <Route element={<PrivateRoute />} >
          {privateRoutes.map(({ path, Component }, index) =>
            <Route
              path={path}
              element={<Component key={index} />}
              key={index}
            ></Route>)}
        </Route>

        {/* --------- admin authentication route */}
        <Route element={<RequireAdmin />}>
          <Route path='/dashboard' element={<Dashboard />} >
            <Route path='add-service' element={<AddService />} ></Route>
            <Route path='add-admin' element={<AddAdmin />} ></Route>
          </Route>
        </Route>

      </Routes>
    </Navbar>
  );
}

export default App;
