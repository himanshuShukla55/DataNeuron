import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { FaEdit } from "react-icons/fa";
import PopUpForm from "./PopUpForm";

const ShowData = () => {
  const { users, getUsers } = useContext(DataContext);
  const [userToEdit, setUserToEdit] = useState();
  const [visibility, setVisibility] = useState(false);
  return users.length > 0 ? (
    <div>
      <table className="w-full text-center">
        <thead className="font-semibold text-4xl bg-gray-50/30 text-gray-50">
          <tr>
            <th className="p-3">S.No</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Update</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user._id}
              className={`text-xl text-gray-300 ${
                index % 2 !== 0 && " bg-slate-500/50"
              }`}
            >
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3 cursor-pointer hover:text-slate-900">
                <FaEdit
                  className="mx-auto"
                  onClick={() => {
                    setVisibility(true);
                    setUserToEdit(user);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {visibility && (
        <PopUpForm user={userToEdit} setVisibility={setVisibility} />
      )}
    </div>
  ) : (
    <div className="flex w-full h-full justify-center items-center text-4xl text-gray-100">
      No Data
    </div>
  );
};

export default ShowData;
