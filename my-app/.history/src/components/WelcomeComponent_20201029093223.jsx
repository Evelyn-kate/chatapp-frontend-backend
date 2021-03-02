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
                        {/*navbar component*/}
                        <div>
                            <NavComponent />
                        </div>
                    </div>
                    <div class="row">
                        {/* <!-- The sidebar --> */}
                        <div class="col-3 pl-0">
                            <div>
                                <SideComponent />
                            </div>
                        </div>
                        <div className="col-9 pr-0">
                            <div className="container">                               
                                <div className="w-100 main-text">
                                    <h1>Welcome {username}</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default WelcomeComponent;