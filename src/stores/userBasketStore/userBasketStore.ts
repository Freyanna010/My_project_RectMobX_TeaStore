import { ProductForUserBasket } from "./../../models/models";
import { Supplement, Tea } from "../../models";
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
      createArray: action
      // getPrice: action,
    });
  }
  addTeaToUserBasket = (mainTeaBasket: ProductForUserBasket[]) => {
    mainTeaBasket.forEach((tea) => {
      tea = { id: tea.id, name: tea.name, price: tea.price };
    });
    if (this.userBasket)
      this.userBasket = [...this.userBasket, ...mainTeaBasket];

    // TODO: делала так - ts ругается: Type 'void[]' is not assignable to type 'ProductForUserBasket[] - почему void, если это map?😠
    // const teaForUserBasket: ProductForUserBasket[] = mainTeaBasket.map(
    //   (tea) => {
    //     tea = { id: tea.id, name: tea.name, price: tea.price };
    //   }
    // );
    // if (this.userBasket)
    //   this.userBasket = [...this.userBasket, ...teaForUserBasket];
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
      this.userBasket = [...this.userBasket, ...mainSupplementsBasket];
  };
  //  TODO:🤷🏻‍♀️
  createArray = () =>
  {
  // debugger
  this.array.push(this.userBasket)
  }

//TODO:пока не нужно
  // getPrice = () => {
  // this.price = this.userBasket.map(basket => basket.price).reduce((acc,item) => (acc+item))
  // }
}



export default new UserBasketStore();
