import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg" />
              <span className="text-xl font-bold">JiwaMu</span>
            </div>
            <p className="text-sm opacity-90">
              Platform terpercaya untuk pendidikan dan layanan kesehatan mental profesional.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Academy</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link to="/academy/certification" className="hover:text-accent transition-colors">
                  Professional Certification
                </Link>
              </li>
              <li>
                <Link to="/academy/bootcamp" className="hover:text-accent transition-colors">
                  Mental Health Bootcamp
                </Link>
              </li>
              <li>
                <Link to="/academy/self-development" className="hover:text-accent transition-colors">
                  Self Development
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link to="/layanan/kebugaran" className="hover:text-accent transition-colors">
                  Kebugaran Mental
                </Link>
              </li>
              <li>
                <Link to="/layanan/kesehatan" className="hover:text-accent transition-colors">
                  Kesehatan Mental
                </Link>
              </li>
              <li>
                <Link to="/layanan/asesmen" className="hover:text-accent transition-colors">
                  Asesmen Psikologi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link to="/resources/articles" className="hover:text-accent transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/resources/videos" className="hover:text-accent transition-colors">
                  Videos
                </Link>
              </li>
              <li>
                <Link to="/resources/download" className="hover:text-accent transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link to="/jadwal" className="hover:text-accent transition-colors">
                  Jadwal Kelas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p>© 2024 JiwaMu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
