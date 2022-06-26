const express = require('express');
const itemRoute = require('./item.route');

const router = express.Router();

const defaultRoutes = [
    {
        path: '/items',
        route: itemRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});


module.exports = router;
