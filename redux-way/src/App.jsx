import { Provider } from "react-redux";
import store from "@/redux/store";
import HooksCounter from "@/components/HooksCounter";
import DynamicHooksCounter from "@/components/DynamicHooksCounter";
import VariableCounter from "@/components/VariableCounter";

function App() {
  return (
    <Provider store={store}>
      <HooksCounter />
      <DynamicHooksCounter />
      <VariableCounter />
      <VariableCounter dynamic />
    </Provider>
  );
}

export default App;
