import React from "react";
import Modal from "../Utilities/modal";
import { PermmissionsComponent } from "./PermissionsComponent";
import history from '../../history';
const PermissionsDelete = () => {
    const actions = (
        <>
            <button className="px-2 py-2 rounded-lg bg-gray-text-300 hover:bg-gray-text-400 transition-all ease-in text-white-text-100 font-medium">This is an action</button>
            <button className="px-2 py-2 rounded-lg bg-green-400 hover:bg-green-600 transition-all ease-in text-white-text-100 font-medium">This is an action</button>
        </>
    )
  return (
    <div>
    <PermmissionsComponent/>
      <Modal title="Delete Permission" content={""} actions={actions} onDismiss={()=>history.push('/permissions')} />
    </div>
  );
};

export default PermissionsDelete;
