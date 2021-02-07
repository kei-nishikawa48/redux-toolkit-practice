import './App.css';
import Form from "./components/Form"
import List from "components/List"
import { Provider } from "react-redux"
import store from "redux-toolkit/store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>TODO APP</h1>
        <Form />
        <List />
      </div>
    </Provider>
  );
}

export default App;
