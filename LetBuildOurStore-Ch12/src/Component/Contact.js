import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Contact = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      Contact for any query -
      <Outlet />
      <input
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />
    </div>
  );
};

export default Contact;
