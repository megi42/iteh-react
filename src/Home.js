import React from 'react';
import {ImgItems} from "./components/ImgItems"
import './Home.css';

function Home(){
    return(
        <div>
            <br>
            </br>
            <h2>Kolekcija jesen/zima za male princeze</h2>
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