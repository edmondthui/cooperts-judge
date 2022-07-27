import { action, observable } from "mobx";
import { error, loading, ready, State, waiting } from "./Types";

export const assertNever = (x: never) => {
  throw new Error(`Unexpected object: ${x}`);
};

class Store {
  @observable
  state: State = waiting();

  @action
  load = () => {
    switch (this.state.kind) {
      case "waiting":
        this.state = loading(this.state);
        break;
      case "ready":
      case "loading":
      case "error":
        break;
      default:
        assertNever(this.state);
    }
  };

  @action
  ready = (data: any) => {
    switch (this.state.kind) {
      case "ready":
      case "error":
      case "waiting":
        break;
      case "loading":
        this.state = ready(this.state);
        break;
      default:
        assertNever(this.state);
    }
  };

  @action
  error = (err: any) => {
    this.state = error(
      `Request failed due to '${err.kind}'. Please try again later.`
    );
  };
}

export default Store;
