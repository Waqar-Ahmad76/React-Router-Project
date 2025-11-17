import React from "react";
import { useParams } from "react-router";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-blue-950 text-white text-3xl rounded-2xl px-4">
      User: {userid}
    </div>
  );
}

export default User;
