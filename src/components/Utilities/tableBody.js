import React from "react";

const TableBody = (props) => {
     const formattedRecords = props.rows.map((record, index)=>{
        return (
            <tr key={index} className={`${Math.abs(index%2)=== 1? "bg-gray-text-100": "bg-white-text-100"}`}>
            <td className="whitespace-nowrap p-3 text-md text-gray-text-700">
                {record[0]}             
            </td>
            <td className="whitespace-nowrap p-3 text-md text-gray-text-700">
              {record[1]}
            </td>
            <td className="whitespace-nowrap p-3 text-md text-gray-text-700">
              <p className="flex justify-start items-center gap-5">
                <a href="/" className="font-semibold no-underline">
                  <span className="p-1.5 text-sm font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg">
                    Edit
                  </span>
                </a>
                <a href="/" className="font-semibold no-underline">
                  <span className="p-1.5 text-sm font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg">
                    Delete
                  </span>
                </a>
              </p>
            </td>
          </tr>
         )
     })
  return (
    <tbody className="divide-y divide-gray-text-300">
        {formattedRecords}
    </tbody>
  );
};

export default TableBody;
