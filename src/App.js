import './App.css';
import Navbar from './components/Navbar';
import { publicRoute } from './routes/publicRoutes';
import { Route, Routes } from 'react-router-dom';

// Animate_On_Scroll(AOS)
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import PrivateRoute from './authentication/PrivateRoute';
import Services from './pages/Services';
import { privateRoutes } from './routes/privateRoutes';






function App() {

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
          publicRoute.map(({ path, Component }, index) => <Route
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
        </Route> */}
        {/* ----- pathless route -------- */}
        <Route element={<PrivateRoute />} >
          {
            privateRoutes.map(({ path, Component }, index) => <Route
              key={index}
              path={path}
              element={<Component />}>
            </Route>)
          }
        </Route>

      </Routes>
    </Navbar>
  );
}

export default App;
