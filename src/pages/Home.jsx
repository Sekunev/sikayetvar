import React from "react";
import Dashboard from "../components/Dashboard";
import user from "../assest/user.svg";
import course from "../assest/pink_course.svg";
import student from "../assest/blue-student.svg";
import business from "../assest/business.svg";

const Home = () => {
  return (
    <div>
      <Dashboard />
      <div className="ml-64">
        <div className="flex p-10">
          <div
            className="w-40 h-40 p-5 mr-3 bg-[#f1faff] rounded-lg"
            style={{ width: "255px", height: "155px" }}
          >
            <div className="flex flex-col justify-center text-gray-600">
              <img
                className="w-12 h-12  ml-2 color-white "
                src={student}
                alt="studentIcon"
              />
              <p className="w-24 mt-0.5 ">Students</p>
            </div>
            <div className="flex justify-end  text-gray-600">
              <p className="font-bold text-2xl mt-0.5 ml-2">255</p>
            </div>
          </div>
          <div
            className="w-40 h-40 p-5 mr-3 bg-[#fff6fd] rounded-lg"
            style={{ width: "255px", height: "155px" }}
          >
            <div className="flex flex-col justify-center text-gray-600">
              <img
                className="w-12 h-12  ml-2 color-white "
                src={course}
                alt="studentIcon"
              />
              <p className="w-24 mt-0.5 ml-2">Course</p>
            </div>
            <div className="flex justify-end  text-gray-600">
              <p className="font-bold text-2xl mt-0.5 ml-2">13</p>
            </div>
          </div>
          <div
            className="w-40 h-40 p-5 mr-3 bg-[#fffdf1] rounded-lg"
            style={{ width: "255px", height: "155px" }}
          >
            <div className="flex flex-col justify-center text-gray-600">
              <img
                className="w-12 h-12  ml-2 color-white "
                src={business}
                alt="studentIcon"
              />
              <p className="w-24 mt-0.5">Payments</p>
            </div>
            <div className="flex justify-end  text-gray-600">
              <p className="font-bold text-2xl mt-0.5 ml-2">556.000 &#x20BA;</p>
            </div>
          </div>
          <div
            className="w-40 h-40 p-5 mr-3 bg-[#fde6a5] rounded-lg"
            style={{ width: "255px", height: "155px" }}
          >
            <div className="flex flex-col justify-center text-gray-600">
              <img
                className="w-12 h-12  ml-2 color-white "
                src={user}
                alt="studentIcon"
              />
              <p className="w-24 mt-0.5 ml-2">Users</p>
            </div>
            <div className="flex justify-end  text-gray-600">
              <p className="font-bold text-2xl mt-0.5 ml-2">3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
