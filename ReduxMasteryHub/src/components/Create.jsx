import { useState } from "react";
import "../styles/create.css";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailsSlice";

const Create = () => {
  const [users, setUsers] = useState({});
  const dispacth = useDispatch();

  const geruserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispacth(createUser(users));
    console.log(users);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">
        <span>*</span>Name :{" "}
      </label>
      <input type="text" required name="name" onChange={geruserData} />

      <label htmlFor="email">
        <span>*</span>Email :{" "}
      </label>
      <input type="email" required name="email" onChange={geruserData} />

      <label htmlFor="Age">
        <span>*</span>Age :{" "}
      </label>
      <input type="number" required name="age" onChange={geruserData} />

      <div className="cehckbox">
        <input type="radio" name="gender" value="Male" onChange={geruserData} />
        <label htmlFor="male">Male</label>
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={geruserData}
        />
        <label htmlFor="female">Female</label>
        <input
          type="radio"
          name="gender"
          value="other"
          onChange={geruserData}
        />
        <label htmlFor="others">Others</label>
      </div>

      <button>Send</button>
    </form>
  );
};

export default Create;
