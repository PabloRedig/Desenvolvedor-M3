import React from 'react'
import imagem_logo from "../../img/logo-m3.png"
import bolsa_item from "../../img/bolsa-item.png"
import style from "./cabecalho.module.scss"

export default function Cabecalho({cartCount}) {
    return (
        <div className={style.Cabecalho}>
            <div className={style.logo}>
                <img src={imagem_logo} alt="Logo M3" />
            </div>
            <div className={style.carrinho}>
                <img src={bolsa_item} alt="Bolsa Item" />
                <div className={style.contador}> {cartCount} </div>
            </div>
        </div>
    )
}
