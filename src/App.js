import "./App.css";
import Button from "./components/Button";

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
  return (
    <div>
      <div>
        <Button value="Моя кнопка" />
        {/* {buttons.map((value) => {
          return (
            <Button value={value} />
          );
        }
        )} */}
      </div>
      <header>
        <h1>Привет, мир!</h1>

      </header>
    </div>
  );
}
export default App;