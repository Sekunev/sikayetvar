import React from "react";
import { Link } from "react-router-dom";
import logout from "../assest/logout.svg";
import home from "../assest/home.svg";
import course from "../assest/course-certificate.svg";
import student from "../assest/boy-student.svg";

const Dashboard = () => {
  const storedUser = sessionStorage.getItem("user");
  const user = JSON.parse(storedUser);
  return (
    <>
      {/* Sidenav */}
      <nav
        id="sidenav-1"
        className="absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-slate-200 shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
        data-te-sidenav-init=""
        data-te-sidenav-hidden="false"
        data-te-sidenav-position="absolute"
      >
        <div className="flex justify-center items-center mt-3">
          <div className="w-1 h-8  bg-[#FEAF00] "></div>
          <h1 className="font-bold ml-2 text-xl uppercase">Manage Courses</h1>
        </div>
        <div className="text-center mb-10 mt-10">
          <img
            src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
            className="mx-auto mb-4 w-24 rounded-full "
            alt="Avatar"
          />
          <h5 className="mb-2 text-xl font-medium leading-tight">{user}</h5>
          <p className="text-[#F8D442] dark:text-neutral-400">Admin</p>
        </div>

        <ul
          className="flex justify-center flex-col"
          data-te-sidenav-menu-ref=""
        >
          <li className="relative">
            <Link
              to="/home"
              className="flex justify-center w-60 h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-[#F8D442] hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref=""
            >
              <div className="flex flex-row text-gray-600">
                <img className="w-5 h-5  mr-2 " src={home} alt="homeIcon" />
                <p className="w-24 mt-0.5">Home</p>
              </div>
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/course"
              className="flex justify-center w-60 h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-[#F8D442] hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref=""
            >
              <div className=" flex flex-row  text-gray-600">
                <img className="w-5 h-5  mr-2 " src={course} alt="courseIcon" />
                <p className="w-24 mt-0.5 ">Course</p>
              </div>
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/students"
              className="flex justify-center w-60 h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-[#F8D442] hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref=""
            >
              <div className="flex flex-row  text-gray-600">
                <img
                  className="w-5 h-5  mr-2"
                  src={student}
                  alt="studentIcon"
                />
                <p className=" w-24 mt-0.5">Students</p>
              </div>
            </Link>
          </li>
          <li className="relative mt-40">
            <Link
              to="/login"
              className="flex justify-center w-60 h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-[#F8D442] hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref=""
            >
              <div className="flex flex-row  text-gray-600">
                <p className="mr-2 mt-0.5">Logout</p>
                <img className="w-5 h-5 " src={logout} alt="logoutIcon" />
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      {/* Sidenav */}
    </>
  );
};

export default Dashboard;
