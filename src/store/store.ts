import {
  action,
  observable,
  reaction,
  computed,
  makeAutoObservable,
} from "mobx";

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  @observable counter = 333;
}

export let store = new Store();
