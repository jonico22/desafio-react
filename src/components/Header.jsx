import logo from '../assets/logo.png'
import fono from '../assets/icon_phone.png'
const Header = ()=>{
    return (
        <>
        <header className='grid'>
            <div className='grid__col-offset-1  grid__col-3'>
                <a href="/" >
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className='grid__col-offset-28 grid__col-7'>
                <div className="contact">
                    <span className='contact__text'> ¿Tienes alguna duda? </span>
                    <img src={fono} alt="telefono" />
                    <span className='contact__number'>
                        (01) 411 6001 
                    </span>
                </div>
            </div>
            
        </header>
        </>
    )
}

export default Header