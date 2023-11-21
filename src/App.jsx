import Navbar from "./components/navbar/navbar.jsx";
function App() {
  const elem = [];
  for (let i = 0; i < 100; i++) {
    elem.push(<br />);
  }

  return (
    <>
      <Navbar isLogin={false} />
      {elem}
    </>
  );
}

export default App;
