import { makeObservable, observable } from "mobx";
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

  constructor() {
    makeObservable(this, {
      tea: observable,
      supplements: observable,
      collectionSupplements: observable,
    });
  }

  setCollectionSupplements(collections: CollectionSupplements[]): void {
    this.collectionSupplements = collections;
  }
}

export default new TeaStore();
