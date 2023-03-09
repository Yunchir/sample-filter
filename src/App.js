// import { Button } from "bootstrap";
import { useEffect, useState } from "react";
import "./App.css";
import AllProduct from "./components/AllProduct";
import LoadMore from "./components/LoadMore";
import FilterByCategory from "./components/FilterByCategory";
import FilterByBrand from "./components/FilterByBrand";
import AddProduct from "./components/AddProduct";

let btnsName = [
  {
    name: "All product",
    value: "All product",
    component: <AllProduct />,
  },
  {
    name: "load more",
    value: "load more",
    component: <LoadMore />,
  },
  {
    name: "filter by category",
    value: "filter by category",
    component: <FilterByCategory />,
  },
  {
    name: "filter by brand",
    value: "filter by brand",
    component: <FilterByBrand />,
  },
  {
    name: "Add product",
    value: "Add product",
    component: <AddProduct />,
  },
];

function App() {
  const [current, setCurrent] = useState(btnsName[0]);
  useEffect(() => {
    if (localStorage.getItem("btnVal")) {
      setCurrent(
        btnsName.find((btn) => btn.value === localStorage.getItem("btnVal"))
      );
    }
  }, []);

  function currentStateHandler(btn) {
    setCurrent(btn);
    localStorage.setItem("btnVal", btn.value);
  }

  return (
    <div className="App">
      <div className="header-button">
        {btnsName.map((btn, index) => (
          <button
            key={index}
            onClick={() => currentStateHandler(btn)}
            className={
              current.value === btn.value ? "activeBtn" : "inactiveBtn"
            }
          >
            {btn.name}
          </button>
        ))}
      </div>
      <div>{current.component}</div>
    </div>
  );
}

export default App;
