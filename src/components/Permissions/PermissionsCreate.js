import React from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import history from "../../history";
import Modal from "../Utilities/modal";

class PermissionsCreate extends React.Component {

  renderError({error,touched}){
    if(touched && error){
      return (
        <div className="text-red-500 font-light text-left text-sm block">
          {error}
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label
        htmlFor="permissionName"
          className="block mb-2 text-sm font-medium text-gray-text-900 dark:text-gray-text-300"
        >
          {label}
        </label>
        <input
          {...input}
          id="permissionName"
          autoComplete="off"
          className=" border border-gray-text-300 text-gray-text-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  }

  onSubmit(formValues){
    console.log(formValues);
  }

  render() {
    const renderedForm = (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="w-full flex flex-col gap-6">
        <Field
          name="permissionName"
          component={this.renderInput}
          label={"Permission Name"}
        />
       <div className="flex justify-between items-center w-full">
       <Link to={"/permissions"} className="bg-gray-text-200 w-[10rem] rounded-lg text-white-text-100 font-semibold text-center p-2 hover:bg-gray-text-300 transition-all ease-in duration-300">Cancel</Link>
       <button className=" bg-green-400 w-[10rem] rounded-lg text-white-text-100 font-semibold text-center p-2 hover:bg-green-600 transition-all ease-in duration-300">Create Permission</button>
       </div> 
      </form>
    );
    return (
      <Modal
        title={"New Permission"}
        content={renderedForm}
        actions={""}
        onDismiss={() => history.replace('/permissions')}
      />
    );
  }
}

const validate =(formValues) =>{
  
  const errors ={}
  if(!formValues.permissionName){
      errors.permissionName = "Please, enter a valid Permission name"
    }

    return errors
}

export default reduxForm({
  form: "permissionNew",
  validate
})(PermissionsCreate);
