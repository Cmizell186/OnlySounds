import React, {useState} from 'react';
import{Modal} from '../../context/Modal';
import SignupForm from './SingupForm';

function SingupFormModal(){
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <div onClick={() => setShowModal(true)} className="singupButton">Sign Up</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </>
    )
}
export default SingupFormModal;
