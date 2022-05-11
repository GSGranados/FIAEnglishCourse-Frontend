import { Sidebar } from "./components/Utilities/sidebar";
import  {Navbar}  from "./components/Utilities/navbar";
import Router from "./components/Routes/Router";
function App() {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full h-full">
        <Navbar />
        <Router />
      </div>
    </div>
  );
}

export default App;
