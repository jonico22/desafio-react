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
import React, { useState, useEffect } from "react"
import icon_check from '../../assets/icon_check.png'
import rectangulo from '../../assets/rectangulo.png'

import useMediaQuery from 'react-hook-media-query'
import icon_on_res from '../../assets/On.png'
import icon_off_res from '../../assets/Off.png'

const Step02 = ({ back, user, car, next }) => {
    const small = useMediaQuery('(max-width: 480px)')
    const [sumTotal, setSumTotal] = useState(0)
    const [amountTotal, setAmountTotal] = useState(0)

    const [btnAddLlanta, setBtnAddLlanta] = useState(false)
    const [btnAddChoque, setBtnAddChoque] = useState(true)
    const [btnAddAtropello, setBtnAddAtropello] = useState(true)

    const [btnAddLlantaRes, setBtnAddLlantaRes] = useState(false)
    const [btnAddChoqueRes, setBtnAddChoqueRes] = useState(true)
    const [btnAddAtropelloRes, setBtnAddAtropelloRes] = useState(true)

    const addSum = () => {
        if (sumTotal <= 16499) {
            setSumTotal(sumTotal + 100)
        }
    }
    const removeSum = () => {
        if (sumTotal >= 12501) {
            setSumTotal(sumTotal - 100)
        }
    }

    const btnLlanta = () => {
        let total = btnAddLlanta ? amountTotal + 15 : amountTotal - 15
        setAmountTotal(total)
        setBtnAddLlanta(btnAddLlanta ? false : true)
    }

    const btnChoque = () => {
        let total = btnAddChoque ? amountTotal + 20 : amountTotal - 20
        setAmountTotal(total)
        setBtnAddChoque(btnAddChoque ? false : true)
    }

    const btnAtropello = () => {
        let total = btnAddAtropello ? amountTotal + 50 : amountTotal - 50
        setAmountTotal(total)
        setBtnAddAtropello(btnAddAtropello ? false : true)
    }

    const btnLlantaRes = () => {
        let total = btnAddLlantaRes ? amountTotal + 15 : amountTotal - 15
        setAmountTotal(total)
        setBtnAddLlantaRes(btnAddLlantaRes ? false : true)
    }

    const btnChoqueRes = () => {
        let total = btnAddChoqueRes ? amountTotal + 20 : amountTotal - 20
        setAmountTotal(total)
        setBtnAddChoqueRes(btnAddChoqueRes ? false : true)
    }

    const btnAtropelloRes = () => {
        let total = btnAddAtropelloRes ? amountTotal + 50 : amountTotal - 50
        setAmountTotal(total)
        setBtnAddAtropelloRes(btnAddAtropelloRes ? false : true)
    }

    useEffect(() => {
        setSumTotal(14300)
        setAmountTotal(35)
    }, [])
    return (
        <>
            <section className="grid step02">
                <article
                    className={small ? 'step02__info grid__col-offset-1 grid__col-37' : 'step02__info grid__col-offset-1 grid__col-5'}
                >
                    <ul>
                        {
                            small ?
                                <>
                                    <li className='step02__info-responsive' >
                                        <button className='step02__detail-back' onClick={back}>
                                            <img src={icon_back} alt="" />
                                        </button>
                                        <span>Paso 2 de 2</span>
                                        <img src={rectangulo} alt="" className='image-info' />
                                    </li>

                                </> :
                                <>
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
                                </>
                        }

                    </ul>
                </article>
                <article
                    className={small ? 'step02__detail grid__col-offset-1 grid__col-37' : 'step02__detail grid__col-offset-13 grid__col-12'}
                >
                    {
                        !small && <button className='step02__detail-back' onClick={back}>
                            <img src={icon_back} alt="" />
                            <span>VOLVER</span>
                        </button>
                    }
                    {
                        small ?
                            <div className='step02__detail-responsive'>
                                <h3 className='step02__detail-title'>
                                    Mira las coberturas
                                </h3>
                                <p>Conoce las coberturas para tu plan</p>
                                <div className='step02__detail-box'>
                                    <div className='box'>
                                        <span>Placa: {car.placa}</span>
                                        <strong>
                                            {car.name} <br />
                                            {car.color}
                                        </strong>
                                    </div>
                                    <img src={img02} alt="user" />
                                </div>
                            </div> :
                            <>
                                <h3 className='step02__detail-title'>¡Hola,
                                    <span> {user.name}!</span></h3>
                                <p>Conoce las coberturas para tu plan</p>
                                <div className='step02__detail-box'>
                                    <div className='box'>
                                        <span>Placa: {car.placa}</span>
                                        <strong>
                                            {car.name} <br />
                                            {car.color}
                                        </strong>
                                    </div>
                                    <img src={img02} alt="user" />
                                </div>
                            </>
                    }

                    <ul className='step02__detail-sum'>
                        <li>
                            <strong>Indica la suma asegurada</strong><br />
                            <span>
                                MIN $12,500 | MAX $16,500
                            </span>
                        </li>
                        <li>
                            <div className="box-sum">
                                <button onClick={() => removeSum()}> - </button>
                                <strong>$ {sumTotal}</strong>
                                <button onClick={() => addSum()}> + </button>
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
                                <strong >Llanta robada
                                    {
                                        small && <button onClick={() => btnLlantaRes()}>
                                            {
                                                btnAddLlantaRes ? <img src={icon_on_res} alt="" /> :
                                                    <img src={icon_off_res} alt="" />
                                            }
                                        </button>
                                    }

                                </strong>

                                {
                                    !small && <button onClick={() => btnLlanta()}>
                                        {
                                            btnAddLlanta ? <> <img src={icon_add} alt="" /> AGREGAR </> :
                                                <> <img src={icon_remove} alt="" /> QUITAR </>
                                        }
                                    </button>
                                }

                                <p>He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis
                                    y mucho más</p>
                            </div>
                        </li>
                        <li>
                            <img src={icon02} alt="" />
                            <div className='box-context'>
                                <strong >Choque y/o pasarte la luz <br />
                                    roja
                                    {
                                        small && <button onClick={() => btnChoqueRes()}>
                                            {
                                                btnAddChoqueRes ? <img src={icon_on_res} alt="" /> :
                                                    <img src={icon_off_res} alt="" />
                                            }
                                        </button>
                                    }

                                </strong>

                                {
                                    !small && <button onClick={() => btnChoque()}>
                                        {
                                            btnAddChoque ? <> <img src={icon_add} alt="" /> AGREGAR </> :
                                                <> <img src={icon_remove} alt="" /> QUITAR </>
                                        }
                                    </button>
                                }

                            </div>

                        </li>
                        <li>
                            <img src={icon03} alt="" />
                            <div className='box-context'>
                                <strong >
                                    <span>
                                        Atropello en la vía <br />
                                        Evitamiento
                                    </span>
                                    {
                                        small && <button onClick={() => btnAtropelloRes()}>
                                            {
                                                btnAddAtropelloRes ? <img src={icon_on_res} alt="" /> :
                                                    <img src={icon_off_res} alt="" />
                                            }
                                        </button>
                                    }
                                </strong>

                                {
                                    !small && <button onClick={() => btnAtropello()}>
                                        {
                                            btnAddAtropello ? <> <img src={icon_add} alt="" /> AGREGAR </> :
                                                <> <img src={icon_remove} alt="" /> QUITAR </>
                                        }
                                    </button>
                                }


                            </div>
                        </li>
                    </ul>
                </article>
                <article
                    className={small ? 'step02__finish grid__col-offset-1 grid__col-37' : 'step02__finish grid__col-offset-28 grid__col-7'}
                >
                    {
                        small ?
                            <ul className='step02__finish-responsive'>
                                <li>
                                    <strong className='step02__finish-amount'>${amountTotal}</strong>
                                    <span className='step02__finish-leyend'>mensuales</span>
                                </li>
                                <li>
                                    <button onClick={next} >LO QUIERO</button>
                                </li>
                            </ul>
                            :
                            <>
                                <strong className='step02__finish-text'>MONTO</strong>
                                <strong className='step02__finish-amount'>${amountTotal}</strong>
                                <span className='step02__finish-leyend'>mensuales</span>
                                <p>El precio incluye:</p>
                                <ul className='step02__finish-include'>
                                    <li>
                                        <img src={icon_check} alt="" />
                                        Llanta de respuesto
                                    </li>
                                    <li>
                                        <img src={icon_check} alt="" />
                                        Analisis de motor
                                    </li>
                                    <li>
                                        <img src={icon_check} alt="" />
                                        Aros gratis
                                    </li>
                                </ul>
                                <button onClick={next} >LO QUIERO</button>
                            </>
                    }

                </article>
            </section>
        </>
    )
}

export default Step02