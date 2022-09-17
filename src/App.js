
import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import { useUserContext } from "./context/userContext";

const App = () => {
  const { user, loading, error } = useUserContext();

  return (
    <div className="App">
      {error && <span className="error">{"Хэрэглэгчийн мэдээлэл олдсонгүй"}</span>}
      {loading ? <h2 style={{ fontSize: '22px', fontWeight: '400'}}>Түр хүлээнэ үү...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
    </div>
  );
}

export default App;
