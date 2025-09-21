import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow-md border-b-2">
      {/* Left Side - Brand/Logo */}
      <div className="text-xl font-bold">
        MyApp
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-blue-600 transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          About
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          Services
        </a>
        <a href="#" className="hover:text-blue-600 transition-colors">
          Contact
        </a>
      </div>

      {/* Right Side - Actions */}
      <div className="flex items-center space-x-4">
        <Checkbox id="darkmode" />
        <label htmlFor="darkmode" className="text-sm">
          Dark Mode
        </label>
        <Button>
          Login
        </Button>
      </div>
    </nav>
  );
}
