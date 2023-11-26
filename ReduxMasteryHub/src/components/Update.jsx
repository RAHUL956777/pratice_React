import { Navigate, useParams } from "react-router-dom";
import "../styles/create.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { updateUser } from "../features/userDetailsSlice";

const Update = () => {
  const { id } = useParams();
  const [updateData, setUpdateData] = useState([]);
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.app);
  useEffect(() => {
    if (id) {
      const singleuser = users.filter((element) => element.id === id);
      setUpdateData(singleuser[0]);
    } else {
      console.warn("id is not getting properly");
    }
  }, [id, users]);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(updateData));
    console.log("updated sucessfully");
    Navigate("/read");
  };

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <form className="form" onSubmit={handleUpdate}>
          <h2>Fill the data</h2>
          <label htmlFor="name">
            <span>*</span>Name :{" "}
          </label>
          <input
            type="text"
            required
            name="name"
            value={updateData ? updateData.name : "something went wrong"}
            onChange={newData}
          />

          <label htmlFor="email">
            <span>*</span>Email :{" "}
          </label>
          <input
            type="email"
            required
            name="email"
            value={updateData ? updateData.email : "something went wrong"}
            onChange={newData}
          />

          <label htmlFor="Age">
            <span>*</span>Age :{" "}
          </label>
          <input
            type="number"
            required
            name="age"
            value={updateData ? updateData.age : "something went wrong"}
            onChange={newData}
          />

          <div className="cehckbox">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={
                updateData
                  ? updateData.gender === "Male"
                  : "something went wrong"
              }
              onChange={newData}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={
                updateData
                  ? updateData.gender === "Female"
                  : "something went wrong"
              }
              onChange={newData}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={
                updateData
                  ? updateData.gender === "others"
                  : "something went wrong"
              }
              onChange={newData}
            />
            <label htmlFor="others">Others</label>
          </div>

          <button>Send</button>
        </form>
      )}
    </div>
  );
};

export default Update;
