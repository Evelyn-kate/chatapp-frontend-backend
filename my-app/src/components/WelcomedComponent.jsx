import React from 'react';
import NavComponent from './NavComponent';
import SideComponent from './SideComponent';

import { connect } from 'react-redux';

class WelcomedComponent extends React.Component {
    
    isAdmin(){
        const role = this.props.profile.roles[0];

        if(role === 'ROLE_ADMIN')
            return true;

        return false;
    }

    render() {
        return (
            <div className="wrapper" onSubmit={this.props.onSubmit}>

                <div className="container-fluid">
                    <div className="row">
                        {/* <!-- The sidebar --> */}
                        <div className="col-md-2 col-lg-2 col-sm-2">
                            <div>
                                <SideComponent />
                            </div>
                        </div>
                        <div className="col-sm-10 col-md-10 col-lg-10 pl-2 contenu">
                            <div className="container">
                                {/*navbar component*/}
                                <div>
                                    <NavComponent history={this.props.history} />
                                </div>
                                <div className="w-100 main-text">
                                    <h1>Welcome {this.isAdmin() ? 'Admin': this.props.profile.username}!</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  }
}

export default connect(mapStateToProps)(WelcomedComponent);