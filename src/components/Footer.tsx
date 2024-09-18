
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <p className="text-center mb-4">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <ul className="flex space-x-6">
          <li><a href="/about" className="hover:text-gray-400">About</a></li>
          <li><a href="/contact" className="hover:text-gray-400">Contact</a></li>
          <li><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
