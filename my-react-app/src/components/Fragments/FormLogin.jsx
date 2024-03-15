import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { login } from "../../services/auth.service";
import { useState } from "react";
const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    //   localStorage.setItem('email',event.target.email.value);
    //   localStorage.setItem('password',event.target.password.value);
    //  window.location.href="/products";
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res);
        window.location.href="/products";
      } else {
        setLoginFailed(res.response.data);
        // console.log(res.response.data);
      }
    });
  };
  return (
    <form onSubmit={handleLogin}>
      
      <InputForm
        label="Username"
        type="text"
        placeholder="example@gmail.com"
        name="username"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="******"
        name="password"
      />

      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
      {loginFailed &&<p className="text-red-500 text-center mt-5">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
