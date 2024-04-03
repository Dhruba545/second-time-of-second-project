import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const Register = () => {


    const [registerError , setRegisterError] = useState('');
    const [showPassowrd , setPShowaPassword] = useState(false);

    const handleRegister = e =>{


        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email , password)
        if(password.length < 6){
            setRegisterError('password should be at least 6 characters of longer');
            return;
        }
       
        createUserWithEmailAndPassword(auth , email , password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.log(error);
            setRegisterError(error.message);
            console.log(typeof password);
        })
    }

    return (
        <div>
            <h2 className="text-3xl">please Register Here</h2>
            <form onSubmit={handleRegister} className="mx-auto w-[400px] bg-gray-200 px-16 py-4">
                <input placeholder="email address" className=" h-10 mb-4 w-full rounded-md " type="email" name="email" id="" /><br/>

                <input 
                 placeholder="Your Password"
                 required
                 className="h-10  mb-4 w-full rounded-md " type={showPassowrd ? "text" : "password"}
                 name="password"
                 id=""></input><span className="cursor-pointer" onClick={() => setPShowaPassword(!showPassowrd)}>Show</span> <br/>

                <input className="btn w-full btn-secondary" type="submit" value="Register"></input>
            </form>
            {
              registerError && <p className="text-red-600 bg-green-50">{registerError} </p>
            }
        </div>
    );
};

export default Register;