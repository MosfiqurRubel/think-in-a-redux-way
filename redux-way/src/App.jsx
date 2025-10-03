import { Provider } from "react-redux";
import store from "@/redux/store";
import HooksCounter from "@/components/HooksCounter";
import DynamicHooksCounter from "@/components/DynamicHooksCounter";

function App() {
  return (
    <Provider store={store}>
      <HooksCounter />
      <DynamicHooksCounter />
    </Provider>
  );
}

export default App;
