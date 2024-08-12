import { ProductForUserBasket, UserBasket } from "./../../models/models";
import { action, makeObservable, observable } from "mobx";
class UserBasketStore {
  userProducts: ProductForUserBasket[] = [];
  userBasket: UserBasket[] = [];
  totalProduct: number = 0;

  constructor() {
    makeObservable(this, {
      userProducts: observable,
      totalProduct: observable,
      userBasket: observable,
      addTeaToUserBasket: action,
      addSupplementsToBasket: action,
      createUserBasket: action,
    });
  }
  addTeaToUserBasket = (mainTeaBasket: ProductForUserBasket[]) => {
    mainTeaBasket.forEach((tea) => {
      tea = { id: tea.id, name: tea.name, price: tea.price };
    });
    if (this.userProducts)
      return (this.userProducts = [...this.userProducts, ...mainTeaBasket]);
  };
  addSupplementsToBasket = (mainSupplementsBasket: ProductForUserBasket[]) => {
    mainSupplementsBasket.forEach((supplement) => {
      supplement = {
        id: supplement.id,
        name: supplement.name,
        price: supplement.price,
      };
    });
    if (this.userProducts)
      return (this.userProducts = [
        ...this.userProducts,
        ...mainSupplementsBasket,
      ]);
  };
  //TODO: подозрение на 💩-код
  createUserBasket = () => {
    this.userBasket.push(this.userProducts);
    this.userProducts = [];
  };
  //TODO:пернести логику из компонеты???
  increaseTotalProduct = (total: number) => {
    this.totalProduct = this.totalProduct + total;
  };
  decreaseTotalProduct = (total: number) => {
    this.totalProduct = this.totalProduct - total;
  };
  //T0DO: мoжет, как- то так  должен выглядеть массив для UserBasket???
  // UserBasket = [
  //   {
  //     name: ["green tea", "cherry", "mint"],
  //     id: "v1()",???
  //     price:
  //       (mainSupplementsBasket
  //         .map((supplement) => supplement.price)
  //         .reduce((acc, item) => acc + item)) +
  //       (mainTeaBasket.map((tea) => tea.price)[0])
  //   },
  // ];
}

export default new UserBasketStore();
