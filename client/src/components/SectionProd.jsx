import CardProduct from "./Card/CardProduct"

import Mate from '../assets/img/sections/matePortada.jpeg'
import Bombilla from '../assets/img/sections/BombillaPortada.jpg' 
import StaleyPortada from '../assets/img/sections/StaleyPortada.jpg'
import AccesoriosPortada from '../assets/img/sections/AccesoriosPortada.jpg'
import YerberaPortada from '../assets/img/sections/YerberaPortada.jpeg'
import TermosPortada from '../assets/img/sections/TermosPortada.jpeg'
const SectionProd = () => {
  return (
    <>
        <section className="products-container">
            <div className="cont-product">
                <CardProduct title={'Mates'} img={Mate} ruta={'/productos/categoria/mates'}/>
                <CardProduct  title={'Bombillas'} img={Bombilla}
                ruta={'/productos/categoria/bombillas'}
                />
                <CardProduct  title={'Stanley'} img={StaleyPortada}
                ruta={'/productos/categoria/stanley'}
                />
                <CardProduct  title={'Accesorios'} img={AccesoriosPortada}
                ruta={'/productos/categoria/accesorios'}
                />
                <CardProduct  title={'Yerberos'} img={YerberaPortada}
                ruta={'/productos/categoria/yerberos'}
                />
                <CardProduct  title={'Termos'} img={TermosPortada}
                ruta={'/productos/categoria/termos'}
                />
            </div>
        </section>
    </>
  )
}

export default SectionProd