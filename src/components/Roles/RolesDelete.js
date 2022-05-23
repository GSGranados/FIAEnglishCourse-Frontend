import React from "react";
import history from "../../history";
import Modal from "../Utilities/modal";
const RolesDelete = () => {
  const actions = (
      <>
        <button className="px-2 py-2 rounded-lg bg-gray-text-300 hover:bg-gray-text-400 transition-all ease-in text-white-text-100 font-medium">Cancel</button>
        <button className="px-2 py-2 rounded-lg bg-red-400 hover:bg-red-600 transition-all ease-in text-white-text-100 font-medium">Delete Role</button>
      </>
    )
  return (
    <div>
      <Modal 
        title="Delete Role" 
        content={""} 
        actions={actions} 
        onDismiss={()=>history.push('/roles')} />
    </div>
  );
};
export default RolesDelete;