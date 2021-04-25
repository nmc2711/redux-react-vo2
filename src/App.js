import { Provider } from "react-redux";
import store from "./redux/store";
// cm
import Subscribers from "./components/Subscribers";
import Display from "./components/Display";
import Views from "./components/Views";
import Comments from "./components/Comments";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Subscribers />
        <Views />
        <Display />
        <Comments />
      </div>
    </Provider>
  );
}

export default App;
