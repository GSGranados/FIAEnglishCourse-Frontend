import React from 'react'
import {Outlet } from 'react-router-dom';
const UsersPage = () => {
  return (
    <div className="p-7 text-2xl font-semibold w-full flex-1  h-[calc(100%_-_4rem)]">
    <Outlet/>
  </div>
)
}

export default UsersPage;
