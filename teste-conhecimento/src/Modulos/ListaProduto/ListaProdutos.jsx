import React, { useState, useEffect } from 'react';
import style from "./listaProduto.module.scss";

//import provisorio
import imagem from "../../img/img_6.png";

const ApiComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/products'); // Substitua pela URL da sua API
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData();
    }, []);

    return <>
        <div className={style.Container}>
            <div className={style.Produtos}>
                {data.map(produto => (
                    < div className={style.Card}>
                        <img src={imagem} alt={`Imagem ${produto.name}`} />
                        <label className={style.Card__Name} >{produto.name}</label>
                        <label className={style.Card__Valor} >{`R$ ${produto.price}`}</label>
                        <label className={style.Card__Parcela} >{produto.parcelamento}</label>
                        <button className={style.btn}>COMPRAR</button>
                    </div>
                ))}
            </div>

            <button className={style.btn__CarregarMais}>CARREGAR MAIS</button>
        </div>
    </>

}; export default ApiComponent;