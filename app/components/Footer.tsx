export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-20">
      {/* Top section with navigation and subscribe */}
      <div className="max-w-7xl mx-auto px-3 py-12">
        <div className="flex items-start justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-start gap-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-200 to-indigo-100 rounded-full"></div>
              <span className="text-xl font-semibold text-gray-900">Utstyrssystem</span>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap gap-10">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition">Overview</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition">Features</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition">Careers</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition">Help</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition">Privacy</a>
            </nav>
          </div>


          {/* Subscribe Section */}
          <div className="flex flex-col items-end gap-3">
            <h3 className="text-sm font-semibold text-gray-900 mr-3">Stay up to date</h3>
            <div className="flex gap-3 ml-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent w-80"
              />
              <button className="px-6 py-2.5 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition cursor-pointer-on-hover">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with copyright and links */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <p className="text-gray-500 text-sm">© 2077 Untitled UI. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition">Terms</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}