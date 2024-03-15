/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import { Link } from "react-router-dom";
const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center  min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-mediun text-slate-500">
          Welcome, Please enter your details
        </p>
        {children}
        <Navigation type={type}/>
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don't have an account? {" "}
        <Link to="/register" className="font-bold text-blue-600">
          Sign Up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Have an account? {" "}
        <Link to="/login" className="font-bold text-blue-600">
          Sign In
        </Link>
      </p>
    );
  }
};
export default AuthLayout;
