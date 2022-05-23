import React from 'react'
import { Outlet } from 'react-router-dom';
const UsersPage = () => {
  return (
    <div className="p-7 text-2xl font-semibold w-full flex-1  h-[calc(100%_-_4rem)]">
    <div className="flex justify-between items-center mb-2">
    <h1>Users</h1> 
    </div>
    <Outlet/>
  </div>
)
}

export default UsersPage;
