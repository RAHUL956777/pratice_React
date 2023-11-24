import { useDispatch, useSelector } from "react-redux";
import "../styles/read.css";
import { showUser } from "../features/userDetailsSlice";
import { useEffect } from "react";

const Read = () => {
  const dispatch = useDispatch();

  const {users,loading} =  useSelector((state) => state.app)
  console.log(users);

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {users &&
        users.map((element, index) => (
          <div className="read" key={index}>
            <h2>All Data</h2>
            <div className="card">
              <h5>{element.name}</h5>
              <h6>{element.email}</h6>
              <p>{element.age}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Read;
