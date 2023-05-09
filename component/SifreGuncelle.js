import React, { useState,useEffect } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../App.css';
import dunya from '../videolar/dunya.mp4';
import Sidebar from "./Sidebar.js";




function SifreGuncelle() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [yeniSifre, setYeniSifre] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  


  useEffect(() => {
    var isLogin = sessionStorage.getItem('isLogin');
    if (isLogin !== 'true') {
      navigate('/');
    }
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    const kullanici_adi = sessionStorage.getItem('email');
    const sifre = sessionStorage.getItem('password');

    if (email === kullanici_adi && password === sifre) {
      sessionStorage.setItem('password', yeniSifre);
      navigate('/portal');
    } else {
      Swal.fire('Hata!', 'Kullanıcı adı veya şifre yanlış', 'warning');
    }
  };

  return (
    <>
      <video className="videoTag" id="background-video" autoPlay loop muted poster="">
        <source src={dunya} type="video/mp4" />
      </video>



      <div className="row">

      <div className="row justify-content-center" id="sifre_alan">

      <div className="col-4">
                <Sidebar 
               gor_to="/portal/basvuruGoruntule"
               form_to="/portal/BasvuruFormu"
               iletisim_to="/portal/Communication"
                    />
                    
            </div>

            <p id="sifre_yazi">
          {' '}
          <FaUserAlt /> Portal Şifre Güncelleme
        </p>

        <form onSubmit={handleSubmit} id="sifre_form">
          
          <div>
      

            <label htmlFor="email">Email adresi</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Mail adresiniz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Şifre</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="yeniSifre">Yeni Şifre</label>
            <input
              type="password"
              className="form-control"
              id="yeniSifre"
              placeholder="Yeni Şifre"
              value={yeniSifre}
              onChange={(e) => setYeniSifre(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: '3%',
              paddingLeft: '3%',
              marginLeft: '36%',
              backgroundColor: 'pink',
              fontWeight: 'bold',
            }}
          >
            Kaydet
          </button>
        </form>

        {error && <p style={{ color: 'red' }}> {error} </p>}
      </div>
      
      </div>


      <div id='footer' >
  




  <div class="container ">
<footer class="d-flex flex-wrap justify-content-between align-items-center ">
<p style={{marginLeft:"8%"}}>&copy; 2023 Erasmus, Tr</p>

<a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">

</a>

<ul class="nav col-md-4 justify-content-end">
<li class="nav-item"><a href="/portal" class="nav-link px-2 text-body-secondary">Ana sayfa</a></li>
<li class="nav-item"><a href="/sartlar" class="nav-link px-2 text-body-secondary">Şartlar</a></li>
<li class="nav-item"><a href="/portal/Communication" class="nav-link px-2 text-body-secondary">İletişim</a></li>
<li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Çıkış</a></li>

</ul>
</footer>
</div>



</div>

    </>
  );
}

export default SifreGuncelle;
