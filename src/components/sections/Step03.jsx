import img03 from '../../assets/image-03.svg'
import img03res from '../../assets/image-03-responsive.svg'
import useMediaQuery from 'react-hook-media-query'

const Step03 = ({ user }) => {
    const small = useMediaQuery('(max-width: 480px)')
    return (
        <>
            <section className='grid step03'>
                <article className={small ? 'step03__image grid__col-offset-1 grid__col-37' : 'step03__image grid__col-offset-1 grid__col-12'}>
                    {
                        small ? <img src={img03res} alt="" /> : <img src={img03} alt="" />
                    }
                </article>
                <article
                    className={small ? 'step03__message grid__col-offset-1 grid__col-37' : 'step03__message grid__col-offset-17 grid__col-15'}
                >
                    <h5>
                        <span>¡Te damos la bienvenida!</span> <br />
                        Cuenta con nosotros para <br />
                        proteger tu vehículo
                    </h5>
                    <p>Enviaremos la confirmación de compra de tu Plan
                        Vehícular Tracking  a tu correo: <br />
                    </p>
                    <strong>{user.email}</strong>
                    <button>cómo usar mi seguro</button>
                </article>
            </section>
        </>
    )
}

export default Step03