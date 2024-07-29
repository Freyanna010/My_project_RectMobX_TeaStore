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

  constructor() {
    makeObservable(this, {
      tea: observable,
      supplements: observable,
      collectionSupplements: observable,
      mainTeaBasket: observable,
      mainSupplementsBasket: observable,
      addTeaMainBasket: action,
    });
  }

  addTeaMainBasket = (id: string) => {
    const teaForMainBasket = this.tea.find((t) => t.id === id);
    if (this.mainTeaBasket.length < 1) {
      if (teaForMainBasket) this.mainTeaBasket.push(teaForMainBasket);
    }
  };
  addSupplementMainBasket = (id: string, collectionId: string) => {
    const arrSupplements = this.supplements[collectionId];
    const supplementForMainBasket = arrSupplements.find((i) => i.id === id);
    const supplementOfMainBasket = this.mainSupplementsBasket.every(
      (i) => i.id !== id
    );
    if (this.mainSupplementsBasket.length < 7 && supplementOfMainBasket) {
      if (supplementForMainBasket)
        this.mainSupplementsBasket.push(supplementForMainBasket);
    } else {
      // TODO:remake opacity effect
      this.collectionSupplements.forEach((i) => {
        i.isEnough = true;
      });
    }
  };
 
}

export default new TeaStore();
