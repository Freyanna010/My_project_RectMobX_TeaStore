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
      removeCardProductForUserBasket: action,
      removeAllCardProduct: action,
    });
  }
  //TODO:вот тут userBasket собираю
  addTeaAndSupplementToUserBasket = (
    mainTeaBasket: Tea[],
    mainSupplementsBasket: Supplement[] | []
  ) => {
    const teaNameForUserBasket = mainTeaBasket.map((tea) => tea.name);
    const supplementsNamesForUserBasket = mainSupplementsBasket.map(
      (supplement) => supplement.name
    );
    const productForUserBasket = {
      id: v1(),
      name: [...teaNameForUserBasket, ...supplementsNamesForUserBasket],
      price:
        mainTeaBasket.map((tea) => tea.price)[0] +
        mainSupplementsBasket
          .map((supplement) => supplement.price)
          .reduce((acc, item) => acc + item),
    };
    this.userBasket.push(productForUserBasket);
  };
  removeCardProductForUserBasket = (id: string) =>
    (this.userBasket = this.userBasket.filter((basket) => basket.id !== id));
  removeAllCardProduct = () =>
    this.userBasket.splice(0, this.userBasket.length);
}

export default new UserBasketStore();
