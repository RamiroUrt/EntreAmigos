import CustomSwiper from '../../../components/CustomSwipper';
import Card from '../../../components/Card/Card';

import data from '../../../assets/json/sections/ofert.json';





const Offers = () => {



  return (
    <>
        <section className="ofers-container">
            <h1 className='tittle tittle-section '>Ofertas de la semana...</h1>
            <CustomSwiper
                data={data}
                CardComponent={(props) => <Card {...props} />}
                swiperConfig={{
                    slidesPerView: 2,
                    spaceBetween: 20,
                    loop: true,
                    autoplay: { delay: 5000, disableOnInteraction: false },
                    navigation: true,
                    pagination: { clickable: true },
                }}
            />
        </section>
    </>
  )
}

export default Offers

