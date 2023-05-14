
import React, { useState } from 'react'
import "../../componects/./SignInForm.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Sinup() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const navigate = useNavigate()

    const submit = async (e) => {
        e.preventDefault()

        try {
            const res = axios.post("https://4be6-206-84-141-94.ngrok-free.app/signup", {
                name: name,
                email: email,
                pass: pass
            }, {
                headers: { 'Content-Type': 'application/json' }
            },
            );
            alert("Sinup successfully")
            navigate("/dash/applicant/applicntsinin")
            console.log(res, "data");
        } catch (error) {
            console.error(error, "error");
        }

    }
    return (
        <div>
            <div class="container">
                <div class="forms-container">
                    <div class="signin-signup">
                        <form onSubmit={submit} action="#">
                            <h2 class="title" > Applicants Sign up</h2>
                            <div class="input-field">
                                <i class="fas fa-user"></i>
                                <input type="text" placeholder="Username" onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div class="input-field">
                                <i class="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div class="input-field">
                                <i class="fas fa-lock"></i>
                                <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} required />
                            </div>
                            <input type="submit"
                                // onClick={submit}
                                class="btn" />
                            <p class="social-text">Or Sign up with social platforms</p>
                            <div className='mb-4 social-media'>
                                <a href="#" class="social-icon">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" class="social-icon">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" class="social-icon">
                                    <i class="fab fa-google"></i>
                                </a>
                                <a href="#" class="social-icon">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="panels-container">
                    <div class="panel left-panel">
                        <div className='content mt-7 mr-20'>
                            <h1 className='mb-7 text-3xl font-bold'>WellCome to Applicants  SinUp page</h1>

                            <p>
                                Lorem ipsum, dolor sit <br />amet consectetur adipisicing elit.<br /> Debitis,
                                ex ratione. Aliquid!
                            </p>
                        </div>
                        <img src="img/log.svg" class="image" alt="" />
                    </div>
                    <div class="panel right-panel">
                        <div class="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button class="btn transparent" id="sign-in-btn">
                                Sign in
                            </button>
                        </div>
                        <img src="img/register.svg" class="image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}