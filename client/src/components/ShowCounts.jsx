import React, { useContext } from "react";
import { CountContext } from "../context/CountContext";

const ShowCounts = () => {
  const { addCount, updateCount } = useContext(CountContext);
  return (
    <div className="flex flex-col text-white justify-center items-center p-5 gap-8">
      <h1 className="text-4xl font-semibold">Statistics</h1>
      <div className="flex w-full justify-center items-center">
        <div className="text-center border-r border-white p-10">
          <h1 className="font-semi-bold text-9xl">{addCount}</h1>
          <p>User(s) Added</p>
        </div>
        <div className="text-center p-10">
          <h1 className="font-semi-bold text-9xl">{updateCount}</h1>
          <p>User(s) updated</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCounts;
