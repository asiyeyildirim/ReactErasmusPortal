
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaUserPlus} from 'react-icons/fa';
import './App.css'
import dunya from './videolar/dunya.mp4';


function Registers() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passRepeat, setPassRepeat] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(password != passRepeat){
            setError("Sifreler eslesmiyor!");
            return;
        }


        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);

        setEmail('');
        setPassword('');
        setPassRepeat('');
        setSuccess('Kayit Olusturuldu. Giris yapabilirsiniz.');
        setTimeout(function () {

            window.location.href="/";
            //prevent default
                
              
        }, 1000)

        setError('');
    }

    return (

        <>
        
        <video className='videoTag' id="background-video" autoPlay loop muted  poster="">
    <source src={dunya} type='video/mp4' />
</video>

        
        <div id='register' >

      
    
                <p className="h3 mb-3 fw-normal" id='register_yazi'> <FaUserPlus/>  Hesap Oluşturma</p>

            <form onSubmit={handleSubmit} id='signup_form'>
         

                <div>
                    
                <label for="floatingInput">Email adresi</label>
                <input type="email"  className="form-control" id="email"
                        placeholder="Mail adresiniz" 
                        value={email} 
                        onChange= {(e) => setEmail(e.target.value)}
                        required />
                              

                </div>

                <div>
                <label for="floatingInput">Şifre</label>
                <input type="password" className="form-control" id="sifre"
                        placeholder="Şifre"
                        value={password}
                        onChange= {(e) => setPassword(e.target.value)}
                        minLength = "6"
                        required />

                </div>

         <div>
         <label for="floatingInput"> Tekrar Şifre</label>
         <input type="password"
         
                        placeholder="Şifre Tekrar"  className="form-control" id="reSifre" 
                        value={passRepeat}
                        onChange= {(e) => setPassRepeat(e.target.value)}
                        minLength = "6"
                        required />

         </div>
      
       
            <button type="submit" style={{marginTop:"3%", paddingLeft:"3%", marginLeft:"36%", backgroundColor:"darkorange"}}>Kayıt Ol</button>
            </form>
            {error && <p style={{color: 'red'}} id="register-error"> {error} </p>}
            {success && <p style={{color: 'green'}} id="register-success"> {success} </p>}
            <p id='register_navigate' >
                Hesabınız var mı? <Link to="/">Giriş Yap</Link>
            </p>
        </div>
        
        </>

    );
}

export default Registers;