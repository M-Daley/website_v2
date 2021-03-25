import { useState, useEffect } from 'react'
import { regexEmailPattern } from '../utils/regexPatterns'
import { init, send } from 'emailjs-com'

init('user_Eoxsp4FhaKSLgYLpv0sNq')

export default function Contact() {
    const [emailValue, setEmailValue] = useState("")
    const [messageValue, setMessageValue] = useState("")
    const [messageWordCount, setMessageWordCount] = useState(0)

    function handleFormSubmit(e) {
        e.preventDefault()
        if (validateData()) {
            // sendEmail()
            setMessageValue('')
        } else {
            console.log("invalid")
        }
    }

    function handleEmailChange(e) {
        setEmailValue(e.target.value)
    }

    function handleMessageChange(e) {
        setMessageValue(e.target.value)
    }

    function emailValidation() {
        return regexEmailPattern.test(emailValue)
    }

    function messageValidation() {
        return messageWordCount > 50
    }

    function validateData() {
        return emailValidation() ==
        messageValidation()
    }

    function sendEmail() {
        send('service_k3kz5ch', 'template_k5ecdar', {
            email: emailValue,
            message: messageValue
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        setMessageWordCount(messageValue.length)
    }, [messageValue])

return(
    <div id="Contact" className="page-container">
        <div className="contact-container">
            <div className="col-5 h-12">
                <h3>Message</h3>

                <div className="email h-10">
                    <form onSubmit={handleFormSubmit}>
                        <label>
                            <input tabIndex={6} type="text" value={emailValue} onChange={handleEmailChange} placeholder="Email" required={true} />
                        </label>
                        <label>
                            <textarea tabIndex={7} type="text" value={messageValue} onChange={handleMessageChange} required={true}/>
                        </label>
                        <br />
                        <button tabIndex={8} className="submit-btn" type="submit"><i className="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
            <div className="vertical-horizontal-rule h-12" />
            <div className="col-5 h-12 social-container">
                <h3>Follow</h3>
                <div className="col-12 h-8 social-icons">
                    <ul className="socialMedia">
                        <li><a tabIndex={9} href="https://www.facebook.com/profile.php?id=100017464091318" target="_blank"><i className="fab fa-facebook"></i></a></li>
                        <li><a tabIndex={10} href="https://www.linkedin.com/in/malcom-daley-84a664b9/" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                        <li><a tabIndex={11} href="https://twitter.com/DaleyMalcom" target="_blank"><i className="fab fa-twitter"></i></a></li>
                        <li><a tabIndex={12} href="https://codepen.io/m-daley" target="_blank"><i className="fab fa-codepen"></i></a></li>
                        <li><a tabIndex={13} href="https://www.hackerrank.com/mdaley115" target="_blank"><i className="fab fa-hackerrank"></i></a></li>
                        <li><a tabIndex={14} href="https://github.com/M-Daley" target="_blank"><i className="fab fa-github"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)}