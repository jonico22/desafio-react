import Form from '../Form'
import imgHome from '../../assets/home.svg'
import imgHomeRes from '../../assets/home-responsive.svg'
import useMediaQuery from 'react-hook-media-query'

const Step01 = ({ save }) => {
    const small = useMediaQuery('(max-width: 480px)')
    return (
        <>
            <section className="grid step01">
                <article
                    className={small ? 'grid__col-offset-1 grid__col-37 step01__info' : 'grid__col-offset-3 grid__col-14 step01__info'}
                >
                    <div className='fondo'></div>
                    {
                        small ?
                            <div className='img-home-responsive'>
                                <div>
                                    <strong>¡NUEVO!</strong>
                                    <h1>
                                        <span>Seguro </span> <br />
                                        Vehicular Tracking
                                    </h1>
                                    <p>
                                        Cuentanos donde le haras seguimiento a tu <br />
                                        seguro
                                    </p>
                                </div>
                                <img src={imgHomeRes} alt="" />
                            </div>
                            :
                            <>
                                <img src={imgHome} alt="" />
                                <strong>¡NUEVO!</strong>
                                <h1>
                                    <span>Seguro </span> <br />
                                    Vehicular Tracking
                                </h1>
                                <p>
                                    Cuentanos donde le haras seguimiento a tu <br />
                                    seguro
                                </p>
                            </>
                    }


                </article>
                <article
                    className={small ? 'grid__col-offset-1 grid__col-37 step01__form' : 'grid__col-offset-21 grid__col-9 step01__form'}
                >
                    <h2>Déjanos tus datos</h2>
                    <Form saveData={save} />
                </article>
            </section>
        </>
    )
}

export default Step01