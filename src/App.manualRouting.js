import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Like from "./components/Like";
import Time from "./components/Time";
import Input from "./Input";

const buttons = [
  { value: 'Кнопка1', onClick: () => console.log(1), id: 1 },
  { value: 'Кнопка2', onClick: () => console.log(2), id: 2 },
  { value: 'Кнопка3', onClick: () => console.log(3), id: 3 },
  { value: 'Кнопка4', onClick: () => console.log(4), id: 4 },
]
const renderBtn = ({ value, onClick, id }) => (
  <Button value={value} onClickHandler={onClick} key={id} />
)

function App() {
  const href = window.location.href.replace("http://localhost:3000", "")
  console.log("HREF", href);
  const [currrentPath, setCurrrentPath] = useState("href");
  const clickTopMenuHandler = (ev) => {
    ev.preventDefault();
    let path = ev.target.getAttribute("data-route");
    console.log(`нажали для перехода ${path}`);
    const state = {};
    const title = "";
    window.history.pushState(state, title, path);
    setCurrrentPath(path);
  };
  let title = null;
  let content = null;

  switch (currrentPath) {
    case "/":
      title = "Каталог товаров";
      content = <div>Тут может быть перечень товаров</div>;
      break;
    case "/basket":
      title = "Корзина";
      content = <h1>Корзина</h1>;
      break;
  }


  return (
    <div>
      <div>
        <nav className="App-nav">
          <ul>
            <li>
              <a href="#" onClick={clickTopMenuHandler} data-route={"/"}>
                Главная
              </a> </li>
            <li>
              <a href="#" onClick={clickTopMenuHandler} data-route={"/basket"}>
                Корзина
              </a> </li>
            <li>
              <a href="#" onClick={clickTopMenuHandler} data-route={"/about"}>
                О нас
              </a> </li>
            <li>
              <a href="#" onClick={clickTopMenuHandler} data-route={"/react-router"}>
                О рутинге
              </a> </li>
          </ul> </nav>
      </div>
      <div>
        {content}
      </div>
    </div>
  );
}
export default App;