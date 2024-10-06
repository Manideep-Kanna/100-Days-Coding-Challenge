import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
function App() {
  const isLoggedIn = Boolean(localStorage.getItem('token'))
  console.log(isLoggedIn)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/signIn" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
