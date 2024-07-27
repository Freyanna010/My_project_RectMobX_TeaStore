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
  mainSupplementsBasket: Supplement[] = []

  constructor() {
    makeObservable(this, {
      tea: observable,
      supplements: observable,
      collectionSupplements: observable,
      mainTeaBasket: observable,
      mainSupplementsBasket: observable,
      addTeaManBasket: action,

    });
  }
  addTeaManBasket = (id: string) => {
    const teaForManBasket = this.tea.find((t) => t.id === id);
    if (this.mainTeaBasket.length < 1) {
      this.mainTeaBasket.push(teaForManBasket);
      console.log(teaForManBasket);
      console.log(this.mainTeaBasket);
    }
  };
  addSupplementManBasket = (id: string, collectionId: string) => {
    const arrSupplements = this.supplements[collectionId];
    const supplementForManBasket = arrSupplements.find((i) => i.id === id);
    const supplementOfManBasket = this.mainSupplementsBasket.every(
      (i) => i.id !== id
    );
    if (this.mainSupplementsBasket.length < 7 && supplementOfManBasket ) {
  this.mainSupplementsBasket.push(supplementForManBasket)
    // } else {
    //   collectionSupplements.forEach((i) => {
    //     i.isEnough = true;
    //   });
    //   setCollectionSupplements([...collectionSupplements]);
    // }
  };

  // setCollectionSupplements(collections: CollectionSupplements[]): void {
  //   this.collectionSupplements = collections;
  // }
}

export default new TeaStore();
