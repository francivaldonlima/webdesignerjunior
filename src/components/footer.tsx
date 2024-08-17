import React from 'react';
import { FaDiscord, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo_HS from '../assets/Logo_HS.svg';
{/* https://www.figma.com/design/sepzKeitS2xEaHFLYkILEx/Projeto-Site-Pessoal-(Community)?node-id=83-46&t=k8gqmpfJyuOHfw5N-0 */}


const Footer: React.FC = () => {
    return (
        <footer className="bg-purple-900 text-white py-8">
            <div className="container mx-auto flex flex-col items-center">
            <div className="container mx-auto flex flex-col items-center">
            <div className="md:flex-grow md:justify-start">
                    <img src={Logo_HS} alt="Logo" className="h-16 md:flex-grow md:justify-start" />
                </div>


                </div>
                {/* Logo Logo_HS */}


                {/* Redes Sociais */}
                <div className="mb-4 text-center">
                    <h2 className="text-lg mb-2">Redes sociais:</h2>
                    <div className="flex space-x-8 justify-center">
                        <div className="flex flex-col items-center">
                            <FaDiscord className="h-8 w-8 mb-1" />
                            <p>#HelxSiena1734</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaInstagram className="h-8 w-8 mb-1" />
                            <p>@helxsiena</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <FaLinkedin className="h-8 w-8 mb-1" />
                            <p>Helena Siena</p>
                        </div>
                    </div>
                </div>

                {/* Linha divisória */}
                <div className="w-full border-t border-yellow-500 mt-4"></div>

                {/* Direitos reservados */}
                <div className="mt-4 text-center">
                    <p className="text-sm">
                        <span className="mr-1">©</span>
                        Helena Siena - Todos os direitos reservados - 2023
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
