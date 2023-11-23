import React from 'react';
import style from "./FiltroCategoria.module.scss";

export default function FitroCategoria() {
    return <>
        <div className={style.filtrar_E_Ordenar}>
            <h1>Blusas</h1>

            <div className={style.Filtro}>
                <div>
                    <details className={style.categoria_Cores}>
                        <summary>CORES</summary>
                        <label><input type="checkbox" name="" id="" /> Amarelo</label>
                        <label><input type="checkbox" name="" id="" /> Azul</label>
                        <label><input type="checkbox" name="" id="" /> Branco</label>
                        <label><input type="checkbox" name="" id="" /> Cinza</label>
                        <label><input type="checkbox" name="" id="" /> laranja</label>
                        <label><input type="checkbox" name="" id="" /> Verde</label>
                        <label><input type="checkbox" name="" id="" /> Vermelho</label>
                        <label><input type="checkbox" name="" id="" /> preto</label>
                        <label><input type="checkbox" name="" id="" /> Rosa</label>
                        <label><input type="checkbox" name="" id="" /> Vinho</label>
                    </details>
                </div>


                <details>
                    <summary>TAMANHO</summary>
                    <div className={style.categoria_Tamanho}>
                        <div className={style.bloco_tamanho}> P </div>
                        <div className={style.bloco_tamanho}> M </div>
                        <div className={style.bloco_tamanho}> G </div>
                        <div className={style.bloco_tamanho}> GG </div>
                        <div className={style.bloco_tamanho}> U </div>
                        <div className={style.bloco_tamanho}> 36 </div>
                        <div className={style.bloco_tamanho}> 38 </div>
                        <div className={style.bloco_tamanho}> 40 </div>
                        <div className={style.bloco_tamanho}> 36 </div>
                        <div className={style.bloco_tamanho}> 38 </div>
                        <div className={style.bloco_tamanho}> 40 </div>
                    </div>
                </details>


                <div >
                    <details className={style.categoria_Cores}>
                        <summary>PREÇO</summary>
                        <label><input type="checkbox" name="" id="" /> de R$0,00 Até R$50,00</label>
                        <label><input type="checkbox" name="" id="" /> de R$51,00 Até R$150,00</label>
                        <label><input type="checkbox" name="" id="" /> de R$151,00 Até R$300,00</label>
                        <label><input type="checkbox" name="" id="" /> de R$301,00Até R$500,00</label>
                        <label><input type="checkbox" name="" id="" /> A partir de R$500,00</label>
                    </details>
                </div>
            </div>


            <div className={style.ordernar}>
                <select className={style.opc} name="" id="">
                    <option value="">Ordernar</option>
                    <option value="">Mais Recente</option>
                    <option value="">Menor Preço</option>
                    <option value="">Maior Preço</option>
                </select>
            </div>

            <div className={style.btnFiltro_Ordenar}>
                <button> FILTRAR </button>
                <button> ORDENAR </button>
            </div>
        </div>
    </>

}
