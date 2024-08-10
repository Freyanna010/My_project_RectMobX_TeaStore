import { ProductForUserBasket } from "./../../models/models";
import { action, makeObservable, observable } from "mobx";
class UserBasketStore {
  userBasket: ProductForUserBasket[] = [];
  array: any[] = [];
  price: number = 0;

  constructor() {
    makeObservable(this, {
      userBasket: observable,
      array: observable,
      addTeaToUserBasket: action,
      addSupplementsToBasket: action,
      createArray: action,
    });
  }
  addTeaToUserBasket = (mainTeaBasket: ProductForUserBasket[]) => {
    mainTeaBasket.forEach((tea) => {
      tea = { id: tea.id, name: tea.name, price: tea.price };
    });
    if (this.userBasket)
      return (this.userBasket = [...this.userBasket, ...mainTeaBasket]);
  };

  addSupplementsToBasket = (mainSupplementsBasket: ProductForUserBasket[]) => {
    mainSupplementsBasket.forEach((supplement) => {
      supplement = {
        id: supplement.id,
        name: supplement.name,
        price: supplement.price,
      };
    });
    if (this.userBasket)
      return (this.userBasket = [...this.userBasket, ...mainSupplementsBasket]);
  };

  // //TODO:переименовать
  createArray = () => {
    this.array.push(this.userBasket);
    this.userBasket.slice(0, this.userBasket.length);
  };
}

export default new UserBasketStore();
