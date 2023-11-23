import React, { useState } from 'react';
import style from "./FiltroCategoria.module.scss";
import imagem from "../../img/iconFechar.png";

export default function FiltroCategoria() {
    const [modalAberto, setModalAberto] = useState(false);
    const [modalOrdenar, setModalOrdenar] = useState(false);

    const handleClickToggleModal = () => {
        setModalAberto(!modalAberto);
    };

    const handleClickFecharModal = () => {
        setModalAberto(false);
    };

    const handleClickToggleModalOrdernar = () => {
        setModalOrdenar(!modalOrdenar);
    };

    const handleClickFecharModalOrdernar = () => {
        setModalOrdenar(false);
    };

    return (
        <>
            <div className={style.filtrar_E_Ordenar}>
                <h1>Blusas</h1>

                <div className={style.Filtro}>
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

                        <details className={style.categoria_Cores}>
                            <summary>PREÇO</summary>
                            <label><input type="checkbox" name="" id="" /> de R$0,00 Até R$50,00</label>
                            <label><input type="checkbox" name="" id="" /> de R$51,00 Até R$150,00</label>
                            <label><input type="checkbox" name="" id="" /> de R$151,00 Até R$300,00</label>
                            <label><input type="checkbox" name="" id="" /> de R$301,00Até R$500,00</label>
                            <label><input type="checkbox" name="" id="" /> A partir de R$500,00</label>
                        </details>
                    </div>


                <div className={style.ordernar}>
                    <select className={style.opc} name="" id="">
                        <option value="">Ordenar</option>
                        <option value="">Mais Recente</option>
                        <option value="">Menor Preço</option>
                        <option value="">Maior Preço</option>
                    </select>
                </div>

                <div className={style.btnFiltro_Ordenar}>
                    <button onClick={handleClickToggleModal}>FILTRAR</button>
                    <button onClick={handleClickToggleModalOrdernar}>ORDENAR</button>

                    <div className={`${style.Modal_Filtrar} ${modalAberto ? style.modalAberto : ''}`}>
                        <div className={style.header}>
                            <label>FILTRAR</label>
                            <img
                                src={imagem}
                                alt="Imagen X"
                                onClick={handleClickFecharModal} />
                        </div>

                        <details className={style.categoria_CoresModal}>
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

                        <details>
                            <summary>TAMANHO</summary>
                            <div className={style.categoria_TamanhoModal}>
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

                        <details className={style.categoria_CoresModal}>
                            <summary>PREÇO</summary>
                            <label><input type="checkbox" name="" id="" /> de R$0,00 Até R$50,00</label>
                            <label><input type="checkbox" name="" id="" /> de R$51,00 Até R$150,00</label>
                            <label><input type="checkbox" name="" id="" /> de R$151,00 Até R$300,00</label>
                            <label><input type="checkbox" name="" id="" /> de R$301,00Até R$500,00</label>
                            <label><input type="checkbox" name="" id="" /> A partir de R$500,00</label>
                        </details>
                    </div>

                    <div className={`${style.Modal_Ordenar} ${modalOrdenar ? style.modalOrdenar : ''} `}>
                        <div className={style.header}>
                            <label>ORDENAR</label>
                            <img
                                src={imagem}
                                alt="Imagen X"
                                onClick={handleClickFecharModalOrdernar} />
                        </div>
                        <div className={style.BlocoOrdenar}>
                            <label htmlFor="">Mais Recente</label>
                            <label htmlFor="">Maior Preço</label>
                            <label htmlFor="">Menor Preço</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
