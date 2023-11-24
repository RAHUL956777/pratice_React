import { useDispatch, useSelector } from "react-redux";
import "../styles/read.css";
import { showUser } from "../features/userDetailsSlice";
import { useEffect } from "react";

const Read = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector((state) => state.app);
  console.log(users);

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="wrapper">
      <h2>All Data</h2>
      {users &&
        users.map((element, index) => (
          <div className="read" key={index}>
            <div className="card">
              <h5>{element.name}</h5>
              <h6>{element.email}</h6>
              <p>{element.age}</p>
            </div>
            <div className="links">
              <button><a href="">View</a></button>
              <button><a href="">Edit</a></button>
              <button><a href="">Delete</a></button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Read;
