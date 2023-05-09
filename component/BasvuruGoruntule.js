
import Sidebar from './Sidebar.js';
import React, {useState, useEffect} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import {AciklamaGoster} from '../functions/EngelAciklama.js'
import {useNavigate} from 'react-router-dom';



function BasvuruGoruntule(){

    const navigate = useNavigate();
    useEffect(() => {
      var isLogin = sessionStorage.getItem('isLogin');
      if (isLogin !== 'true') {
        navigate('/');
      }
    }, []);

    
    
    const [bilgi, setBilgi] = useState('');
    const [error, setError] = useState('');

    useEffect(()=>{

        const bilgiGetir = async () => {
            const ad = sessionStorage.getItem('ad');
            const soyad = sessionStorage.getItem('soyad');
            const DogumTarihi= sessionStorage.getItem('DogumTarihi');
            const cinsiyet = sessionStorage.getItem('cinsiyet');

            const EMail = sessionStorage.getItem('EMail');
            const TelNo= sessionStorage.getItem('TelNo');
            const Milliyet1 = sessionStorage.getItem('Milliyet1');
            const Milliyet2 = sessionStorage.getItem('Milliyet2');
            const TcPasapportNo = sessionStorage.getItem('TcPasapportNo');
            const  EngelDurum = sessionStorage.getItem('EngelDurum');
            const  EngelDurum_aciklama =  sessionStorage.getItem('EngelDurum_aciklama');

            const mezuniyetdurum =  sessionStorage.getItem('mezuniyetdurum');
            const mezuniyetTarih = sessionStorage.getItem('mezuniyetTarih');
            const ortalama = sessionStorage.getItem('ortalama');
            const universite = sessionStorage.getItem('universite');
            const fakulte = sessionStorage.getItem('fakulte');
            const bolum =  sessionStorage.getItem('bolum');
            const ulke = sessionStorage.getItem('ulke');
            const il =   sessionStorage.getItem('il');
            const ilce =sessionStorage.getItem('ilce');
            const postaKutusu =sessionStorage.getItem('postaKutusu');
            const mahalle = sessionStorage.getItem('mahalle');
            const adr_aciklama =sessionStorage.getItem('adr_aciklama');



            const cvbelge =sessionStorage.getItem('cvbelge');
            const niyetbelge =sessionStorage.getItem('niyetbelge');
            const pasaportbelge =sessionStorage.getItem('pasaportbelge');
            const ikametgahbelge = sessionStorage.getItem('ikametgahbelge');
            const diplomabelge = sessionStorage.getItem('diplomabelge');
            const ingyeterlilikbelge=sessionStorage.getItem('ingyeterlilikbelge');

     
        
            var Basvurubelgeler = {
                cvbelge,
                niyetbelge,
                pasaportbelge,
                ikametgahbelge,
                diplomabelge,
                ingyeterlilikbelge
              };
              sessionStorage.getItem(Basvurubelgeler,'Basvurubelgeler');
            
       



            
            setBilgi(prevState => ({
              ...prevState,
              ad,
              soyad,
              DogumTarihi,
              cinsiyet,
              EMail,
              TelNo,
              Milliyet1,
              Milliyet2,
              TcPasapportNo,
              EngelDurum,
              EngelDurum_aciklama,
              mezuniyetdurum,
              mezuniyetTarih,
              ortalama,
              universite,
              fakulte,
              bolum,
              ulke,
              il,
              ilce,
              postaKutusu,
              mahalle,
              adr_aciklama,
              cvbelge,
              niyetbelge,
              pasaportbelge,
              ikametgahbelge,
              diplomabelge,
              ingyeterlilikbelge,
              Basvurubelgeler,
          

      
            }));
          }
      bilgiGetir();
      
        },[])




    return(
        <div>
            <div id="basvurugoruntule_genel" className="col-4">
                <Sidebar 
                    gor_active="active" 
                    gor_disable="disabled" 
                    form_to="/portal/BasvuruFormu"
                    iletisim_to="/portal/Communication"
                    
                    />
            </div>
         
        
            <h3 class="app_yazi" id="app_yazi3" name="app_yazi3">  Başvuru Bilgileriniz</h3>



<hr />
            <form class="basvuru1" id="basvuru1" name="basvuru1" >


<div class="row" id="alan2" name="alan1">

    <div class="col-md-4" id="name" name="ad" >
        <label for="validationServer01">Ad</label>
        <input type="text" class="form-control" id="validationServer01" placeholder="Ad" 
         value = {bilgi.ad}
/>
        <div class="valid-feedback">

        </div>
    </div>

    <div class="col-md-4" id="soyad" name="soyad">
        <label for="validationServer02">Soyad</label>
        <input type="text" class="form-control" id="validationServer02"
           value={bilgi.soyad} 
       
        placeholder="Soyad" required />
        <div class="valid-feedback">

        </div>
    </div>

    <div class="col-md-4" id="DogumTarihi" name="DogumTarihi" >
        <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
            <label for="validationServer02">Doğum Tarihi</label>
            <input type='datetime' class="form-control" id='datepicker' 
               value={bilgi.DogumTarihi} 
           
            placeholder='Tarih' style={{ width: "320px" }} />

        </div>
    </div>



</div>

<div class="row" id="alan2" name="alan2">



    <div class="col-md-4" id="form_eposta" name="form_eposta">
        <label for="validationServer05" >E-Posta</label>
        <input type="email" class="form-control" id="validationServer05"
        
        value={bilgi.EMail} 
        name="validationServer05_1"
        
   
      
        placeholder="E-posta" required />
        <div class="valid-feedback">

        </div>


    </div>

    <div class="col-md-4" id="form_tel" name="form_tel">
        <label for="validationServer05">Telefon</label>
        <input type="text" class="form-control" id="validationServer05"
              value={bilgi.TelNo} 
        name="validationServer05_2" 
        

      
        placeholder="Telefon" required />
        <div class="invalid-feedback">

        </div>


    </div>
    <div class="col-md-4" id="drop_cinsiyet" name="cinsiyet" >


        <select id="ddlViewBy" name="ddlViewBy"
        
        value={bilgi.cinsiyet} 

        
        style={{ zIndex: "10", width: "60%", marginTop: "28px", marginLeft: "10px", borderRadius: "5px", border: "groove 0.2em green", textalign: "center", fontSize: "16px" }}>
            <option value="selected" class="cinsiyet" id="cinsiyet" 
            
            
            
            >Cinsiyet</option>
            <option value="2" >K</option>
            <option value="3">E</option>

        </select>



    </div>



</div>

<div class="row" id="alan2" name="alan2">


    <div class="col-md-4" id="form_millyet1" name="form_millyet1">
        <label for="validationServer05">Milliyet 1</label>
        <input type="text" class="form-control" id="validationServer05" name="validationServer05_3" 
        
        value={bilgi.Milliyet1} 
        placeholder="milliyet 1"
  

        
        required />
        <div class="invalid-feedback">

        </div>
    </div>

    <div class="col-md-4" id="form_millyet2" name="form_millyet2">
        <label for="validationServer05">Milliyet 2</label>
        <input type="text" class="form-control" id="validationServer05" name="validationServer05_4"
              value={bilgi.Milliyet2} 
        placeholder="milliyet 2"
        
     
        required />
        <div class="invalid-feedback">

        </div>


    </div>

    <div class="col-md-4" id="pasaport" name="pasaport">
        <label for="validationServer05"> TC Pasaport No</label>
        <input type="text" class="form-control" id="validationServer05" name="validationServer05_5"
        
        value={bilgi.TcPasapportNo} 
        placeholder="pasaport no"
        
   
     
        
        required />
        <div class="invalid-feedback">

        </div>
    </div>


</div>

<br />

<div class="row" id="alan3" name="alan3">


    <div class="col-md-4 ">
        <label for="engel" >Engel Durumu : </label>
        <div>
            <select class="form-control" id="engel" onLoad={()=> AciklamaGoster()}   >
            <option value={bilgi.EngelDurum}>{bilgi.EngelDurum}</option>
        
            </select>
        </div>
    </div>
    <div class="col-md-4 " id="aciklamaDiv" 
                        
                     
                        >
                            <label for="aciklama" 
                                    
                                      
                            
                            >Açıklama <em style={{ fontSize: "9pt" }}> (Varsa engel durumunuzu açıklayınız) : </em></label>
                            <input id ="icerik" type="text" value={bilgi.EngelDurum_aciklama} class="form-control"
                    
                            
                           required />
                        </div>



</div>



<div class="row" id="alan3" name="alan3">


  
                    <div class="col-md-4" id="form_mezuniyet_bilgi" name="form_mezuniyet_bilgi" value={bilgi.mezuniyetdurum}>


<select id="ddlViewBy" name="ddlViewBy"

    value={bilgi.mezuniyetdurum}


    style={{ zIndex: "10", width: "80%", height:"65%", borderRadius: "5px", border: "groove 0.2em green", textalign: "center", fontSize: "16px" ,marginTop:"7%" }}>
    <option value="1" selected="selected" class="mezuniyet" id="mezuniyet"



    >Mezuniyet durumu</option>
    <option value="2" >Mezun</option>
    <option value="3">Devam ediyor</option>

</select>

</div>




    <div class="col-md-4" id="form_mezuniyet" name="form_mezuniyet" >
        <div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
            <label for="validationServer05">Mezuniyet Tarihi</label>
            <input type='date' class="form-control" 
            
            value={bilgi.mezuniyetTarih}
            id='datepicker' name="datepicker" placeholder=' Mezuniyet Tarihiniz' style={{ zindex: "20", width: "100%", height: "40px", borderRadius: "5px", border: "groove 0.1em green" }} />

        </div>
    </div>

    <div class="col-md-4" id="form_ortalama" name="form_ortalama">
        <label for="validationServer02">Ortalama</label>

        <input type="text"
         class="form-control" id="validationServer02" name="validationServer02_5"
        
        value={bilgi.ortalama} 
        placeholder="Ortalamanız" required />
        <div class="valid-feedback">

        </div>
    </div>


</div>

<div class="row" id="alan4" name="alan4">

    <div class="col-md-4" id="form_uni" name="form_uni">

        <label for="validationServer02">Üniversite</label>

        <input type="text" class="form-control" id="validationServer02" name="validationServer02_2" 
        
        value={bilgi.universite} 
        placeholder="Üniversite adını girin" required />
        <div class="valid-feedback">
        </div>

    </div>


    <div class="col-md-4" id="form_fakulte" name="form_fakulte">

        <label for="validationServer02">Fakülte</label>

        <input type="text" class="form-control" id="validationServer02" name="validationServer02_3"
        value={bilgi.fakulte} 
        placeholder="Fakülte" required />
        <div class="valid-feedback">
        </div>

    </div>



    <div class="col-md-4" id="form_bolum" name="form_bolum">
        <label for="validationServer02">Bölüm</label>

        <input type="text" class="form-control" id="validationServer02" name="validationServer02_4" 
        
        value={bilgi.bolum} 
        placeholder="Bölümünüz" required />
        <div class="valid-feedback">

        </div>
    </div>





</div>




<div class="row" id="alan5" name="alan5">


    <div class="col-md-4" id="form_ulke" name="ulke">
        <label for="validationServer02">Ülke</label>

        <input type="text" class="form-control" 
        
        
        id="validationServer02" name="validationServer02_6"
        value={bilgi.ulke} 
        placeholder="Ülke" required />
        <div class="valid-feedback">

        </div>
    </div>



    <div class="col-md-4" id="il_ilce" name="il-ilce" >
        <label for="validationServer02">İl</label>
        <input type='text' name="iller"
        
        value={bilgi.il} 
        style={{ zindex: "20", backgroundColor: "#FFCBCB", width: "100%", height: "40px", borderRadius: "5px", border: "groove 0.1em green" }}/>


     

    </div>


    <div class="col-md-4" id="il_ilce" name="il-ilce">
        <label for="validationServer02">İlçe</label>
        <input type='text' id="Ilceler" name="ilceler"
        value={bilgi.ilce} 
        style={{ zindex: "20", backgroundColor: "#FFCBCB", width: "100%", height: "40px", borderRadius: "5px", border: " groove 0.1em green" }}/>
          
      

    </div>

</div>



<div class="row" id="alan7" name="alan7">

    <div class="col-md-4" id="form_posta_kutusu" name="form_posta_kutusu">
        <label for="validationServer02">Posta Kutusu</label>

        <input type="text" class="form-control is-valid" id="validationServer02" name="validationServer02_7"
        
        value={bilgi.postaKutusu}
        placeholder="Posta kutusu" required />
        <div class="valid-feedback">

        </div>
    </div>

    <div class="col-md-4" id="form_mahalle" name="form_mahalle">
        <label for="validationServer02">Mahalle</label>

        <input type="text" class="form-control is-valid" id="validationServer02" name="validationServer02_8"
        
        value={bilgi.mahalle}
        placeholder="Mahalle" required />
        <div class="valid-feedback">

        </div>
    </div>

    <div class="col-md-4" id="form_adres_aciklama" name="form_adres_aciklama">
        <label for="validationServer02">Adres Açıklama</label>

        <input type="text" class="form-control is-valid" id="validationServer02" name="validationServer02_9" 
        
        value={bilgi.adr_aciklama}
        placeholder="Detaylı belirtiniz" required />
        <div class="valid-feedback">

        </div>
    </div>

</div>


<div />



<div class="row" id="alan2" name="alan2">

    <div class="col-md-4" id="form_cv" name="form_cv">
        <label for="formFile" class="form-label">CV: </label>
        <input class="form-control" id="formFile"
        
    value={bilgi.cvbelge}
    
        
     
        name="form_cvFile" />
    </div>



    <div class="col-md-4" id="form_niyet_mektubu" name="form_niyet_mektubu">
        <label for="formFile" class="form-label">Niyet mektubu: </label>
        <input class="form-control"  id="formFile" 
         value={bilgi.niyetbelge}
        name="formniyetFile" />
    </div>


    <div class="col-md-4" id="form_pasaport" name="form_pasaport">
        <label for="formFile" class="form-label">Pasaport: </label>
        <input class="form-control"  id="formFile"
        
        value={bilgi.pasaportbelge}
        name="form_pasaportFile" />
    </div>


    <div class="col-md-4" id="form_ikamet" name="form_ikamet">
        <label for="formFile" class="form-label">İkametgah: </label>
        <input class="form-control" 
        
        value={bilgi.ikametgahbelge}
        id="formFile" name="form_ikametFile" />
    </div>


    <div class="col-md-4" id="form_diploma" name="form_diploma">
        <label for="formFile" class="form-label">Diploma: </label>
        <input class="form-control" id="formFile"
        
        value={bilgi.diplomabelge}
        name="form_diplomaFile" />
    </div>


    <div class="col-md-4" id="form_ing_yeterlilik" name="form_ing_yeterlilik">
        <label for="formFile" class="form-label">İngilizce Yeterlilik: </label>
        <input class="form-control"  id="formFile" 
        
        value={bilgi.ingyeterlilikbelge}
        name="form_ing_yeterlilik_File" />
    </div>

</div>




<br />
<Link to="/portal/BasvuruFormu">
  <button class="btn btn-primary" type="submit" style={{ marginLeft:"54%"}} id="basvuru_bitir" name="basvuru_bitir" >
    Forma dön
  </button> 
</Link>


</form>
 
            {error && <p style={{ color: 'red' }}>{error} </p>}
              
         
        </div>
    );

}

export default BasvuruGoruntule;