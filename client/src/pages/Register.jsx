import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../features/auth/authSlice";
import Loader from "../components/Loader";

const Register = () => {
  const { user, isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords Not Match");
    }

    dispatch(registerUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }

    if (isError && message) {
      toast.error(message);
    }
  }, [isError, message, user]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-center font-bold text-xl">Register Here</h1>

      <div className="p-5 border my-5">
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={name}
            onChange={handleChange}
            type="text"
            placeholder="Enter Name"
            className="my-2 border border-gray-400 p-2 w-full disabled:bg-sky-200 text-sm"
          />
          <input
            name="email"
            value={email}
            onChange={handleChange}
            type="email"
            placeholder="Enter Email"
            className="my-2 border border-gray-400 p-2 w-full disabled:bg-sky-200 text-sm"
          />

          <input
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
            className="my-2 border border-gray-400 p-2 w-full disabled:bg-sky-200 text-sm"
            placeholder="Enter Password"
          />
          <input
            name="password2"
            value={password2}
            onChange={handleChange}
            type="password"
            className="my-2 border border-gray-400 p-2 w-full disabled:bg-sky-200 text-sm"
            placeholder="Confirm Password"
          />
          <button className="bg-black w-full my-2 text-white py-2 px-4 font-bold hover:bg-green-700 hover:cursor-pointer duration-150 ">
            Register Here
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
