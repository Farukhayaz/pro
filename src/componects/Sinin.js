// import React, { useState } from 'react'
// import "./SignInForm.css"
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
// export default function Sinin() {
//     // const history = useHistory();

//     const [email, setEmail] = useState('')
//     const [pass, setPass] = useState('')
//     const navigate = useNavigate()
//     const [userId, setUserId] = useState(null);
//     const [error, setError] = useState('');


//     const login = async (e) => {
//         e.preventDefault()
//         try {
//             const response = await axios.post('https://4be6-206-84-141-94.ngrok-free.app/login', { email: email, pass: pass });
//             console.log(response, "response");
//             if (response.data) {
//                 alert("Successfully Logged in")
//                 const data = await response.data;
//                 setUserId(data.id); // Save the user ID in local state
//                 // history.push(`/dash/${data.id}`); // Navigate to the dashboard and pass the user ID as a parameter
//                 navigate(`/dash/${data.id}`)
//             } else {
//                 setError('Invalid email or password');
//             }
//         } catch (error) {
//             console.error(error);
//             setError('Something went wrong, please try again later');
//         }
//     };


//     const sinup = () => {
//         navigate("/sinup")
//     }

//     return (
//         <div>
//             <div class="container">
//                 <div class="forms-container">
//                     <div class="signin-signup">
//                         <form action="#" class="sign-in-form">
//                             <h2 class="title">Sign in</h2>
//                             <div class="input-field">
//                                 <i class="fas fa-envelope"></i>
//                                 <input type='email'
//                                     placeholder='Enter email'
//                                     onChange={(e) => setEmail(e.target.value)} />
//                             </div>
//                             <div class="input-field">
//                                 <i class="fas fa-lock"></i>
//                                 <input type='password'
//                                     placeholder='Enter password'
//                                     onChange={(e) => setPass(e.target.value)} />
//                             </div>
//                             {error && <p>{error}</p>}
//                             <input type="submit" value="Login" class="btn solid" onClick={login} />
//                             <p class="social-text">Or Sign in with social platforms</p>
//                             <div className='social-media mb-4'>
//                                 <a href="#" class="social-icon">
//                                     <i class="fab fa-facebook-f"></i>
//                                 </a>
//                                 <a href="#" class="social-icon">
//                                     <i class="fab fa-twitter"></i>
//                                 </a>
//                                 <a href="#" class="social-icon">
//                                     <i class="fab fa-google"></i>
//                                 </a>
//                                 <a href="#" class="social-icon">
//                                     <i class="fab fa-linkedin-in"></i>
//                                 </a>
//                             </div>
//                         </form>
//                     </div>
//                 </div>

//                 <div class="panels-container">
//                     <div class="panel left-panel">
//                         <div class="content mt-8" >
//                             <h3 className='mb-5'>WellCome to sinin Page</h3>
//                             <p className='mb-5'>
//                                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
//                                 ex ratione. Aliquid!
//                             </p>
//                             <button className='mb-5 btn transparent' id="sign-up-btn" onClick={sinup}>
//                                 Sign up
//                             </button>
//                         </div>
//                         <img src="img/log.svg" class="image" alt="" />
//                     </div>
//                     <div class="panel right-panel">
//                         <div class="content">
//                             <h3>One of us ?</h3>
//                             <p>
//                                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//                                 laboriosam ad deleniti.
//                             </p>
//                             <button class="btn transparent" id="sign-in-btn">
//                                 Sign in
//                             </button>
//                         </div>
//                         <img src="img/register.svg" class="image" alt="" />
//                     </div>
//                 </div>
//             </div>
//             <script src="ap.js"></script>
//         </div>
//     )
// }
