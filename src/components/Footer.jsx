export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">AutoCar</h3>
          <p className="mt-2 text-sm">
            Premium rentals, customer-first service, nationwide coverage. Drive with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/cars" className="hover:text-white">Cars</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li>📞 +880 123456789</li>
            <li>✉️ info@autorent.com</li>
            <li>📍 123 Main Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} AutoCar. All rights reserved.Dev.Shahariar
      </div>
    </footer>
  );
}