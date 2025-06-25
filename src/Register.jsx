import { Button } from "@radix-ui/themes";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { enqueueSnackbar } from "notistack";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const navigate=useNavigate();
  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    setForm((prev) => ({ ...prev, [event.target.email]: event.target.value }));
    setForm((prev) => ({ ...prev, [event.target.Password]: event.target.value }));
    
    setForm((prev) => ({ ...prev, [event.target.confirmPassword]: event.target.value }));
    

    setError(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (
      !form.username ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("All fields are required");
      enqueueSnackbar("All fields are required", { variant: "error" });
      return;
    }
    const filteredUsers = allUsers.filter((user) => user.email === form.email);
    if (filteredUsers.length > 0) {
      setError("User already exists with this email use another email");
      enqueueSnackbar("user already exists with this email use another email", {
        variant: "error",
      });
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters long");
      enqueueSnackbar("Password must be at least 6 characters long", {
        variant: "error",
      });
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      enqueueSnackbar("passwords do not match", { variant: "error" });
      return;
    }

    allUsers.push(form);
    localStorage.setItem("users", JSON.stringify(allUsers));
    setForm({ name: "", email: "", password: "", confirmPassword: "" });
    setError(null);
    enqueueSnackbar("Registration successful", { variant: "success" });
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-row p-8">
      <div className="w-1/2 bg-grey-50 p-5 flex items-center justify-center">
        <img
          src="/light-burgundy-makeup-beauty-products-834a3we0h33kpszx.jpg"
          alt="Decorative"
        />
      </div>
      <form
        className="w-1/2 bg-white p-10 flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <h1 className="text-xs font-bold text-center mt-10">Register Page</h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border border-gray-200 rounded mt-4"
          name="username"
          
          value={form.username}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-200 rounded mt-4"
          name="email"
          value={form.email}
          
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-200 rounded mt-4"
          name="password"
          value={form.password}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border border-gray-200 rounded mt-4"
          name="confirmPassword"
          value={form.confirmPassword}
         
        />
        <div>
          {/* <Button color="indigo" variant="classic">Submit</Button> */}
          {/* <Button variant="classic">Edit profile</Button> */}
          <button
            type="submit"
            className="!bg-orange-600 text-green px-4 py-2 rounded mt-4"
          >
            Register
          </button>
          {error && <p className="text-red-600 text-sm">*{error}</p>}
          <p>
            Already a Registered user?Login<Link to={"/login"}>here</Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
