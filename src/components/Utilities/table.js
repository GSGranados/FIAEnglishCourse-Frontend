import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";
const Table = (props) => {

  const {columns,records,editUrl,deleteUrl} = props;
  return (
    <div className="overflow-auto rounded-lg shadow">
      <table className="w-full text-base mt-2">
        <TableHeader columns={columns}/>
        <TableBody rows={records} editUrl={editUrl} deleteUrl={deleteUrl}/>
      </table>
    </div>
  );
};

export default Table;
