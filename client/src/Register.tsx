import React from "react";

const Register = () => {
    return (
        <React.Fragment>
            <form action='/register' method='POST'>
                <input type="email" name="email" id="email" placeholder="Email"/>
            </form>
            Register
        </React.Fragment>
    )
}

export default Register;