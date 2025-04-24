import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="app p-4 lg:py-20 lg:px-40 w-max-[1440px] w-min-[375px]">
      <Header />
      <Main />
    </div>
  );
}

export default App;
