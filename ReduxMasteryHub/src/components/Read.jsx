import { useDispatch, useSelector } from "react-redux";
import "../styles/read.css";
import { showUser } from "../features/userDetailsSlice";
import { useEffect, useState } from "react";
import CustomModals from "./CustomModals";
import { Link } from "react-router-dom";
import { deleteUser } from "../features/userDetailsSlice";

const Read = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const { users, loading, searchData } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="wrapper">
      {showPopup && (
        <CustomModals
          id={id}
          setShowPopup={setShowPopup}
          showPopup={showPopup}
        />
      )}
      <h2>All Data</h2>
      {users &&
        users
          .filter((element) => {
            if (searchData.length === 0) {
              return element;
            } else {
              return element.name
                .toLowerCase()
                .includes(searchData.toLowerCase());
            }
          })
          .map((element, index) => (
            <div className="read" key={index}>
              <div className="card">
                <h5>{element.name}</h5>
                <h6>{element.email}</h6>
                <p>{element.gender}</p>
              </div>
              <div className="links">
                <button onClick={() => [setId(element.id), setShowPopup(true)]}>
                  View
                </button>
                <button>
                  <Link to={`/edit/${element.id}`}>Edit</Link>
                </button>
                <button>
                  <Link onClick={() => dispatch(deleteUser(element.id))}>
                    Delete
                  </Link>
                </button>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Read;
