import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing FontAwesome icons for GitHub and LinkedIn

const Footer = () => {
  return (
    <footer className="w-full mt-24 py-8 border-t border-lucid-neutral-300 dark:border-lucid-neutral-700 transition-all ease-in-out">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-lucid-neutral-600 dark:text-lucid-neutral-300 gap-6">

       
        <div className="text-left space-y-1 transform transition-all duration-300 hover:scale-105">
          <p>Email: <a href="mailto:your.email@example.com" className="hover:underline transition-all ease-in-out">divyaranidhkls@gmail.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:underline transition-all ease-in-out">+1 234 567 890</a></p>
        </div>

       
        <div className="flex gap-8"> 
          <a 
            href="https://github.com/divyaranidhkls" 
            target="_blank" 
            className="flex items-center justify-center w-16 h-16 bg-lucid-neutral-300 rounded-full shadow-md hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-lucid-lg"
          >
            <FaGithub className="text-3xl" /> 
          </a>

     
          <a 
            href="https://www.linkedin.com/in/divyarani-k-686b9a286/" 
            target="_blank" 
            className="flex items-center justify-center w-16 h-16 bg-lucid-neutral-300 rounded-full shadow-md hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-lucid-lg"
          >
            <FaLinkedin className="text-3xl" /> 
          </a>
        </div>

       
        <div className="text-right text-xs text-lucid-neutral-500 dark:text-lucid-neutral-400 transform transition-all duration-300 hover:scale-105">
          &copy; {new Date().getFullYear()} Divya Rani K. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
