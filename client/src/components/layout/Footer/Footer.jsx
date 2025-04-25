import Button from '../../Button/Button';
import Logo from '../../../assets/img/Logo.png' 
import Facebook from '../../../assets/svg/facebook.com.svg'
import Whatsapp from '../../../assets/svg/whatsapp.com.svg'
import Instagram from '../../../assets/svg/instagram.com.svg'
const Footer = () => {
  return (
    <>
    <footer>
    <div className="position-footer-image">
        <div className="img-footer">
            	<img src={Logo} alt="" />
        </div>
    </div>
        <div className="footer-content">
            <div className="footer-section">
                <h3 className='text-primary'>Sobre nosotros</h3>
                <p>En <span>Entre Amigos</span>, nos dedicamos a crear mates artesanales de alta calidad, fusionando tradición y diseño único. Cada pieza es elaborada con pasión, garantizando una experiencia auténtica para los amantes del mate.</p>
            </div>
            <div className="footer-section">
                <h3 className='text-primary'>Contacto</h3>
                <p>Email: info@entreamigos.com</p>
                <p>Telefono: +54 (555) 123-4567</p>
                <div className="social-media">
                    <a  target="_blank">
                        <img src={Facebook} alt="" />
                    </a>
                    <a  target="_blank">
                        <img src={Whatsapp} alt="" />
                    </a>
                    <a  target="_blank">
                        <img src={Instagram} alt="" />
                    </a>
                </div>
            </div>
            <div className="footer-section newsletter">
                <h3 className='text-primary'>Hoja informativa</h3>
                <p>Suscríbete a nuestro boletín para mantenerte actualizado sobre nuestras últimas noticias y ofertas.</p>
                <input type="email" placeholder="Ingresá tu correo" required/>
               <Button text={'Suscribirse'}/>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; <span id="year"></span> Entre Amigos. All rights reserved.</p>
        </div>
    </footer>
    </>
  )
}

export default Footer