import { href } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full fixed mb-auto top-0 left-0 flex items-center justify-between bg-gray-800 px-9 py-1 text-white">
      <img
        className="h-20 rounded-full"
        src="/shopping-cart-logo-design-cart-icon-ecommerce-logo-vector (1).jpg"
        alt="Cart Logo"
      />
      <ul className="flex items-center justify-between space-x-4">
        <li className="hover:text:orange-500 cursor-pointer">
          <a href="Home"></a>
        </li>

        <li className="hover:text:orange-500 cursor-pointer">
          <a href="Register">Register</a>
        </li>

        <li className="hover:text:orange-500 cursor-pointer">
          <a href="Login">Login</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
