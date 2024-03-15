import Button from "../Elements/Button";
import { useLogin } from "../../hooks/useLogin";
import { useEffect, useState,useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("password");
  window.location.href = "/login";
};
const Navbar = () => {
  const username = useLogin();
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state)=>state.cart.data);
  useEffect(()=>{
    const sum=cart.reduce((acc,item)=>{
        return acc+item.qty;
    },0);
    setTotalCart(sum);
  },[cart]);
  return (
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
      {username}
      <Button classname="ml-5 bg-black" onClick={handleLogout}>
        Logout
      </Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5">
      {totalCart}
      </div>
      <Button
          className="bg-black px-10 mx-5 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? (
            <SunIcon className="w-3 h-3" />
          ) : (
            <MoonIcon className="w-3 h-3" />
          )}
        </Button>
        
      
    </div>
  );
};
export default Navbar;
