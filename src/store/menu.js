import { defineStore } from "pinia";
import { ref } from "vue";
export const useMenuStore = defineStore("menu", () => {
  const menu = ref([
    {
      title: "Преимущества Tele2",
      to: "/advantages",
    },
    {
      title: "Тарифы",
      to: "/tariffs",
    },
    {
      title: "Акции и спецпредложения",
      to: "/special-offers",
    },
    {
      title: "Промотариф Tele2",
      to: "/promotional-tariff",
    },
    {
      title: "Технология eSIM",
      to: "/eSim",
    },
    {
      title: "Подключение нового абонента",
      to: "/new-subscriber",
    },
  ]);

  return { menu };
});
