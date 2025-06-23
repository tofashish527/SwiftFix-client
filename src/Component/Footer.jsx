// import React from 'react';
// import logoo from '../assets/img/logoo.png';
// import { FaSquareGithub } from 'react-icons/fa6';
// import { BsLinkedin } from 'react-icons/bs';
// import { FaFacebookSquare } from 'react-icons/fa';

// const Footer = () => {
//     return (
//         <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800">
// 	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
// 		<div className="lg:w-1/3">
// 			<a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
// 				<div className="flex items-center justify-center rounded-full dark:bg-violet-600">
// 					<img src={logoo} alt="Logo" className="h-auto w-24 block" />
// 				</div>
// 				<span className="self-center text-3xl font-bold">SwiftFix</span>
// 			</a>
// 		</div>
// 		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
// 			<div className="space-y-3">
// 				<h3 className="tracking-wide uppercase dark:text-gray-900">Product</h3>
// 				<ul className="space-y-1">
// 					<li>
// 						<a rel="noopener noreferrer" href="#">Features</a>
// 					</li>
// 					<li>
// 						<a rel="noopener noreferrer" href="#">Integrations</a>
// 					</li>
// 					<li>
// 						<a rel="noopener noreferrer" href="#">Pricing</a>
// 					</li>
// 					<li>
// 						<a rel="noopener noreferrer" href="#">FAQ</a>
// 					</li>
// 				</ul>
// 			</div>
// 			<div className="space-y-3">
// 				<h3 className="tracking-wide uppercase dark:text-gray-900">Company</h3>
// 				<ul className="space-y-1">
// 					<li>
// 						<a rel="noopener noreferrer" href="#">Privacy</a>
// 					</li>
// 					<li>
// 						<a rel="noopener noreferrer" href="#">Terms of Service</a>
// 					</li>
// 				</ul>
// 			</div>
// 			<div className="space-y-3">
// 				<h3 className="uppercase dark:text-gray-900">Developers</h3>
// 				<ul className="space-y-1">
// 					<li>
// 						<a rel="noopener noreferrer" href="#">Public API</a>
// 					</li>
// 					<li>
// 						<a rel="noopener noreferrer" href="#">Documentation</a>
// 					</li>
// 					<li>
// 						<a rel="noopener noreferrer" href="#">Guides</a>
// 					</li>
// 				</ul>
// 			</div>
// 			<div className="space-y-3">
// 				<div className="uppercase dark:text-gray-900">Social media</div>
// 				<div className="flex justify-start space-x-3">
// 					<a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
// 						<FaFacebookSquare size={25} />
// 					</a>
// 					<a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
// 						<BsLinkedin size={25} />
// 					</a>
// 					<a rel="noopener noreferrer" href="#" title="Instagram" className="flex items-center p-1">
// 						<FaSquareGithub size={25} />
// 					</a>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// 	<div className="py-6 text-sm text-center dark:text-gray-600">© SwiftFix | Tofashish Nujum. All rights reserved.</div>
// </footer>
//     );
// };

// export default Footer;

import React from 'react';
import logoo from '../assets/img/logoo.png';
import { FaSquareGithub } from 'react-icons/fa6';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="px-4 bg-gray-100 text-gray-800">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 py-10">
                {/* Logo & Brand */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-3">
                    <div className="flex items-center space-x-3">
                        <img src={logoo} alt="Logo" className="h-16 w-auto" />
                        <span className="text-3xl font-bold">SwiftFix</span>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm w-full lg:w-2/3">
                    <div className="space-y-2">
                        <h3 className="font-semibold uppercase">Product</h3>
                        <ul className="space-y-1">
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Integrations</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-semibold uppercase">Company</h3>
                        <ul className="space-y-1">
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-semibold uppercase">Developers</h3>
                        <ul className="space-y-1">
                            <li><a href="#">Public API</a></li>
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Guides</a></li>
                        </ul>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-col items-center lg:items-end space-y-2">
                    <h3 className="font-semibold uppercase">Social Media</h3>
                    <div className="flex space-x-4">
                        <a href="#" title="Facebook"><FaFacebookSquare size={24} /></a>
                        <a href="#" title="LinkedIn"><BsLinkedin size={24} /></a>
                        <a href="#" title="GitHub"><FaSquareGithub size={24} /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Note */}
            <div className="text-center py-4 text-sm text-gray-600 border-t">
                © SwiftFix | Tofashish Nujum. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
