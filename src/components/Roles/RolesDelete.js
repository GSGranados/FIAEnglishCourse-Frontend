import React from "react";
import history from "../../history";
import Modal from "../Utilities/modal";
const RolesDelete = () => {


    const actions = (
        <>
            <button className="px-2 py-2 rounded-lg bg-gray-text-300 hover:bg-gray-text-400 transition-all ease-in text-white-text-100 font-medium">This is an action</button>
            <button className="px-2 py-2 rounded-lg bg-green-400 hover:bg-green-600 transition-all ease-in text-white-text-100 font-medium">This is an action</button>
        </>
    )
  return (
    <div>
      <Modal title="Delete Role" content={""} actions={actions} onDismiss={()=>history.push('/roles')} />
    </div>
  );
};
export default RolesDelete;
/*
import React from "react";
import { connect } from "react-redux";
import Table from "../Utilities/table";
import {fetchPermissions} from '../../actions/permissions'
class RolesDelete extends React.Component {
  render() {
    return <div>Delete Roles Here</div>;
  }
}

export default RolesDelete;
*/