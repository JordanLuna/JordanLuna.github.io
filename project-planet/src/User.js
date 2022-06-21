import { useState } from "react";

const User = ({userName, tweet}) => {

    return (
        <div>
            <h2>{userName}</h2>
            <p>{tweet}</p>
        </div>
        
    );

}

export default User;
