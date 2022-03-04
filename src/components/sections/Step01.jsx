import Form from '../Form'
import imgHome from '../../assets/home.svg'
const Step01 = ({save})=>{
    return (
        <>
        <section className="grid step01">
            <article className='grid__col-offset-3 grid__col-14 step01__info'>
                <div className='fondo'></div>
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
            </article>
            <article className='grid__col-offset-21 grid__col-9 step01__form'>
                <h2>Déjanos tus datos</h2>
                <Form saveData={save}/>
            </article>
        </section>
        </>
    )
}

export default Step01