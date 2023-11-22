import React, { useState, useEffect } from 'react';
import style from "./listaProduto.module.scss";

//import provisorio
import imagem from "../../img/img_6.png";
import Cabecalho from '../Cabecalho/cabecalho';

const ApiComponent = (props) => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/products');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData();
    }, []);

    const handleLoadMore = () => {
        setShowAll(!showAll);
    };

    const handleAddToCart = (produto) => {
        setCart([...cart, produto]);
        setCartCount(cartCount + 1);
    };

    const handleRemoveFromCart = (produto) => {
        const updatedCart = cart.filter((item) => item !== produto);
        setCart(updatedCart);
        setCartCount(cartCount - 1);
    };

    const displayedData = showAll ? data : data.slice(0, 9);

    return (<>

        <Cabecalho cartCount={cartCount} />
        <div className={style.Container}>
            <div className={style.Produtos}>
                {displayedData.map((produto, index) => (
                    <div key={index} className={style.Card}>
                        <img src={imagem} alt={`Imagem ${produto.name}`} />
                        <label className={style.Card__Name}>{produto.name}</label>
                        <label className={style.Card__Valor}>{`R$ ${produto.price}`}</label>
                        <label className={style.Card__Parcela}>{produto.parcelamento}</label>
                        <button className={style.btn} onClick={() => handleAddToCart(produto)}>
                            COMPRAR
                        </button>
                        {cart.includes(produto) && (
                            <button className={style.btn} onClick={() => handleRemoveFromCart(produto)}>
                                REMOVER DO CARRINHO
                            </button>
                        )}
                    </div>
                ))}
            </div>

            <button className={style.btn__CarregarMais} onClick={handleLoadMore}>
                {showAll ? 'MOSTRAR MENOS' : 'CARREGAR MAIS'}
            </button>
        </div>
    </>
    );
};

export default ApiComponent;