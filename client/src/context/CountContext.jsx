import { createContext, useContext, useEffect, useState } from "react";
import { DataContext } from "./DataContext";

export const CountContext = createContext();

const CountProvider = ({ children }) => {
  const { users } = useContext(DataContext);
  const [addCount, setAddCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);

  useEffect(() => {
    setAddCount(users.length);
  }, [users]);

  const handleAddCountChange = () => {
    setAddCount(addCount + 1);
  };
  const handleUpdateCountChange = () => {
    setUpdateCount(updateCount + 1);
  };

  return (
    <CountContext.Provider
      value={{
        addCount,
        updateCount,
        handleAddCountChange,
        handleUpdateCountChange,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};
export default CountProvider;
