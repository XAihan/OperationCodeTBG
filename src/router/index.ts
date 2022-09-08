import { createRouter, createWebHistory } from "vue-router";
import GameViewLeader from "../views/gameView/GameViewLeader.vue";
import GameViewPlayer from "../views/gameView/GameViewPlayer.vue";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/leader",
      name: "leader",
      component: GameViewLeader,
    },
    {
      path: "/player",
      name: "player",
      component: GameViewPlayer,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
});

export default router;
