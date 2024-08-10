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
  price: number = 0;
  totalProduct: number = 0;
  totalAll: number = 0;

  constructor() {
    makeObservable(this, {
      tea: observable,
      supplements: observable,
      collectionSupplements: observable,
      mainTeaBasket: observable,
      mainSupplementsBasket: observable,
      price: observable,
      teaPrice: observable,
      supplementPrice: observable,
      totalProduct: observable,
      totalAll: observable,
      addTeaMainBasket: action,
      addSupplementMainBasket: action,
      removeTeaMainBasket: action,
      removeSupplementMainBasket: action,
      changeIsEnoughTea: action,
      changeIsEnoughSupplements: action,
      deleteTeaMainBasket: action,
      deleteSupplementsMainBasket: action,
      getSupplementPrice: action,
      getTeaPrice: action,
     getPriceForMainBasket: action,
      sortByIncrement: action,
      sortByDecrement: action,
      increaseTotalProduct: action,
      decreaseTotalProduct: action
    });
  }

  addTeaMainBasket = (id: string) => {
    const teaForMainBasket = this.tea.find((tea) => tea.id === id);
    if (this.mainTeaBasket.length < 1) {
      //TODO: или через спред менять массив и возвращать его копию??? можно мутировать массив здесь???
      if (teaForMainBasket) this.mainTeaBasket.push(teaForMainBasket);
    } else {
      if (teaForMainBasket) this.mainTeaBasket[0] = teaForMainBasket;
    }
  };
  addSupplementMainBasket = (id: string, collectionId: string) => {
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
  removeTeaMainBasket = () => {
    this.mainTeaBasket = [];
    this.tea.forEach((tea) => (tea.isEnough = false));
  };
  removeSupplementMainBasket = (id: string) => {
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
  deleteTeaMainBasket = () => {
    this.mainTeaBasket = [];
  };
  // TODO:как лучше? ⬆⬇
  deleteSupplementsMainBasket = () => {
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
    this.price = this.teaPrice + this.supplementPrice;
    this.supplementPrice = 0
  };

  sortByIncrement = (collectionId: string) => {
    const arrSupplementsForSort = this.supplements[collectionId];
    arrSupplementsForSort.sort((a, b) => a.price - b.price);
  };
  sortByDecrement = (collectionId: string) => {
    const arrSupplementsForSort = this.supplements[collectionId];
    arrSupplementsForSort.sort((a, b) => b.price - a.price);
  };
  //TODO: перенести
  increaseTotalProduct = () => {
    this.totalProduct = this.totalProduct + this.price;
  };
  decreaseTotalProduct = () => {
    this.totalProduct = this.totalProduct - this.price;
  };
}
export default new TeaStore();
