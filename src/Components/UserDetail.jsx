import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fackUserData } from "../pi/api";
import { addUser, removeUser, clearAllUser } from "../redux/store/slices/userSlice";

const UserDetail = () => {
  const dispatch = useDispatch();
  const names = useSelector((state) => state.users);

  const addNewUser = (name) => {
    dispatch(addUser(name));
  };

  const removeEle = (i) => {
    dispatch(removeUser(i));
  };

  const removeAll = () => {
    dispatch(clearAllUser());
  };

  return (
    <>
      <div className="userDetail d-flex justify-content-center flex-column align-items-center">
        <div className="mainUsers d-flex justify-content-center w-100 flex-wrap">
          {names.map((ele, i) => {
            return (
              <div
                key={i}
                className="user mt-2 w-15 border text-center p-4 mx-3 my-4"
              >
                <h3>{ele}</h3>
                <button onClick={() => removeEle(i)} className="py-1 px-5 btn btn btn-danger">
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => addNewUser(fackUserData())}
          className="mt-5 text-center py-1 px-5 btn btn-primary"
        >
          Add User
        </button>
        <button
          onClick={() => removeAll(fackUserData())}
          className="mt-1 text-center py-1 px-5 btn btn-danger"
        >
          Remove All User
        </button>
      </div>
    </>
  );
};

export default UserDetail;
