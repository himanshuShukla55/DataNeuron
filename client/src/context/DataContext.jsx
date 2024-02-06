import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const res = await axios.get("/api/users");
      setUsers(res.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <DataContext.Provider value={{ users, getUsers }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
