import React from 'react';
import {ImgItems} from "./components/ImgItems"
import './Home.css';

function Home(){
    return(
        <div>
            <h1>Proizvodi</h1>
            <div className="products">
            {ImgItems.map((item, index) => {
                        return (
                            <div className="product">
                            <img className={item.cName} src={item.url} alt=""/>
                            <div className="product-info">{item.cena}</div>
                            </div>
                        )
                    })}

              </div>
        </div>
    )
}

export default Home;