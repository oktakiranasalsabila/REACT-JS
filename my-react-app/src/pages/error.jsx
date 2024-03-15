import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  // eslint-disable-next-line no-unused-vars
  const error = useRouteError();
  return (
    <div className="flex justify-center  min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-5">Maaf halaman tidak di temukan</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};
export default ErrorPage;
