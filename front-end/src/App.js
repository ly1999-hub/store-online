import Menu from "./compoment/menu";
import ReactDOM from "react-dom/client";
//import Attire from "./compoment/attire";
import TagLists from "./compoment/tagLists.js";

export default function App() {
  return (
      <div className={"App"}>
          <Menu/>
          <TagLists />
      </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);