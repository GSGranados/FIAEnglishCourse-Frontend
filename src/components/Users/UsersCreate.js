import React from 'react'
import { connect } from 'react-redux';
import UsersForm from './UsersForm'
import {createUser} from '../../actions/users'
const UsersCreate = (props) => {


  const onSubmit = (formValues) => {
    const formattedUser = {...formValues,
      "created_at": new Date().toUTCString(),
      "updated_at": new Date().toUTCString(),
      "profile_picture": null,
      "is_active": true,
      "is_superuser": false,
      "is_staff": false,
    }
    props.createUser(formattedUser);
  };
  return (
    <UsersForm onSubmit={onSubmit}/>
  )
}

export default connect(null,{createUser})(UsersCreate);