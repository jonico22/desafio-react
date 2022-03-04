import img03 from '../../assets/image-03.svg'

const Step03 = ({user})=>{
    return (
        <>
            <section className='grid step03'>
                <article className='step03__image grid__col-offset-1 grid__col-12'>
                    <img src={img03} alt="" />
                </article>
                <article className='step03__message grid__col-offset-17 grid__col-15'>
                    <h5>
                        <span>¡Te damos la bienvenida!</span> <br />
                        Cuenta con nosotros para <br />
                         proteger tu vehículo
                    </h5>
                    <p>Enviaremos la confirmación de compra de tu Plan
                         Vehícular Tracking <br /> a tu correo:
                    </p>
                    <strong>{user.email}</strong>
                    <button>cómo usar mi seguro</button>
                </article>
            </section>
        </>
    )
}

export default Step03