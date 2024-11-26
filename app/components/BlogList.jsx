import React, { useEffect, useState } from "react";
import { blog_data } from "../Assets/assets";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  useEffect(() => {
    console.log(menu);
  }, [menu]);

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={`py-1 px-4 rounded-sm ${
            menu === "All" ? "bg-black text-white" : "bg-gray-200 text-black"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={`py-1 px-4 rounded-sm ${
            menu === "Technology"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={`py-1 px-4 rounded-sm ${
            menu === "Startup"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={`py-1 px-4 rounded-sm ${
            menu === "Lifestyle"
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Lifestyle
        </button>
      </div>

      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blog_data
          .filter((item) => (menu === "All" ? true : item.category === menu))
          .map((item, index) => {
            return (
              <BlogItem
                key={index}
                id={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
