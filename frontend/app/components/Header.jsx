"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { BiLogIn } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import { logout } from "../slices/authSlice";
import { useLogoutMutation } from "../slices/userApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();

  const dispatch = useDispatch();
  const router = useRouter();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      router.push("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className="bg-slate-800 w-screen text-white flex justify-between z-10">
      <Link href="/">
        <div className="p-2 ml-4">
          <h1 className="font-bold text-lg">Mern Auth</h1>
        </div>
      </Link>

      {userInfo ? (
        <>
          <div style={{ display: "block" }} className="border-none">
            <Dropdown>
              <div className="menu flex w-[175px] justify-between mr-10">
                <Dropdown.Toggle
                  variant="success"
                  className="flex border-none mt-[10px] bg-transparent "
                >
                  <div className="signin flex cursor-pointer mt-[-6px]">
                    <Image
                      src={"/profile.jpg"}
                      width={100}
                      height={100}
                      alt="profile image"
                      className="h-7 w-7 rounded"
                    />
                    <h3 className="ml-2 capitalize ">{userInfo.name}</h3>
                  </div>
                </Dropdown.Toggle>
              </div>
              <Dropdown.Menu className="bg-slate-800 text-white">
                <Dropdown.Item
                  href="#"
                  className="text-white hover:bg-slate-800 hover:underline uppercase"
                >
                  Home Page
                </Dropdown.Item>
                <Dropdown.Item
                  href="#"
                  className="text-white hover:bg-slate-800 hover:underline uppercase"
                >
                  Settings
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={logoutHandler}
                  className="text-white hover:bg-slate-800 hover:underline uppercase"
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </>
      ) : (
        <div className="menu flex w-[175px] justify-between mr-10 mt-3">
          <Link href="/auth/login">
            <div className="signin flex">
              <BiLogIn />
              <h3 className="ml-1 mt-[-2px]">Signin</h3>
            </div>
          </Link>
          <Link href="/auth/register">
            <div className="signin flex">
              <BiLogIn />
              <h3 className="ml-1 mt-[-2px]">Register</h3>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
