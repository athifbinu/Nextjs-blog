import { assets, blog_data } from "@/app/Assets/assets";
import React, { useEffect, useState } from "react";
import Image from "next/image"; // Import the Image component

const Page = ({ params }) => {
  const [data, SetData] = useState(null);

  const fetchBlogdata = () => {
    // Iterate over the blog_data array
    for (let i = 0; i < blog_data.length; i++) {
      if (params.id === blog_data[i].id) {
        SetData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogdata();
  }, []);

  return (
    <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-center items-center">
        <Image
          src={assets.logo}
          width={180}
          alt="Logo"
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-3 border border-black shadow-[-7px_7px_0px_#000000]">
          Get started <Image src={assets.arrow} alt="" />
        </button>
      </div>
      <div className="text-center my-24">
        <h1>{data.title}</h1>
      </div>
    </div>
  );
};

export default Page;
