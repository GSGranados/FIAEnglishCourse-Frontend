import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
const Table = () => {
  const permissionsObtained = {
    columns: ['N°', 'Permission Name'],
    records: [
        ["001","PLATFORM_ADMIN"],
        ["002","PLATFORM_TUTOR"],
        ["003","PLATFORM_STUDENT"]
    ],
  };
  const {columns,records} = permissionsObtained
  return (
    <div className="overflow-auto rounded-lg shadow">
      <table className="w-full text-base mt-2">
        <TableHeader columns={columns}/>
        <TableBody rows={records}/>
      </table>
    </div>
  );
};

export default Table;
