import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userid } = useParams();

  return <div className="bg-gray-400 text-white text-3xl p-4 text-center">{userid}</div>;
};

export default User;
