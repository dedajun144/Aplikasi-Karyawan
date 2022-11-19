import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser.js";
import { UserList } from "./components/UserList.js";
import EditUser from "./components/EditUser.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="add" element={<AddUser />} />
        <Route path="edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
