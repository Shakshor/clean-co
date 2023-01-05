import Services from "../pages/Services";
import About from "../pages/About";

export const privateRoutes = [
    { path: '/services', name: 'Services', Component: Services },
    { path: '/about', name: 'About', Component: About }
]