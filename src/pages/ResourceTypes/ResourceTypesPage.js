import React from "react";
import { Link, Outlet } from "react-router-dom";

const ResourceTypesPage = () => {
  return (
    <div className="p-7 text-2xl font-semibold w-full flex-1  h-[calc(100%_-_4rem)]">
      <div className="flex justify-between items-center mb-2">
        <h1>Resource Types</h1>
        <Link
          to="new"
          className="bg-green-500 text-[1rem] px-3 py-1 rounded-lg text-white-text-100 hover:bg-green-600 transition-all ease-in duration-200"
        >
          New ResourceType
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default ResourceTypesPage;
