import Header from "./component/Header/Header";
import Sidebar from "./component/Sidebar/Sidebar";
import Home from "./pages/Home";
import './index.css'

function App() {
  return (
    <div className="grid grid-cols-custom">
      <header className="bg-slate-400 col-start-2">
        <Header />
      </header>
      <Sidebar />
      <main className="bg-slate-400">
        <Home />
      </main>
    </div>
  );
}

export default App;
