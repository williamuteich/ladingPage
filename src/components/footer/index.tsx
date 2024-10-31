import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export function Footer() {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    return (
        <footer className="bg-black text-white pr-6 pl-6 flex justify-center mt-16 pt-10 pb-10">
            <div className="max-w-screen-xl w-full">
                <div className="flex flex-col md:flex-row justify-between text-center md:text-left gap-8 md:gap-24">
                    <div className="flex-1 mb-4 md:mb-0">
                        <h2 className="text-2xl mb-4 text-blue-900 font-bold">QuickShare</h2>
                        <p className="text-sm">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, eius quam deserunt dolore velit sit fugit exercitationem rem culpa facilis tempora quae commodi hic, molestias, incidunt possimus voluptatum qui animi!
                        </p>
                    </div>
                    <div className="flex-1 mb-4 md:mb-0">
                        <h2 className="text-2xl mb-4 font-bold">Contatos</h2>
                        <div className="text-sm flex flex-col items-center md:items-start">
                            <div className="flex items-center mb-1">
                                <FaPhone className="mr-2" /> (51) 99868-2733
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="mr-2" /> williamuteich14@gmail.com
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 mb-4 md:mb-0">
                        <h2 className="text-2xl mb-4 font-bold">Endereços</h2>
                        <div className="flex flex-col items-center md:items-start">
                            <div className="flex items-center mb-1">
                                <FaMapMarkerAlt className="mr-2" /> Ney da Gama 888
                            </div>
                            <span className="text-sm">De segunda à sexta das 9h às 20h</span>
                        </div>
                    </div>
                </div>
                <div className="mt-10 mb-10">
                    <iframe
                        title="Localização do Centro Administrativo Fernando Ferrari"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.8995818981034!2d-51.23365092365307!3d-30.039738631059706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95197902db512e4b%3A0xdde4f560d3d9d5b8!2sCentro%20Administrativo%20Fernando%20Ferrari!5e0!3m2!1spt-BR!2sbr!4v1730414535681!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <span className="text-xs text-gray-500 flex justify-center">
                    @{anoAtual} - todos os direitos reservados - QuickShare
                </span>
            </div>
        </footer>
    );
}
