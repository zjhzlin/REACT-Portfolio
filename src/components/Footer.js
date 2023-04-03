export const Footer = () => {
  return (
    // <div className="bg-black items-center flex justify-center text-white">@Lynn</div>
    <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto flex justify-between items-center">
      <p className="text-sm">&copy; 2023 Lynn. All rights reserved.</p>
      <ul className="flex space-x-4">
        <li><a href="/" className="hover:text-gray-400">Terms of Service</a></li>
        <li><a href="/" className="hover:text-gray-400">Privacy Policy</a></li>
        <li><a href="/" className="hover:text-gray-400">Contact Us</a></li>
      </ul>
    </div>
  </footer>
  )
}