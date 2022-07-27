import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";
import { observer } from "mobx-react";
import React from "react";
import "./App.css";
import Store from "./store";

interface Props {}
class App extends React.Component<Props> {
  store = new Store();
  render() {
    return (
      <div className="App">
        <div className="absolute text-left top-20 left-10 right-10 bottom-10">
          <CodeMirror
            value="console.log('hello world!');"
            height="200px"
            extensions={[javascript({ jsx: true })]}
            // onChange={onChange}
          />
        </div>
      </div>
    );
  }
}

export default observer(App);
