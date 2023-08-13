import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="w-full mt-20 flex flex-col justify-center items-center gap-9">
      <h1 className="text-3xl font-semibold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-400">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
