import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
export class UsersForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="text-red-500 font-light text-left text-sm block">
          {error}
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta, type, placeholder }) => {
    return (
      <div className="w-full flex flex-col relative px-[1rem] py-2">
        <label
          htmlFor={input.name}
          className="block mb-2 text-sm font-medium text-gray-text-900"
        >
          {label}
        </label>
        <input
          {...input}
          id={input.name}
          autoComplete="off"
          type={type}
          placeholder={placeholder}
          className=" border  border-gray-text-300 text-gray-text-900 text-sm rounded-lg block w-full p-2.5 "
        />
        <div className="absolute bottom-[-0.70rem]">{this.renderError(meta)}</div>
      </div>
    );
  };
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
        <div className="w-full h-full  flex items-center justify-center">
        <form
          onSubmit={handleSubmit(this.onSubmit)}
          className="w-full border-[1px] p-8 border-black-500 shadow-2xl bg-white-text-100 rounded-lg flex flex-col gap-3"
        >
        <div className="flex justify-center items-center gap-4 w-full">
        <Field
            name="email"
            component={this.renderInput}
            label={"Email"}
            type={"email"}
            placeholder={"email@mail.com"}
          />
          <Field
            name="password"
            component={this.renderInput}
            label={"Password"}
            type={"password"}
          />
        </div>
        <div className="flex justify-center items-center gap-4 w-full">
        <Field
            name="first_name"
            component={this.renderInput}
            label={"First Name"}
            type={"text"}
            placeholder={"John"}
          />
          <Field
            name="last_name"
            component={this.renderInput}
            label={"Last Name"}
            type={"text"}
            placeholder={"Doe"}
          />
        </div>
        <div className="flex justify-center items-center gap-4 w-full">
        <Field
            name="phone_number"
            component={this.renderInput}
            label={"Phone Number"}
            type={"text"}
            placeholder={"7777-5555"}
          />
          <Field
            name="carnet"
            component={this.renderInput}
            label={"Carnet"}
            type={"text"}
            placeholder={"us14003"}
          />
        </div>
          <div className="flex justify-end items-center w-full gap-3">
          <Link to={"/users"} className="bg-gray-text-400 w-[8rem] my-0 rounded-lg text-white-text-100 text-sm font-semibold text-center p-2 hover:bg-gray-text-600 transition-all ease-in duration-300">Cancel</Link>
            <button className=" bg-green-400 w-[8rem] my-0 rounded-lg text-white-text-100 text-sm font-semibold text-center p-2 hover:bg-green-600 transition-all ease-in duration-300">
              Save User
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const validate = (formValues) => {
    const errors = {};
    if (!formValues.email) {
      errors.email = "Please, enter a Username E-mail";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)
    ) {
      errors.email = "Invalid Username E-mail";
    }
  
    if (!formValues.password) {
      errors.password = "Please, enter a Password";
    }
    if (!formValues.first_name) {
      errors.first_name = "Please, enter a First Name";
    }
    if (!formValues.last_name) {
      errors.last_name = "Please, enter a Last Name";
    }
    if (!formValues.phone_number) {
      errors.phone_number = "Please, provide a Phone Number";
    }
    if (!formValues.carnet) {
      errors.carnet = "Please, provide a Carnet Number";
    }else if(formValues.carnet.length >7 ||  !/[a-zA-Z]{2}\d{5}/.test(formValues.carnet)){
        errors.carnet = "Please, provide a valid Carnet";
    }
  
    return errors;
  };
  

export default reduxForm({
    form: "userForm",
    validate
})(UsersForm);
