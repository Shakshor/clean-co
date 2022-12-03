import './App.css';
import Navbar from './components/Navbar';
import { publicRoute } from './routes/publicRoutes';
import { Route, Routes } from 'react-router-dom';
// import { useEffect } from 'react';
// import { themeChange } from 'theme-change';

// AOS 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';






function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  /* useEffect(() => {
    themeChange(false)
    // false parameter is required for react project
  }, []); */

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

      </Routes>
    </Navbar>
  );
}

export default App;
