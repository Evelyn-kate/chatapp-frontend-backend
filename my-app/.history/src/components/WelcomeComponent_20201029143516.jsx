import React from 'react';
import NavComponent from './NavComponent';
import SideComponent from './SideComponent';

class WelcomeComponent extends React.Component {
    logout() {
        this.props.history.push('/logout');
    }
    render(){
        const {username} = this.props.match.params;
        console.log(username);
        return (
            <div class="wrapper">

                <div class="container-fluid">
                    <div class="row">
                        {/* <!-- The sidebar --> */}
                        <div class="col-3">
                            <div>
                                <SideComponent />
                            </div>
                        </div>

                        <div className="col-9 pr-0">
                            {/*navbar component*/}
                          
                            <NavComponent />
                            
                            <div className="main-text">
                                <h1>Welcome {username}</h1>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomeComponent;