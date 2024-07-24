import "./App.css";
import { StyledMenu } from "./components/Menu";
import { data } from "./data";

function App() {
  return (
    <>
      <StyledMenu menu={data} />
    </>
  );
}

export default App;
