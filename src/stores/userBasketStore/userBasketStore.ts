import { v1 } from "uuid";
import { Product, Supplement, Tea } from "./../../models/models";
import { action, makeObservable, observable } from "mobx";
class UserBasketStore {
  userBasket: Product[] = [];
  totalProduct: number = 0;
  constructor() {
    makeObservable(this, {
      totalProduct: observable,
      userBasket: observable,
      addTeaAndSupplementToUserBasket: action,
    });
  }
  addTeaAndSupplementToUserBasket = (mainTeaBasket: Tea[], mainSupplementsBasket: Supplement[]) =>{
    const teaNameForUserBasket = mainTeaBasket.map(tea => tea.name)
    const supplementsNamesForUserBasket = mainSupplementsBasket.map(supplement => supplement.name)
    const productForUserBasket = {
      id: v1(),
       name: [...teaNameForUserBasket, ...supplementsNamesForUserBasket],
      price:
        (mainSupplementsBasket
          .map((supplement) => supplement.price)
          .reduce((acc, item) => acc + item)) +
        (mainTeaBasket.map((tea) => tea.price)[0])
    }
    this.userBasket.push(productForUserBasket)
  }
}

export default new UserBasketStore();
