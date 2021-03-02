import React from 'react';

const SearchBar = ({keyword, setKeyword}) => {
    const barStyling = {width:"10rem",background:"#FFFFFF", border:"2px solid cornflowerblue", padding:"5px", float:"right", position:"relative", right: "-350px", display: "webkit-flex", height: "auto"};

    return (
        <div className="row m-0 pb-3 pl-6 ">
            <div className="input-group col-sm-12 d-flex">
                <h3> Messages</h3>
                <br/>
                <input style={barStyling} key="random1" value={keyword} className="form-control col-sm-5"
                       placeholder={"search message ..."} onChange={(e) => setKeyword(e.target.value)}/>
                <div className="input-group-append col-xs-3 flex-grow" style = {{right: "-350px", position: "relative", display: "block",width:"-5px", align: "center", border: "1px solid cornflowerblue"}}>
                    <button type="submit" className="w-100" onClick={(e) => setKeyword(e.target.value)}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
            </div>
        </div>

    );
}

export default SearchBar