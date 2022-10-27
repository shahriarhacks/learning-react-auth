import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Category from "../categories/Category";

const SideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://server-side-three.vercel.app/course-category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h1 className="text-4xl my-7">Course Category</h1>
      <div className="bg-cyan-100 p-5 h-[100vh]">
        {categories.map((category) => (
          <Category key={category?.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default SideNav;
