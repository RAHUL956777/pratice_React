import { useParams } from "react-router-dom";
import "../styles/create.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Update = () => {
  const { id } = useParams();
  const [updateData, setUpdateData] = useState([]);

  const { users, loading } = useSelector((state) => state.app.users);
  useEffect(() => {
    if (id) {
      const singleuser = users.filter((element) => element.id === id);
      setUpdateData(singleuser);
    }
  });

  return (
    <form
      className="form"
      // onSubmit={handleSubmit}
    >
      <h2>Fill the data</h2>
      <label htmlFor="name">
        <span>*</span>Name :{" "}
      </label>
      <input
        type="text"
        required
        name="name"
        //   onChange={geruserData}
      />

      <label htmlFor="email">
        <span>*</span>Email :{" "}
      </label>
      <input
        type="email"
        required
        name="email"
        //   onChange={geruserData}
      />

      <label htmlFor="Age">
        <span>*</span>Age :{" "}
      </label>
      <input
        type="number"
        required
        name="age"
        //   onChange={geruserData}
      />

      <div className="cehckbox">
        <input
          type="radio"
          name="gender"
          value="Male"
          // onChange={geruserData}
        />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          value="Female"
          //   onChange={geruserData}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          value="other"
          //   onChange={geruserData}
        />
        <label htmlFor="others">Others</label>
      </div>

      <button>Send</button>
    </form>
  );
};

export default Update;
