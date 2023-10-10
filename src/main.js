import { createApp } from "vue";
import { createPinia } from "pinia";
import {createRouter, createWebHashHistory} from "vue-router";
import App from "./App.vue";
import AdvantagesTele from "./components/AdvantagesTele.vue";
import OurTariffs from "./components/OurTariffs.vue";
import SpecialOffers from "./components/SpecialOffers.vue";
import PromotionalTariff from "./components/PromotionalTariff.vue";
import TechnologyEsim from "./components/TechnologyEsim.vue";
import NewSubscriber from "./components/NewSubscriber.vue";

const pinia = createPinia();
const app = createApp(App);

const routes = [
  { path: '/advantages', component: AdvantagesTele},
  { path: '/tariffs', component: OurTariffs },
  { path: '/special-offers', component: SpecialOffers},
  { path: '/promotional-tariff', component: PromotionalTariff},
  { path: '/eSim', component: TechnologyEsim},
  { path: '/new-subscriber', component: NewSubscriber },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

app.use(pinia);
app.use(router);
app.mount("#app");
