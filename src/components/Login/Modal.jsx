import React, { useState, useEffect} from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ReactDOM  from 'react-dom'

const Modal = (props) => {
    const { isActivated } = props 
    const [isOpen, setIsOpen] = useState(isActivated)
    const [newUser, setNewUser] = useState(false)
    const modalRoot = document.createElement('div')
    modalRoot.className = "absolute w-screen h-screen flex justify-center items-center bg-black/50 flex-col"
    
    useEffect(() => {
        setIsOpen(isActivated);
        // clean-up
        return () => {
            setIsOpen(false)
        }
    }, [isActivated])

    useEffect(()=>{
        isOpen && document.body.appendChild(modalRoot);
        // clean-up
        return () => {
            modalRoot.remove();
        }
    },[isOpen, newUser])

    const clickHandler = () => {
        setIsOpen(!isOpen)
    }

    const newUserHandler = () => {
        setNewUser(true)
    }

    const existUserHandler = () => {
        setNewUser(false)
    }

    const inpStyles = 'mb-5 p-3 rounded w-[70%]'
    const hoverTransition = 'transition duration-300 ease-in-out'
    return ReactDOM.createPortal(
    <div className='bg-blue-500 p-10 w-[400px] rounded-2xl'>
        <button onClick={clickHandler} className={`float-right rounded py-[0.3em] mt-[-18px] mr-[-18px] border-0 hover:bg-blue-500 hover:text-white focus:outline-none ${hoverTransition}`}>
        &#10006;
        </button>
        {newUser ? <SignUp inpStyles={inpStyles} hoverTransition={hoverTransition} clickHandler={existUserHandler}/> : 
        <SignIn inpStyles={inpStyles} hoverTransition={hoverTransition} clickHandler={newUserHandler}/>}
    </div>, modalRoot)
}

export default Modal;