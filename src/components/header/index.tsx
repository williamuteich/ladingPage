import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaPhone, FaServicestack, FaUsers, FaHouseUser, FaBuilding, FaEnvelope } from 'react-icons/fa';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { BiMenu } from 'react-icons/bi';

const menuItems = [
    { name: 'Serviços', icon: <FaServicestack size={24} /> },
    { name: 'Quem Somos', icon: <FaUsers size={24} /> },
    { name: 'Limpeza Comercial', icon: <FaBuilding size={24} /> },
    { name: 'Limpeza Residencial', icon: <FaHouseUser size={24} /> },
    { name: 'Contato', icon: <FaEnvelope size={24} /> },
];

const socialLinks = [
    { name: 'WhatsApp', icon: <FaWhatsapp size={24} color='white'/>, href: "https://wa.me/51998682733" },
    { name: 'Instagram', icon: <FaInstagram size={24} color='white'/>, href: "https://www.instagram.com" },
    { name: 'Facebook', icon: <FaFacebook size={24} color='white'/>, href: "https://www.facebook.com" },
    { name: 'LinkedIn', icon: <FaLinkedin size={24} color='white'/>, href: "https://www.linkedin.com" },
    { name: 'Twitter', icon: <FaTwitter size={24} color='white'/>, href: "https://twitter.com" },
];

export function Header() {
    return (
        <header className="flex flex-col gap-1">
            <div className="bg-blue-900 w-full flex justify-center py-2 pr-6 pl-6">
                <div className="max-w-screen-xl w-full flex justify-between py-1 pb-1">
                    <span className='w-full text-white hidden sm:flex sm:items-center gap-2 -tracking-tight text-lg'>
                        <FaPhone size={24} className='text-xl text-white' />
                        (51) 99868-2733
                    </span>
                    <div className='w-full flex justify-end'>
                        {socialLinks.map(({ name, icon, href }) => (
                            <a key={name} href={href} className="mx-2" aria-label={name}>
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full flex items-center justify-center py-2 pb-2 pr-6 pl-6">
                <div className="max-w-screen-xl w-full flex justify-between lg:justify-start gap-24 items-center">
                    <div>
                        <img src="./logo.png" alt="quickshare" className="w-auto h-20 object rounded-md hover:cursor-pointer hover:scale-105 hover:transition-all" />
                    </div>

                    <nav className='hidden lg:flex gap-4'>
                        {['Serviços', 'Quem Somos', 'Limpeza Comercial', 'Limpeza Residencial', 'Contato'].map((item) => (
                            <a
                                key={item}
                                className='text-gray-600 font-normal border-b-2 border-transparent hover:border-b-2 hover:border-gray-600 transition-all'
                                href="#"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className='lg:hidden'>
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button>
                                    <BiMenu size={24} />
                                    <span className='sr-only'>abrir / fechar menu</span>
                                </Button>
                            </SheetTrigger>

                            <SheetContent>
                                <nav>
                                    {menuItems.map(({ name, icon }) => (
                                        <a
                                            key={name}
                                            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all py-2"
                                            href="#"
                                        >
                                            {icon}
                                            {name}
                                        </a>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
