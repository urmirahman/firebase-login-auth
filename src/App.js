import { AuthProvider } from "./components/context/AuthContext";
import { Router } from "./components/router/Router";
function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
