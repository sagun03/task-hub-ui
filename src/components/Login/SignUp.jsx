import React from 'react'

const SignUp = (props) => {
    const { inpStyles, hoverTransition, clickHandler } = props
  return (
    <>
        <form className='flex flex-col mt-10 items-center'>
            <input className={inpStyles} type="text" name="username" placeholder="Username" required />
            <input className={inpStyles} type="text" name="fname" placeholder="First name" required />
            <input className={inpStyles} type="text" name="fname" placeholder="Last name" required />
            <input className={inpStyles} type="email" name="email" placeholder="Email" required />
            <input className={inpStyles} type="password" name="password" placeholder="Password" required />
            <input className={`w-[70%] bg-white hover:bg-blue-500 p-2 rounded cursor-pointer hover:text-white ${hoverTransition}`} type="submit" value="Sign up" />
        </form>

        <p className='mt-5 mx-auto text-center text-white'>Already a user?&nbsp; 
            <span className={`text-white underline hover:text-black cursor-pointer ${hoverTransition}`} onClick={clickHandler}>
                sign in
            </span>
        </p>
    </>
  )
}

export default SignUp