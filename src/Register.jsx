import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="min-h-screen flex flex-row p-8">
      <div className="w-1/2 bg-gray-100 p-10">
      <img   src="./view-circular-arrangement-with-make-up-flowers.jpg"/>
      </div>
      <form className="w-1/2 bg-white p-10 flex flex-col items-center justify-center">
        <h1 className="text-xs font-bold text-center mt-10">Register Page</h1>
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
        <div>
        <Button className="bg-color-green"variant="classic">Submit</Button>
        <p>Already a Registered user?Login<Link to={"/login"}>here</Link> </p>
        </div>
      </form>
    </div>
  );
};

export default Register;


