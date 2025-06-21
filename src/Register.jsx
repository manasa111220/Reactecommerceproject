const Register = () => {
  return (
    <div className="register">
      <h1 className="text-3xl font-bold text-center mt-10">Register Page</h1>
      <form className="max-w-md mt-8">
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border border-gray-200 rounded mt-4"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border border-gray-200 rounded mt-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-200 rounded mt-4"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border border-gray-200 rounded mt-4"
        />
        <button
          type="submit"
          className="w-full  text-blue p-2 rounded mt-4 ">
        
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
