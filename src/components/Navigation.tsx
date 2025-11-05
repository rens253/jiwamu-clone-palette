import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    {
      label: "Academy",
      submenu: [
        { label: "Professional Certification", path: "/academy/certification" },
        { label: "Mental Health Bootcamp", path: "/academy/bootcamp" },
        { label: "Self Development", path: "/academy/self-development" },
      ],
    },
    {
      label: "Layanan",
      submenu: [
        { label: "Kebugaran Mental", path: "/layanan/kebugaran" },
        { label: "Kesehatan Mental", path: "/layanan/kesehatan" },
        { label: "Asesmen Psikologi", path: "/layanan/asesmen" },
      ],
    },
    {
      label: "Member",
      submenu: [
        { label: "Trainer", path: "/member/trainer" },
        { label: "Alumni", path: "/member/alumni" },
      ],
    },
    { label: "Project", path: "/project" },
    {
      label: "Resources",
      submenu: [
        { label: "Articles", path: "/resources/articles" },
        { label: "Videos", path: "/resources/videos" },
        { label: "Download", path: "/resources/download" },
      ],
    },
    { label: "Jadwal Kelas", path: "/jadwal" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg" />
            <span className="text-xl font-bold text-primary">JiwaMu</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.submenu ? (
                  <>
                    <button className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                      {link.label}
                    </button>
                    <div className="absolute left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {link.submenu.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`block px-4 py-3 text-sm hover:bg-accent transition-colors ${
                            isActive(item.path) ? "text-primary font-semibold" : "text-foreground"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path!}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      isActive(link.path!) ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost">Masuk</Button>
            </Link>
            <Link to="/login">
              <Button variant="secondary">Daftar</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.submenu ? (
                  <>
                    <div className="px-4 py-2 text-sm font-semibold text-primary">{link.label}</div>
                    {link.submenu.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-6 py-2 text-sm text-foreground hover:bg-accent"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    to={link.path!}
                    className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex flex-col space-y-2 px-4 pt-4">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">
                  Masuk
                </Button>
              </Link>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="secondary" className="w-full">
                  Daftar
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
