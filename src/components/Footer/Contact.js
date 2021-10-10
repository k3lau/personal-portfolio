import emailjs from "emailjs-com";
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { MyEmail, StyledForm, StyledFormWrapper, StyledInput, StyledTextArea, StyledButton } from "./Contact.elements"

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('personal_portfolio', 'template_default', e.target, 'user_XoyOgaJlQbjQtN6Ifwrgw')
            .then((result) => {
                toast.success('Successfully sent!')
                e.target.reset()
            }, (error) => {
                toast.error(error.text)
            });
    }

    return (
        <StyledFormWrapper>
            <StyledForm onSubmit={sendEmail}>
                <MyEmail>
                    To: kietlau000@gmail.com
                </MyEmail>
                <StyledInput type="text" className="form-control" placeholder="Name" name="name" />
                <StyledInput type="email" className="form-control" placeholder="Email Address" name="email" />
                <StyledInput type="text" className="form-control" placeholder="Subject" name="subject" />
                <StyledTextArea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></StyledTextArea>
                <StyledButton type="submit" value="Send Message">Send Message</StyledButton>
            </StyledForm>
            <Toaster />
        </StyledFormWrapper>
    )
}