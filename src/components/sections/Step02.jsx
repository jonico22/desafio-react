import img02 from '../../assets/image-02.svg'
import icon01 from '../../assets/icon_llanta.svg'
import icon02 from '../../assets/icon_damage.svg'
import icon03 from '../../assets/icon_perdidatotal.svg'

import icon_dis from '../../assets/icon_dissable.png'
import icon_done from '../../assets/icon_done.png'
import icon_progress from '../../assets/icon-progress.png'
import icon_back from '../../assets/icon_back.png'

import icon_add from '../../assets/icon_add.png'
import icon_remove from '../../assets/icon_remove.png'
import React, {useState,useEffect} from "react"

const Step02 = ({back,user,car})=>{
    return (
        <>
        <section className="grid step02">
            <article className='step02__info grid__col-offset-1 grid__col-5'>
                <ul>
                    <li>
                        <img src={icon_dis} alt="" />
                        <span className='step02__info-text'>Datos</span> 
                    </li>
                    <li>
                        <img src={icon_progress} alt="" className='step02__info-progress' />
                    </li>
                    <li>
                        <img src={icon_done} alt="" />
                        <span>Arma tu plan</span>
                    </li>
                </ul>
            </article>
            <article className='step02__detail grid__col-offset-13 grid__col-12'>
                <button className='step02__detail-back' onClick={back}>
                    <img src={icon_back} alt="" /> 
                    <span>VOLVER</span> 
                </button>
                <h3 className='step02__detail-title'>¡Hola,  
                <span> {user.name}!</span></h3>
                <p>Conoce las coberturas para tu plan</p>
                <div className='step02__detail-box'>
                    <div className='box'>
                        <span>Placa: {car.placa}</span>
                        <strong>
                            {car.name} <br/>
                            {car.color}
                        </strong>
                    </div>
                    <img src={img02} alt="user" />
                </div>
                <ul className='step02__detail-sum'>
                    <li>
                        <strong>Indica la suma asegurada</strong><br />
                        <span>
                            MIN $12,500 | MAX $16,500
                        </span>
                    </li>
                    <li>
                        <div className="box-sum">
                            <button> - </button>
                            <strong>$ 14,300</strong>
                            <button> + </button>
                        </div>
                        
                    </li>
                </ul>
               
                <h4 className='step02__detail-add'>Agrega o quita coberturas</h4>
                <ul className='step02__detail-list'>
                    <li className='active'>Protege a <br />
                        tu auto</li>
                    <li>Protege a los <br />
                    que te rodeaN</li>
                    <li>mejora tu <br />
                    plAN</li>
                </ul>
                <ul className='step02__detail-options'>
                    <li>
                        <img src={icon01} alt="" />
                        <div className='box-context'>
                            <strong >Llanta robada</strong>
                            <button>
                                <img src={icon_remove} alt="" />
                                QUITAR</button>
                            <p>He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
                            y mucho más</p>
                        </div>
                    </li>
                    <li>
                        <img src={icon02} alt="" />
                        <div className='box-context'>
                            <strong >Choque y/o pasarte la luz <br />
                                 roja </strong>
                            <button>
                            <img src={icon_add} alt="" />
                                AGREGAR</button>
                        </div>
                        
                    </li>
                    <li>
                        <img src={icon03} alt="" />
                        <div className='box-context'>
                            <strong >Atropello en la vía <br />
                                 Evitamiento </strong>
                        <button>
                            <img src={icon_add} alt="" />
                                AGREGAR</button>
                        </div>
                    </li>
                </ul>
            </article>
            <article className='step02__finish grid__col-offset-28 grid__col-7'>
                <strong className='step02__finish-text'>MONTO</strong>
                <strong className='step02__finish-amount'>$35.00</strong>
                <span className='step02__finish-leyend'>mensuales</span>
                <p>El precio incluye:</p>
                <ul className='step02__finish-include'>
                    <li>Llanta de respuesto</li>
                    <li>Analisis de motor</li>
                    <li>Aros gratis</li>
                </ul>
                <button>LO QUIERO</button>
            </article>

        </section>
        </>
    )
}

export default Step02