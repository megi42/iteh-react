import React from 'react';
import Form from './components/Form';

function Contact(){
    const kontakt={
        adresa: "Bulevar Mihajla Pupina 10, Beograd",
        telefon: "069/295-48-29"
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

            
            
            <h4>Ukoliko imate bilo kakva pitanja, tu smo na raspolaganju.</h4>
            <p>Možete nas kontaktirati na {kontakt.telefon} ili posetiti u našoj radnji na adresi {kontakt.adresa}.</p>
            
            <p>Naša obuća je namenjena devojčicama od 4 do 14 godina. U pitanju je obuća visokog kvaliteta, rađena po poslednjoj modi.</p>
            <h4>Čekamo vas!</h4>

            <br></br>

    
            
        </div>
    )
}

export default Contact;