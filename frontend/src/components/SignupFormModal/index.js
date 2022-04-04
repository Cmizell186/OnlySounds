import React, {useState} from 'react';
import{Modal} from '../../context/Modal';
import SignupForm from './SingupForm';

function SingupFormModal(){
    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </>
    )
}
export default SingupFormModal;
