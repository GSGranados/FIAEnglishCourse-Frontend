import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchUser, editUser } from '../../actions/users';
import history from '../../history';
import UsersForm from './UsersForm';
import React, { Component } from 'react'

export class UsersEdit extends Component {
  async componentDidMount(){
    const userId = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchUser(userId);
  }

  onSubmit = (formValues) => {
    const userId = Number(history.location.pathname.split("/")[3]);
      this.props.editUser(userId, formValues);
    };

  render() {
    if (!this.props.user) {
      return <div>Loading...</div>;
    }
    return (
      <UsersForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.user, ["email","first_name","last_name","phone_number","carnet"])}/>
    )
  }
}

const mapStateToProps = (state) =>{
  return {user : state.users.users[Number(history.location.pathname.split("/")[3])-1]}  
}

export default connect(mapStateToProps,{fetchUser,editUser})(UsersEdit);