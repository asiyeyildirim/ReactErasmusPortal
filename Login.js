
import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './App.css'
import dunya from './videolar/dunya.mp4';
import {FaUserAlt} from 'react-icons/fa';
import Swal from 'sweetalert2'


function Login_s() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();


   

    const handleSubmit = (e) => {
        e.preventDefault();

        const kullanici_adi = sessionStorage.getItem('email');
        const sifre = sessionStorage.getItem('password');

        if(email == kullanici_adi && password == sifre){
            setIsLogin (true);
            sessionStorage.setItem('isLogin', true);
            Swal.fire('Alert text')

            // or an example from the picture above
            Swal.fire( 'Giriş Başarılı!','Yönlendiriliyorsunuz...','success');

            navigate('/portal');
        }
        else{
            Swal.fire('Alert text')

            // or an example from the picture above
            Swal.fire( 'Hata!','Kullanıcı adı veya şifre yanlış','warning');
         
        }


    }

    


    return (
        <>

<video className='videoTag' id="background-video" autoPlay loop muted  poster="">
    <source src={dunya} type='video/mp4' />
</video>
<p className="h3 mb-3 fw-normal" id='login_yazi'> <FaUserAlt/> Erasmus Portal Giriş</p>

        <div class="row justify-content-center"  id='login'>
       

            <form onSubmit={handleSubmit}  id='signin_form'>

                <div>
                <label for="floatingInput">Email adresi</label>
                <input type="email"   className="form-control" id="email"
                        placeholder="Mail adresiniz" 
                        value={email} 
                        onChange= {(e) => setEmail(e.target.value)}
                        required />

                </div>
                <div>
                <label for="floatingInput">Şifre</label>
                <input type="password"  className="form-control" id="sifre"
                        placeholder="Şifre"
                        value={password}
                        onChange= {(e) => setPassword(e.target.value)}
                        required />
                        </div>
                <button type="submit" style={{marginTop:"3%", paddingLeft:"3%", marginLeft:"36%" ,backgroundColor:"pink" , fontWeight:"bold"}}>Giriş Yap</button>
            </form>

            {error && <p style={{color:'red'}} id='error-message'> {error} </p> }

            <p id='login_navigate'>
                Hesabınız yok mu? <Link to="/kayit">Kayıt Ol!</Link>
            </p>
       

            
        </div>
        </>
    );
}

export default Login_s;