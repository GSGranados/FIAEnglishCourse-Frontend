import React from "react";

const TableHeader = (props) => {
    const formattedColumns = props.columns.map((column,index) =>{
        return (
            <th key={index} className={` ${index === 0? 'w-20': ''} p-2 text-md font-semibold tracking-wide text-left`}>
            {column}
          </th>
        )
    })
  return (
    <thead className="bg-red-300 border-b-2 text-white-text-100 border-red-400">
      <tr>
        {formattedColumns}
        <th className="w-[10rem] p-2 text-md font-semibold tracking-wide text-left">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
