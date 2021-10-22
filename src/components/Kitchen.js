import React from "react";
export default function Kitchen(){
    const handleLogout =()=>{
        localStorage.clear();
        window.location.pathname="/";
    }
    return(
        <>
        <div className="header">
            <p><i class="fas fa-user-tie"></i> admin</p>
            <button className="button" onClick={handleLogout}>Logout</button>
        
        </div>
        
        </>
    )
}