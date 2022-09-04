# vue-query-router
Vue Query Router for routing by query in Vue Router

## Installing

`npm install vue-query-router`

## Usage
If you need to add page at "mysite.com/pathname",
add to the public folder HTML file with name "pathname"
with redirect to "mysite.com/?pathname".

Add your "pathname" route to the routes (typeof Array<RouteRecordRaw>)

  ```js
const routes = [
  {
    path: '/pathname',
    name: 'pathname-view',
    component: () => import('@/views/PathView.vue'),
  },
];
```

Next step will be add route to the queries (typeof Array<IQueryRoute>).

```js
const queries = [
  {
    query: '/?pathname',
    path: '/pathname',
  },
];
```

Open router index file, and add next code before export router
and after router init and routes, queries arrays.

```js
import VueQueryRouter from 'vue-query-router';

// ...

router.beforeEach((to, from, next) => {
  VueQueryRouter.update(to, from, next, router, queries);
});
```

## TypeScript

```js
import IQueryRoute from 'vue-query-router/src/types/IQueryRoute';
```
