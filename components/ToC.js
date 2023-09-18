import React from 'react'

const ToC = ({isVisible, onClose}) => {

    if(!isVisible) return null;

    const handleClose = (e) => {
        if(e.target.id==="closer") return onClose()
    }

  return (
    <div id="closer" onClick={handleClose} className='bg-black100 bg-opacity-25 fixed w-screen h-screen z-10 flex items-center justify-center backdrop-blur-sm'>
        <div className='main relative flex flex-col mx-80 h-4/5 p-6 bg-white50 rounded-sm gap-8 shadow-lg'>
            <div className='flex justify-between items-center'>
                <h3 className='text-primary'> Register </h3>
                <div onClick={() => onClose()}><Close className='text-3xl rounded-sm hover:scale-105 border bg-red cursor-pointer text-white50'/></div>
            </div>
            <div className='pr-4 overflow-y-scroll'>
            <p>
                These Terms and Conditions ("Agreement") are entered into by and between [Your Company Name], hereinafter referred to as the "Company," and you, the user, hereinafter referred to as the "User," collectively referred to as the "Parties."
            </p>

            <h3>1. Acceptance of Terms</h3>
            <p>
                By accessing or using our services, you agree to be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use our services.
            </p>

            <h3>2. Use of Services</h3>
            <p>
                2.1. The User agrees to use the Company's services in accordance with all applicable laws and regulations.
            </p>
            <p>
                2.2. The User shall not engage in any activities that may harm, disrupt, or impair the functionality of the Company's services or its users.
            </p>

            <h3>3. Privacy</h3>
            <p>
                3.1. The Company collects and processes personal information as described in its Privacy Policy.
            </p>

            <h3>4. Intellectual Property</h3>
            <p>
                4.1. All intellectual property rights related to the Company's software, content, and materials are owned by the Company.
            </p>

            <h3>5. Termination</h3>
            <p>
                5.1. The Company reserves the right to terminate or suspend a User's access to its services for violations of these Terms and Conditions or for any other reason.
            </p>

            <h3>6. Governing Law</h3>
            <p>
                6.1. This Agreement shall be governed by and construed in accordance with the laws of [Specify your jurisdiction].
            </p>

            <h3>7. Contact Information</h3>
            <p>
                If you have any questions or concerns about these Terms and Conditions, please contact us at [Company Contact Information].
            </p>
            </div>
        </div>
    </div>
  )
}

export default ToC