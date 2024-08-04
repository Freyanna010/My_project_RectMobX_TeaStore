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
      addSupplementMainBasket: action,
      removeTeaMainBasket: action,
      removeSupplementMainBasket: action,
      changeIsEnoughTea: action,
      changeIsEnoughSupplements: action,
    });
  }

  addTeaMainBasket = (id: string) => {
    const teaForMainBasket = this.tea.find((t) => t.id === id);
    if (this.mainTeaBasket.length < 1) {
      if (teaForMainBasket) this.mainTeaBasket.push(teaForMainBasket);
    } else {
      if (teaForMainBasket) this.mainTeaBasket[0] = teaForMainBasket;
    }
  };
  addSupplementMainBasket = (id: string, collectionId: string) => {
    const arrSupplements = this.supplements[collectionId];
    const supplementForMainBasket = arrSupplements.find((s) => s.id === id);
    const supplementOfMainBasket = this.mainSupplementsBasket.every(
      (i) => i.id !== id
    );
    if (this.mainSupplementsBasket.length < 6 && supplementOfMainBasket) {
      if (supplementForMainBasket) {
        this.mainSupplementsBasket.push(supplementForMainBasket);
        // supplementForMainBasket.isAdd = true;
      }
    }
  };
  removeTeaMainBasket = () => {
    this.mainTeaBasket.pop();
    this.tea.forEach(t => t.isEnough = false)
  };
  removeSupplementMainBasket = (id: string) => {    
    this.mainSupplementsBasket = this.mainSupplementsBasket.filter(
      (s) => s.id !== id
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
    this.collectionSupplements.forEach((i) => {
    this.mainSupplementsBasket.length >= 6
      ? (i.isEnough = true)
      : (i.isEnough = false);
    });
  };
}
export default new TeaStore();
