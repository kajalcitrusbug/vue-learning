import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import EmployeeList from "./components/Employee/EmployeeList.vue";
import MainFriendPage from "./components/FriendContact/MainFriendPage.vue";
import Users from "./components/users/UsersList.vue";
import Teams from "./components/teams/TeamsList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import PageNotFound from "./components/nav/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/friend" },
    { path: "/friend", component: MainFriendPage },
    { path: "/employee", component: EmployeeList },
    { path: "/users", component: Users },
    { path: "/teams", component: Teams },
    { path: "/teams/:teamId", component: TeamMembers, props: true },
    { path: "/:notFound(.*)", component: PageNotFound },
  ],
  linkActiveClass: "active",
});
const app = createApp(App);
app.use(router);
app.mount("#app");
