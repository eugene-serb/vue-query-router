# vue-query-router
Vue Query Router for routing by query in Vue Router

## Installing

`npm install vue-query-router`

## Usage

Step 1.
If you need to add page at "mysite.com/pathname",
add to the public folder HTML file with name "pathname"
with redirect to "mysite.com/?pathname".

Step 2.
Add your "pathname" route to the routes.

```ts
  import { RouteRecordRaw } from 'vue-router';

  const routes: Array<RouteRecordRaw> = [
    {
      path: '/pathname',
      name: 'pathname-view',
      component: () => import('@/views/PathnameView.vue'),
    },
  ];

  export default routes;
```

Step 3.
Next step will be add route to the queries.

```ts
  import IQueryRoute from 'vue-query-router/src/types/IQueryRoute';

  const queries: Array<IQueryRoute> = [
    {
      query: '/?pathname',
      path: '/pathname',
    },
  ];

  export default queries;
```

Step 4.
Open router index file, and add next code before export router
and after router init and routes, queries arrays.

```ts
  import {
    createRouter, createWebHistory,
    NavigationGuardNext, RouteLocationNormalized
  } from 'vue-router';
  import QueryRouter from '@vue-query-router';
  import routes from '@/router/assets/routes';
  import queries from '@/router/assets/queries';

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });

  router.beforeEach((
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
  ) => {
    QueryRouter.update(to, from, next, router, queries);
  });

  export default router;
```

Step 5.
You may need to add an entry to the declaration file, for example 'modules.d.ts'.

```ts
  declare module 'vue-query-router'
```
