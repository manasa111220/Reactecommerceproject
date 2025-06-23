const Login = () => {
  return (
    <div className="min-h-screen flex flex-row p-8">
      <div className="w-1/2 bg-gray-100 p-10">
        <img src="./view-circular-arrangement-with-make-up-flowers.jpg" alt="Decorative" />
      </div>
      <form className="w-1/2 bg-white p-10 flex flex-col items-center justify-center">
        <h1 className="text-xs font-bold text-center mt-10">Login Page</h1>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border border-gray-200 rounded mt-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border border-gray-200 rounded mt-4"
        />
        <div>
          <button type="submit" className="!bg-green-600 text-black px-4 py-2 rounded mt-4">Submit</button>
          <p>New user? Register <a href="/register" className="text-blue-500">here</a></p>
        </div>
      </form>
    </div>
  );
}
export default Login;