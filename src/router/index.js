import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import axios from "axios";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/addDriver",
    name: "AddDriver",

    component: () =>
        import(/* webpackChunkName: "addDriver" */ "../views/AddDriver.vue")
  },
  {
    path: "/:driver",
    name: "driver",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "DriverDetails" */ "../views/DriverDetails.vue"
      ),
    children: [
      {
        path: ":team",
        name: "driverType",
        props: true,
        component: () =>
          import(/* webpackChunkName: "DriverType" */ "../views/DriverType.vue")
      }
    ],
    beforeEnter: (to, form, next) => {
      let exists=[];
      axios
          .get("http://localhost:8000/all")
          .then(res => (exists = (res.data.find( el => el.Surname === to.params.driver))))
          ;

      if (exists) {
        next();
      } else {
        next({ name: "notFound" });
      }
    }
  },
  {
    path: "*",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
