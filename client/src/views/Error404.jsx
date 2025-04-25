
import Button from "../components/Button/Button"
import Logo from '../assets/img/404Logo.png'
const Error404 = () => {
  return (
    <>
    <div className="w-full h-full flex flex-col mx-auto size-full bg-white">
  <header className="h-full w-full flex justify-center z-50  py-4">
    <nav className="px-4 sm:px-6 lg:px-8">
      <a className="flex text-xl text-[#1c5a36] font-semibold sm:text-3xl" aria-label="Brand">Entre Amigos</a>
    </nav>
  </header>
  <main id="content h-full w-full">
    <div className="text-center py-10 h-full w-full  px-4 sm:px-6 lg:px-8">
      <div className="text-center flex justify-center w-full">
        <img src={Logo} alt="" />
        </div>
      <p className="mt-3 text-gray-600">Oops, Algo salió mal.</p>
      <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
      <Button text={"Volver al inicio"} ruta={"/"} />
      </div>
    </div>
  <section className="mt-auto text-center bottom-0 fixed py-5">
  <div className="flex w-[100%] justify-center mx-[auto] text-center footer-bottom">
            <p className="text-center">&copy;Entre Amigos. All rights reserved.</p>
        </div>
  </section>
  </main>
</div>
    </>
  )
}

export default Error404