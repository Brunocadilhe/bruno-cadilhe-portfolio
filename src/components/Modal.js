import React from 'react'
import { useGlobalContext } from '../Context'
import { FaTimes } from 'react-icons/fa'
import { BsFillStarFill } from 'react-icons/bs'

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext()

  return (
    <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className="modal-container">
        <span className="modal-icon">
          <BsFillStarFill />
        </span>
        <h3 className="modal-container-h3">lets get in touch</h3>
        <h5 className="modal-container-h5">cadilheb@gmail.com</h5>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}

export default Modal
