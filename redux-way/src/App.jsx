import { Provider } from "react-redux";
import store from "@/redux/store";
import HooksCounter from "@/components/HooksCounter";

function App() {
  return (
    <Provider store={store}>
      <HooksCounter id={1} />
    </Provider>
  );
}

export default App;
