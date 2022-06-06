import Router from "./components/Routes/Router";
import { AuthProvider } from "./components/Utilities/auth";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
