import HomePage from '../pages/home.f7.html';
import LeftPage1 from '../pages/left-page-1.f7.html';
import DynamicRoutePage from '../pages/dynamic-route.f7.html';
import NotFoundPage from '../pages/404.f7.html';

var routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/left-page-1/',
        component: LeftPage1,
    },
    {
        path: '/dynamic-route/blog/:blogId/post/:postId/',
        component: DynamicRoutePage,
    },
    {
        path: '(.*)',
        component: NotFoundPage,
    },
];

export default routes;