import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";
import "./App.css";

function App() {
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

export default App;
