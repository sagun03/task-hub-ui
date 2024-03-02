import React from 'react'

const SignIn = (props) => {
    const { inpStyles, hoverTransition, clickHandler} = props
  return (
    <>
        <form className='flex flex-col mt-10 items-center'>
            <input className={inpStyles} type="text" name="username" placeholder="Username" required />
            <input className={inpStyles} type="password" name="password" placeholder="Password" required />
            <input className={`w-[70%] bg-white hover:bg-blue-500 p-2 rounded cursor-pointer hover:text-white ${hoverTransition}`} type="submit" value="Login" />
        </form>
        <p className='mt-5 mx-auto text-center text-white'>Don't have account?&nbsp; 
            <span className={`text-white underline hover:text-black cursor-pointer ${hoverTransition}`} onClick={clickHandler}>
                create one / sign up
            </span>
        </p>
    </>
  )
}

export default SignIn