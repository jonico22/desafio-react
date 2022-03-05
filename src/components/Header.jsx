import logo from '../assets/logo.svg'
import fono from '../assets/icon_phone.png'
import useMediaQuery from 'react-hook-media-query'

const Header = ()=>{
    const small = useMediaQuery('(max-width: 480px)')
    return (
        <>
        <header className='grid'>
            <div className={` grid__col-offset-1 ${ small ? 'grid__col-5' : 'grid__col-3'} `}>
                <a href="/" >
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className={`${ small ? 'grid__col-offset-25 grid__col-10':'grid__col-offset-28 grid__col-9' } `}>
                <div className="contact">
                    {
                        small ? 
                        <>
                            <img src={fono} alt="telefono" />
                            <span className='contact__number'>
                            Llámanos
                            </span>
                        </>
                        :
                        <>
                            <span className='contact__text'> ¿Tienes alguna duda? </span>
                            <img src={fono} alt="telefono" />
                            <span className='contact__number'>
                                (01) 411 6001 
                            </span>
                        </>
                    }
                    
                </div>
            </div>
            
        </header>
        </>
    )
}

export default Header