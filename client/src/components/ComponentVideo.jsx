import Mate_Del_Rey from '../assets/video/LA_MATERA_DEL_REY.mp4'

const ComponentVideo = () => {
  return (
    <div className='container-video'>
        <video 
        autoPlay 
        loop
        muted
        >
            <source src={Mate_Del_Rey} type="video/mp4" />
        </video>
    </div>
  )
}

export default ComponentVideo