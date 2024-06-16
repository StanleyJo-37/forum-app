// import React from "react";

const Register = () => {
    const age = [];
    
    for (let i = 13; i <= 100; ++i) age.push(i);
    
    const ageDropDown = age.map((i) => {
        return (
            <option key={i} value={i}>{i}</option>
        );
    });

    return (
        <div className='flex h-screen w-screen justify-center items-center p-0 m-0'>
            <form className='flex flex-col w-auto h-auto p-4 space-y-4 justify-center items-center m-auto' action='/register' method='POST'>
                <h1 className='text-3xl'>Register</h1>
                <label htmlFor="name"></label>
                <input type="name" name="name" id="name" placeholder="Name" />
                <label htmlFor="email"></label>
                <input type="email" name="email" id="email" placeholder="Email" />
                <label htmlFor="password"></label>
                <input type="password" name="password" id="password" placeholder="Password" />
                <div className='flex h-auto w-auto justify-center items-center space-x-2'>
                    <label htmlFor="gender"></label>
                    <select name="gender" id="gender">
                        <option selected disabled hidden value=''></option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                    </select>
                    <label htmlFor="age"></label>
                    <select name="age" id="age">
                        <option selected disabled hidden value=''></option>
                        { ageDropDown }
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Register;