import '../style/Banner.css'
import logo from '../assets/logo.png'

function Banner(){
    return (
    <div className="lmj-banner">
        <img src={logo} alt='la maison jungle' className='lmj-logo'/>
        <h1 className='lmj-title'>La maison jungle</h1>
    </div>)
}

export default Banner