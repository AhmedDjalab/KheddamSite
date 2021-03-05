import Axios from "axios";
import React, { useEffect, useState } from "react";
import contact from "./icons/contact.png";

import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Fade } from "@material-ui/core";

const localmainApiUrl = "http://192.168.1.5:40000/api";
const mainApiUrl = "http://api.kheddam.com/api";
const apiUrl = mainApiUrl+"/Utiles/SendContactUsEmail";
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        margin: theme.spacing(2),
    },
    placeholder: {
        height: 40,
    },
}));

export const ContactUs = () => {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    // const [capatcha, setCaptcha] = useState(false);
    const [loader, setLoader] = useState(false);
    const [query, setQuery] = React.useState('idle');
    const timerRef = React.useRef();


    React.useEffect(
        () => () => {
            clearTimeout(timerRef.current);
        },
        [],
    );





    // const sendMail = () => {
    //     window.Email.send({
    //         // Host: "mail.kheddam.com",
    //         // Username: "postmaster@kheddam.com",
    //         // Password: "Postmaster@123456",
    //         SecureToken: "4eb237a6-3ced-4bf8-91e1-1f2678198baf",


    //         To: 'postmaster@kheddam.com',
    //         From: "postmaster@kheddam.com",
    //         Subject: "hello",
    //         Body: email + "    " + message
    //     }).then(
    //         message => alert(message)
    //     );
    //     const templateId = 'template_y0bu92q';



    //     window.emailjs.send(
    //         'service_u6vm1e9', "template_tuk5nvr",
    //         { message: message, from_name: email, reply_to: email }
    //     ).then(res => {
    //         console.log('Email successfully sent!', res)
    //         setLoader(false);
    //         alert("Your message has been submitted👍");
    //         setName("");
    //         setEmail("");
    //         setMessage("");
    //     })
    //         // Handle errors here however you like, or use a React error boundary
    //         .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    // }
    // const handleLoaded = _ => {
    //     window.grecaptcha.ready(_ => {
    //         window.grecaptcha
    //             .execute("6LeqxOQZAAAAAP81BRehJ3Fv5rRzBcNT3_re-yUh", { action: "homepage" })
    //             .then(token => {
    //                 if (token) setCaptcha(true)
    //                 // ...
    //             })
    //     })
    // }
    // useEffect(() => {
    //     // Add reCaptcha
    //     const script = document.createElement("script")
    //     script.src = "https://www.google.com/recaptcha/api.js"
    //     script.addEventListener("load", handleLoaded)
    //     document.body.appendChild(script)
    // }, [])
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);


        if (message === "" || email === "" || name === "") {
            alert("please fill all fields ");
            setLoader(false);
            return;
        } else {

            alert("we are always happy to receive from you 👍 ");
            // sendMail();
            Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

           
            Axios
                .post(
                    apiUrl,
                    {

                        email: email,
                        title: name,
                     
                        text: message

                    },
                  
                )
                .then(() => {
                    setLoader(false);
                    alert("Your message has been submitted👍");
                    setName("");
                    setEmail("");
                    setMessage("");
                })
                .catch((error) => {
                    alert(error.message);
                    setLoader(false);
                });

        }




    };
    return (

        <div id="fh10co-download" class="bg-info contact4 overflow-hiddedn position-relative">

            <div class="row no-gutters">
                <div class="container">
                    <div class="col-lg-6 contact-box mb-4 mb-md-0">
                        <div class="">
                            <h1 class="title font-weight-light text-black mt-2">Contactez Nous</h1>
                            <form class="mt-3" onSubmit={handleSubmit}>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group mt-2">
                                            <input class="form-control text-black" type="text" placeholder="Nom" value={name}
                                                onChange={(e) => setName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group mt-2">
                                            <input class="form-control text-black" type="email" placeholder="email" value={email}
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group mt-2">
                                            <textarea class="form-control text-black" rows="3" placeholder="message" value={message}
                                                onChange={(e) => setMessage(e.target.value)}></textarea>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        {/* <div
                                            className="g-recaptcha"
                                            data-sitekey="6LeqxOQZAAAAAP81BRehJ3Fv5rRzBcNT3_re-yUh"

                                        ></div> */}

                                        <div className={classes.placeholder}>
                                            {/* <Fade
                                                in={loader}
                                                style={{
                                                    transitionDelay: loader ? '800ms' : '0ms',
                                                }}
                                                unmountOnExit
                                            >
                                                <CircularProgress />
                                            </Fade> */}
                                        </div>
                                    </div>



                                    <div class="col-lg-12 d-flex align-items-center mt-2">
                                        <button type="submit" class="btn bg-primary text-white px-3 py-2" disabled={loader}><span>  { 'Envoyer' }</span></button>
                                        <span class="ml-auto text-black align-self-center"><i class="icon-phone mr-2"></i></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 right-image p-r-0">
                    {/* <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Djelfa+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        width="100%" height="522" frameborder="0" style={{ border: "0" }} allowfullscreen data-aos="fade-left" data-aos-duration="3000"></iframe> */}

                    <img src={contact} width="100%" height="565" />
                </div>
            </div>
        </div>






    );

}