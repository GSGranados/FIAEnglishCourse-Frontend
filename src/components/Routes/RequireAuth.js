
import { connect } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom'
const RequireAuth = ({children,login}) => {
    const location = useLocation();
    if(!login) return <Navigate to="/login" state={{path: location.pathname}}/>
    return children;
}

const mapStateToProps = (state) =>{
    return{
        login: state.login.user
    }
}

export default connect(mapStateToProps,null)(RequireAuth);