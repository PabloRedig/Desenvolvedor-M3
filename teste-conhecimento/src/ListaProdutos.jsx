import React, { useState, useEffect } from 'react';

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

    return (
        <div>

            <div>
                {data.map(produto => (
                    < div className={"Card"}>
                        <br /><br />

                        <br /><br />
                        <img src={produto.image} alt={`Imagem ${produto.name}`} />
                        <br />
                        <label className={""} >{produto.name}</label>
                        <br />
                        <label className={""} >{produto.price}</label>
                        <br />
                        <label className={""} >{produto.parcelamento}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}; export default ApiComponent;