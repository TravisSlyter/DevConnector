// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// const PrivateRoute = ({ 
//     component: Component, 
//     auth: { isAuthenticated, loading }, 
//     ...rest
// }) => (
//     <Route 
//     {...rest} render={props => 
//         !isAuthenticated && !loading ? (
//         <Redirect to='/login' /> 
//         ) : (
//         <Component {...props} />
//         )
//       } 
//     />
// );

// PrivateRoute.propTypes = {
//     auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//     auth: state.auth
// });

// export default connect(mapStateToProps)(PrivateRoute);

// original code did not work
// Following taken from repo

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);