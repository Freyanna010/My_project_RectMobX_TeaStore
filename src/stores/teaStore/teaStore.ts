import { makeObservable, observable, action } from "mobx";
import { CollectionSupplements, Supplement, Tea } from "../../models";
import {
  initialCollectionSupplementsState,
  initialSupplementsState,
  initialTeaState,
} from "./initialStates";

class TeaStore {
  tea: Tea[] = initialTeaState;
  supplements: Record<string, Supplement[]> = initialSupplementsState;
  collectionSupplements: CollectionSupplements[] =
    initialCollectionSupplementsState;
  mainTeaBasket: Tea[] = [];
  mainSupplementsBasket: Supplement[] = [];
  teaPrice: number = 0;
  supplementPrice: number = 0;
  priceProductMainBasket: number = 0;

  constructor() {
    makeObservable(this, {
      tea: observable,
      supplements: observable,
      collectionSupplements: observable,
      mainTeaBasket: observable,
      mainSupplementsBasket: observable,
      priceProductMainBasket: observable,
      teaPrice: observable,
      supplementPrice: observable,
      addTeaToMainBasket: action,
      addSupplementToMainBasket: action,
      removeTeaFromMainBasket: action,
      removeSupplementFromMainBasket: action,
      changeIsEnoughTea: action,
      changeIsEnoughSupplements: action,
      removeTeaOnAddButton: action,
      removeSupplementsOnAddButton: action,
      getSupplementPrice: action,
      getTeaPrice: action,
      getPriceForMainBasket: action,
      sortByIncrement: action,
      sortByDecrement: action,
    });
  }

  addTeaToMainBasket = (id: string) => {
    const teaForMainBasket = this.tea.find((tea) => tea.id === id);
    if (this.mainTeaBasket.length < 1) {
      //TODO: или через спред менять массив и возвращать его копию??? можно мутировать массив здесь???
      if (teaForMainBasket) this.mainTeaBasket.push(teaForMainBasket);
    } else {
      if (teaForMainBasket) this.mainTeaBasket[0] = teaForMainBasket;
    }
  };
  addSupplementToMainBasket = (id: string, collectionId: string) => {    
    const arrSupplements = this.supplements[collectionId];
    const supplementForMainBasket = arrSupplements.find(
      (supplement) => supplement.id === id
    );
    const supplementOfMainBasket = this.mainSupplementsBasket.every(
      (i) => i.id !== id
    );
    if (this.mainSupplementsBasket.length < 6 && supplementOfMainBasket) {
      if (supplementForMainBasket) {
        this.mainSupplementsBasket.push(supplementForMainBasket);
        //TODO:переделать
        supplementForMainBasket.isAdd = true;
      }
    }
  };
  removeTeaFromMainBasket = () => {
    this.mainTeaBasket = [];
    this.tea.forEach((tea) => (tea.isEnough = false));
  };
  removeSupplementFromMainBasket = (id: string) => {
    this.mainSupplementsBasket = this.mainSupplementsBasket.filter(
      (supplement) => supplement.id !== id
    );
  };
  changeIsEnoughTea = () => {
    this.tea.forEach((t) => {
      t.id === this.mainTeaBasket[0].id
        ? (t.isEnough = true)
        : (t.isEnough = false);
    });
  };
  changeIsEnoughSupplements = () => {
    this.collectionSupplements.forEach((coll) => {
      this.mainSupplementsBasket.length >= 6
        ? (coll.isEnough = true)
        : (coll.isEnough = false);
    });
  };
  removeTeaOnAddButton = () => {
    this.mainTeaBasket = [];
  };
  // TODO:как лучше массив⬆⬇ ? 🙄
  removeSupplementsOnAddButton = () => {
    this.mainSupplementsBasket.splice(0, this.mainSupplementsBasket.length);
  };
  getTeaPrice = () => {
    this.teaPrice = this.mainTeaBasket.map((tea) => tea.price)[0]; //TODO:так можно(в массиве всегда 1 объект)?🤗
    this.getPriceForMainBasket();
  };
  getSupplementPrice = () => {
    this.supplementPrice = this.mainSupplementsBasket
      .map((supplement) => supplement.price)
      .reduce((acc, item) => acc + item);
    this.getPriceForMainBasket();
  };
  getPriceForMainBasket = () => {
    this.priceProductMainBasket = this.teaPrice + this.supplementPrice;
    this.supplementPrice = 0;
  };
  sortByIncrement = (collectionId: string) => {
    const arrSupplementsForSort = this.supplements[collectionId];
    arrSupplementsForSort.sort((a, b) => a.price - b.price);
  };
  sortByDecrement = (collectionId: string) => {
    const arrSupplementsForSort = this.supplements[collectionId];
    arrSupplementsForSort.sort((a, b) => b.price - a.price);
  };
  sortByNames = (collectionId: string) => {
    let arrSupplementsForSort = this.supplements[collectionId];
    // TODO: попытка lodash - ругается на  _.🤷🏻‍♀️
    // arrSupplementsForSort = _.sortBy(arrSupplementsForSort, "name")
    arrSupplementsForSort.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  };
}
export default new TeaStore();
