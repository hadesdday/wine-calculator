import { defineStore } from 'pinia';
import { type WineData } from 'src/model';

export const useWineStore = defineStore('wineData', {
  state: () =>
    localStorage.getItem('wineData')
      ? JSON.parse(localStorage.getItem('wineData') as string)
      : {
          normalWinePriceForDrinker: 17000,
          normalWinePriceForSeller: 16000,
          strongWinePriceForDrinker: 34000,
          strongWinePriceForSeller: 34000,
          glutinousWinePriceForDrinker: 40000,
          glutinousWinePriceForSeller: 40000,
        },
  actions: {
    setData(data: number, type: number) {
      switch (type) {
        case 0:
          this.normalWinePriceForDrinker = data;
          break;
        case 1:
          this.normalWinePriceForSeller = data;
          break;
        case 2:
          this.strongWinePriceForDrinker = data;
          break;
        case 3:
          this.strongWinePriceForSeller = data;
          break;
        case 4:
          this.glutinousWinePriceForDrinker = data;
          break;
        case 5:
          this.glutinousWinePriceForSeller = data;
          break;
      }
      localStorage.setItem('wineData', JSON.stringify(this.$state));
    },
    patchData(data: WineData) {
      this.normalWinePriceForDrinker = data.normalWinePriceForDrinker;
      this.normalWinePriceForSeller = data.normalWinePriceForSeller;
      this.strongWinePriceForDrinker = data.strongWinePriceForDrinker;
      this.strongWinePriceForSeller = data.strongWinePriceForSeller;
      this.glutinousWinePriceForDrinker = data.glutinousWinePriceForDrinker;
      this.glutinousWinePriceForSeller = data.glutinousWinePriceForSeller;
      localStorage.setItem('wineData', JSON.stringify(data));
    },
  },
});
