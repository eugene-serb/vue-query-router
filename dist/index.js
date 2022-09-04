function updateRoute(to, from, next, router, routes) {
    routes.forEach((route) => {
        if (route.query === to.fullPath) {
            router.push(route.path);
        }
    });
    return next();
}
const QueryRouter = {
    update: updateRoute,
};
export default QueryRouter;
//# sourceMappingURL=index.js.map