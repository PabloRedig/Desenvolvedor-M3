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
                        <label><input type="checkbox" name="" id="" />Cores</label>
                        <label><input type="checkbox" name="" id="" />Cores</label>
                        <label><input type="checkbox" name="" id="" />Cores</label>
                        <label><input type="checkbox" name="" id="" />Cores</label>
                        <label><input type="checkbox" name="" id="" />Cores</label>
                        <label><input type="checkbox" name="" id="" />Cores</label>
                        <label><input type="checkbox" name="" id="" />Cores</label>
                        <label><input type="checkbox" name="" id="" />Cores</label>
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
                        <label><input type="checkbox" name="" id="" />Preço</label>
                        <label><input type="checkbox" name="" id="" />Preço</label>
                        <label><input type="checkbox" name="" id="" />Preço</label>
                        <label><input type="checkbox" name="" id="" />Preço</label>
                    </details>
                </div>
            </div>


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
