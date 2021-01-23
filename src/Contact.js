import React from 'react';
import Form from './components/Form';

function Contact(){
    const kontakt={
        adresa: "Tuzlanska 12",
        telefon: "061/6448004"
    }
    return(
        <div>
            <br></br>
            <br></br>
            <Form/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            

            <h4>Ukoliko su Vam potrebe neke dodatne informacije, budite slobodni da nas kontaktirate.</h4>
            <p>Možete nas kontaktirati na {kontakt.telefon} ili posetiti naš prodajni objekat na adresi {kontakt.adresa}</p>
            <br></br>

    
            
        </div>
    )
}

export default Contact;