import Image from "next/image";
import {satoshi} from "@/app/ui/fonts";
import Link from "next/link";

export default function Home() {

    const categories = [
        {name: "Laptops", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
        {name: "Smartphones", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
        {name: "Tablets", image: "https://images.unsplash.com/photo-1512495995330-1eabf0bfbf06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
        {name: "Accessories", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    ];

  return (
    <div className="flex flex-col gap-10  min-h-screen min-w-full items-center justify-center bg-cream pl-5 pr-5">
      <section className={`flex flex-col items-center justify-center p-10 gap-4 bg-gray rounded-4xl shadow-2xl`}>
          <article className={`flex items-center justify-center gap-20 flex-1`}>
              <div className="w-fit lg:w-1/2  flex justify-end">
                  <Image src={"./logo.svg"} alt={"Prueba"} width={400} height={400}/>
              </div>
              <div className={`w-fit lg:w-1/2 flex flex-col items-center justify-start gap-10 p-10`}>
                  <h2 className={`${satoshi.className} text-blue font-black text-6xl text-center w-3/4x `}>Tecnologia para todos</h2>
                  <h3 className={`${satoshi.className} text-blue-100 font-bold text-xl text-center w-3/4`}>
                      Equipos de calidad profesional a precios justos.
                  </h3>
                  <p className={`${satoshi.className} text-blue font-normal text-lg text-justify w-3/4`}>
                      En TecnoShop, creemos que la tecnología de calidad debería ser accesible para todos. Por eso, ofrecemos una amplia gama de productos tecnológicos a precios justos, sin comprometer la calidad.
                  </p>
              </div>
          </article>
          <div className="flex flex-row w-full justify-evenly items-center gap-4">
              <button type={"submit"} className={"bg-blue flex items-center justify-center rounded-full p-1 hover:bg-orange transition-colors duration-300"}>
                    <h3 className={`${satoshi.className} text-cream font-bold text-lg text-center max-w-[80%]`}>
                        Explora nuestros productos
                    </h3>
              </button>
              <button type={"submit"} className={"bg-blue flex items-center justify-center rounded-full p-5 hover:bg-orange transition-colors duration-300"}>
                     <h3 className={`${satoshi.className} text-cream font-bold text-lg text-center w-40 `}>
                            Ver más
                     </h3>
              </button>
          </div>
        </section>

        <section className={`w-full flex flex-col  items-center justify-center p-5 gap-10 `}>

            <h2 className={`flex justify-start text-4xl w-full ${satoshi.className} text-blue font-black`}>
                Categorias más destacadas
            </h2>
            <div className={`flex flex-col lg:flex-row gap-4`}>
                {categories.map((category) => (
                    <div key={category.name}
                         className="relative flex flex-col text-gray-700 bg-blue-50 shadow-2xl bg-clip-border rounded-xl w-70 h-100 hover:h-110 transition-all duration-300 ease-in-out">
                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                            <Image
                                src = {"/auriculares.jpg"}
                                alt={"card-image"}
                                width={100}
                                height={100}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-4">
                            <div className={`flex items-center justify-center mb-2`}>
                                <p className={`block ${satoshi.className} text-base antialiased font-bold  text-blue-gray-900`}>
                                    {category.name}
                                </p>
                            </div>
                            <button type={"submit"} className={`w-full bg-blue rounded-lg p-2 hover:bg-orange transition-colors duration-300 ease-in-out">`}>
                                <p className={`block ${satoshi.className} text-base antialiased font-bold  text-cream`}>
                                    Ir a la sección
                                </p>
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </section>
        <section className={`w-full`}>
            <div className={`w-full flex flex-col  items-center justify-center p-10 gap-4 `}>
                <h2  className={`${satoshi.className} text-4xl text-blue font-black justify-start w-full`}>
                    Lo que dicen nuestros clientes
                </h2>
                <div className={`flex w-full flex-row items-center justify-between p-2 gap-10 `}>

                    <p className={`${satoshi.className} text-gray`}>Mas de 460 Reviews</p>
                    <button className={`bg-blue rounded-lg p-2 hover:bg-orange transition-colors duration-300 ease-in-out ${satoshi.className} text-cream font-bold text-lg`}>
                        Ver opiniones
                    </button>
                </div>
            </div>
            {}

        </section>

        <footer className={`bg-orange w-full rounded-xl flex flex-col items-center justify-center p-5 gap-4`}>
            <div className={`flex flex-row  gap-10 justify-start w-full p-10`}>
                <ul className={`${satoshi.className} flex flex-col justify-center p-5 gap-3`}>
                    <h4 className={`text-blue font-bold text-lg`}>
                        Compañia
                    </h4>
                    <li>
                        <Link href={"./about"} className={`text-lg  text-cream font-normal`}>
                            Sobre nosotros
                        </Link>
                    </li>
                    <li>
                        <Link href={"./contact"} className={`text-lg text-cream font-normal`}>
                            contáctanos
                        </Link>
                    </li>
                    <li>
                        <Link href={"./careers"} className={`text-lg text-center text-cream font-normal`}>
                            Trabaja con nosotros
                        </Link>
                    </li>
                </ul>
                <ul className={`${satoshi.className} flex flex-col justify-center p-5 gap-3`}>
                    <h4 className={`text-blue text-lg font-bold`}>
                        Ayuda
                    </h4>
                    <li>
                        <Link href={"./help"} className={`text-lg  text-cream font-normal`}>
                            Centro de ayuda
                        </Link>
                    </li>
                    <li>
                        <Link href={"./shipping"} className={`text-lg text-cream font-normal`}>
                            Envíos y devoluciones
                        </Link>
                    </li>
                    <li>
                        <Link href={"./faq"} className={`text-lg text-center text-cream font-normal`}>
                            Preguntas frecuentes
                        </Link>
                    </li>
                </ul>
                <ul className={`${satoshi.className} flex flex-col justify-center p-5 gap-3`}>
                    <h4 className={`text-blue font-bold text-lg`}>
                        Legal
                    </h4>
                    <li>
                        <Link href={"./privacy"} className={`text-lg  text-cream font-normal`}>
                            Política de privacidad
                        </Link>
                    </li>
                    <li>
                        <Link href={"./terms"} className={`text-lg text-cream font-normal`}>
                            Términos de servicio
                        </Link>
                    </li>
                    <li>
                        <Link href={"./cookies"} className={`text-lg text-cream font-normal`}>
                            Política de cookies
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={`flex items-center justify-between w-full gap-4 p-10`}>
                <p className={`block ${satoshi.className} text-base antialiased font-bold  text-blue-gray-900`}>
                    © 2024 TecnoShop. Todos los derechos reservados.
                </p>
                <p className={`block ${satoshi.className} text-base antialiased font-bold  text-blue-gray-900`}>
                    Política de privacidad | Términos de servicio
                </p>
            </div>

        </footer>


    </div>
);
}
