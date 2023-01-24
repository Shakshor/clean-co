import Home from '../pages/Home/Home';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import Register from '../components/Register';
// import About from '../pages/About';
// import Services from '../pages/Services';



export const publicRoutes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/contact', name: 'Contact', Component: Contact },
    { path: '/login', name: 'Login', Component: Login },
    { path: '/register', name: 'Register', Component: Register },
    // { path: '/about', name: 'About', Component: About },
    // { path: '/services', name: 'Services', Component: Services },
]