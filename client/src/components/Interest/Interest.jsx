import Interested from '../../assets/svg/card-2-svgrepo-com.svg'
const Interest = () => {
  return (
    <>
        <div className="free-interest">
            <img src={Interested} alt="" />
          <div className="interest-text">
            <p className='interest-p'>Hasta 3 coutas in interes</p>
            <a>ver mas detalles</a>
          </div>
        </div>
    </>
  )
}

export default Interest