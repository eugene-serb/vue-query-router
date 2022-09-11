# vue-query-router
Vue Query Router for routing by query in Vue Router

## Installing

`npm install vue-query-router`

## About

Context.
You are building a single page application (SPA) and you need to add a page
to Vue.js and do routing for a direct connection without server side
rendering (SSR), rehydration, Nuxt.js or other heavy tools and other words.

Objective.
We will add the about page on our example.com project.

## Usage with TypeScript

Step 1.
Add an HTML file named «about.html» to the public folder, redirected to "/? about".

```html
  <!DOCTYPE html>
  <html lang="en-us" dir="ltr" xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <title>Example – About</title>
      <meta charset="UTF-8" />
      <meta http-equiv="refresh" content="0; URL=https://example.com/?about" />
    </head>
  </html>
```

Step 2.
Add your «about» route to the routes array.

```ts
  import { RouteRecordRaw } from 'vue-router';

  const routes: Array<RouteRecordRaw> = [
    {
      path: '/about',
      name: 'about-view',
      component: () => import('@/views/AboutView.vue'),
    },
  ];

  export default routes;
```

Step 3.
Next step will be add route to the queries array.

```ts
  import IQueryRoute from 'vue-query-router/src/types/IQueryRoute';

  const queries: Array<IQueryRoute> = [
    {
      query: '/?about',
      path: '/about',
    },
  ];

  export default queries;
```

Step 4.
Open router index file, and add call QueryRouter.update 
after router init and before export router .

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
  declare module 'vue-query-router';
```

## Types
There are three types. IQueryRoute for all queries array.

```ts
  import IQueryRoute from 'vue-query-router/src/types/IQueryRoute';
```
