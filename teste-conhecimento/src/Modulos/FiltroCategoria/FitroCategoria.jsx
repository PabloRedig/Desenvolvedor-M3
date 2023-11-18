import React from 'react';
import style from "./FiltroCategoria.module.scss";

export default function FitroCategoria() {
    return <>
        <div className={style.filtrar_E_Ordenar}>
            <h1>Blusas</h1>

            <div className={style.Filtro}>FitroCategoria</div>
            <div className={style.ordernar}>
                <select name="" id="">
                    <option value="">Ordernar</option>
                    <option value="">Mais Recente</option>
                    <option value="">Menor Preço</option>
                    <option value="">Maior Preço</option>
                </select>
            </div>
        </div>
    </>

}
