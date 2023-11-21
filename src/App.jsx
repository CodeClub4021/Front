import Navbar from "./components/navbar/navbar.jsx";
import ManagerPanel from "./components/ManagerPanel/ManagerPanel.jsx";
function App() {
    const elem = [];
    for (let i = 0; i < 10; i++) {
        elem.push(<br/>);
    }

  return (
    <>
        <Navbar isLogin={false} />
        {elem}
        <ManagerPanel/>
    </>
  )
}

export default App
