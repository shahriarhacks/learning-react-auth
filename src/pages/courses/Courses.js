import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleCourse from "../categories/SingleCourse";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <>
      <h3 className="text-3xl my-4">Popular Courses</h3>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        {courses.map((course) => (
          <SingleCourse key={course?._id} course={course} />
        ))}
      </div>
    </>
  );
};

export default Courses;
