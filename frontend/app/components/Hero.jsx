import Link from "next/link";
import { useSelector } from "react-redux";

const Hero = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="flex flex-col bg-slate-200 justify-between w-3/5 border border-slate-500 rounded-md sm:h-[250px] h-[300px] ml-auto mr-auto relative top-20">
      <div className="title Font-bold text-slate-800 text-center mt-4">
        <h1 className="font-bold sm:text-4xl">MERN Authentication</h1>
      </div>
      <div className="content w-5/6 m-auto ">
        <p className="text-center sm:mt-5 mt:2 text-slate-600 justify-center">
          This is a boilerplate for MERN authe nticatin that stores a JWT in an
          HTTP-only Cookie. It also uses Redux Toolkit and The React Bootstrap
          Library
        </p>
      </div>
      <div className="flex   justify-between m-auto">
        {userInfo ? (
          <>
            <h2 className="flex m-auto">
              Logged in by:{" "}
              <h2 className="capitalize text-slate-800 font-bold  ml-1">
                {userInfo.name}
              </h2>
            </h2>
          </>
        ) : (
          <div className="justify-between flex">
            <div className="mr-5">
              <Link href="/auth/login">
                <button className="signin bg-blue-500 border rounded-md p-2 text-white">
                  Sign In
                </button>
              </Link>
            </div>
            <div>
              <Link href="/auth/register">
                <button className="signin bg-slate-600 border rounded-md p-2 text-white">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
