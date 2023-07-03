import { useState } from "react";
import "./App.css";
import AppRouter from "./router/AppRouter";
import { UsersContext } from "./contex/UsersContext";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      <div className="App">
        <AppRouter />
      </div>
    </UsersContext.Provider>
  );
}

export default App;
