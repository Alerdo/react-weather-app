import React from "react";


const Header = () => {

   
    
    return (
        <>
        <header className="header">
            <div className="logo"></div>
            <form className="searchForm" onSubmit="">
                <input
                    type="text"
                    placeholder="Search..."
                    value=""
                    onChange=""
                />
                <button type="submit">Search</button>
            </form>
        </header>
        </>
    )
}



export default Header;