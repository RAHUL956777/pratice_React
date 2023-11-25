import { useSelector } from "react-redux";
import "../styles/customModal.css";

const CustomModals = ({ id, showPopup, setShowPopup }) => {
  const allusers = useSelector((state) => state.app.users);
  const singleUser = allusers.filter((element) => element.id === id);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button onClick={() => setShowPopup(false)}>X</button>
        <h2>{singleUser[0].name}</h2>
        <h3>{singleUser[0].email}</h3>
        <h4>{singleUser[0].age}</h4>
        <p>{singleUser[0].gender}</p>
      </div>
    </div>
  );
};

export default CustomModals;
