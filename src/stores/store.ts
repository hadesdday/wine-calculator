import { defineStore } from 'pinia';

export const useWineStore = defineStore('wineData', {
  state: () => ({
    NORMAL_WINE_PRICE_FOR_DRINKER: 17000,
    NORMAL_WINE_PRICE_FOR_SELLER: 16000,
    STRONG_WINE_PRICE_FOR_DRINKER: 34000,
    STRONG_WINE_PRICE_FOR_SELLER: 34000,
    GLUTINOUS_WINE_PRICE_FOR_DRINKER: 40000,
    GLUTINOUS_WINE_PRICE_FOR_SELLER: 40000,
  }),
  getters: {},
  actions: {
    setData(data: number, type: number) {
      switch (type) {
        case 0:
          this.NORMAL_WINE_PRICE_FOR_DRINKER = data;
          break;
        case 1:
          this.NORMAL_WINE_PRICE_FOR_SELLER = data;
          break;
        case 2:
          this.STRONG_WINE_PRICE_FOR_DRINKER = data;
          break;
        case 3:
          this.GLUTINOUS_WINE_PRICE_FOR_DRINKER = data;
          break;
      }
    },
  },
});
