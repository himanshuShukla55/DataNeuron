import { createContext, useState } from "react";

export const CountContext = createContext();

const CountProvider = ({ children }) => {
  const [addCount, setAddCount] = useState(
    JSON.parse(localStorage.getItem("addCount")) || 0
  );
  const [updateCount, setUpdateCount] = useState(
    JSON.parse(localStorage.getItem("updateCount")) || 0
  );
  const handleAddCountChange = () => {
    localStorage.setItem("addCount", JSON.stringify(addCount + 1));
    setAddCount(addCount + 1);
  };
  const handleUpdateCountChange = () => {
    localStorage.setItem("updateCount", JSON.stringify(updateCount + 1));
    setAddCount(updateCount + 1);
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
