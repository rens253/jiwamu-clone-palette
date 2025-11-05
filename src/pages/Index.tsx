import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Award, BookOpen, Heart, Shield, Users, Zap } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

const Index = () => {
  const features = [
    {
      icon: Award,
      title: "Sertifikasi Internasional",
      description: "Program dengan sertifikasi yang diakui secara global",
    },
    {
      icon: Users,
      title: "Instruktur Berpengalaman",
      description: "Belajar dari praktisi dan akademisi terbaik",
    },
    {
      icon: BookOpen,
      title: "Kurikulum Komprehensif",
      description: "Materi pembelajaran yang lengkap dan terkini",
    },
    {
      icon: Zap,
      title: "Fleksibilitas Waktu",
      description: "Jadwal yang dapat disesuaikan dengan kebutuhan",
    },
    {
      icon: Heart,
      title: "Pendekatan Holistik",
      description: "Menggabungkan teori dan praktik untuk hasil optimal",
    },
    {
      icon: Shield,
      title: "Dukungan Berkelanjutan",
      description: "Supervisi dan mentoring sepanjang program",
    },
  ];

  const programs = [
    {
      title: "Professional Certification",
      description: "Program sertifikasi profesional di bidang psikoanalisis dan psikoterapi",
      link: "/academy/certification",
      color: "from-primary to-secondary",
    },
    {
      title: "Mental Health Bootcamp",
      description: "Pelatihan intensif untuk praktisi kesehatan mental",
      link: "/academy/bootcamp",
      color: "from-secondary to-accent",
    },
    {
      title: "Self Development",
      description: "Program pengembangan diri untuk kesejahteraan mental",
      link: "/academy/self-development",
      color: "from-accent to-secondary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Mental Wellness" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transformasi Jiwa untuk Kehidupan Lebih Baik
            </h1>
            <p className="text-xl mb-8 opacity-95">
              Platform terpercaya untuk pendidikan dan layanan kesehatan mental profesional. 
              Bergabunglah dengan ribuan praktisi yang telah mengubah hidup mereka.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/academy/certification">
                <Button size="lg" variant="accent" className="group">
                  Mulai Belajar
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/layanan/kesehatan">
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Layanan Kami
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Mengapa Memilih JiwaMu?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Keunggulan yang membuat kami menjadi pilihan terbaik untuk perjalanan kesehatan mental Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Program Academy Kami</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pilih program yang sesuai dengan tujuan karir dan minat profesional Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Link
                key={index}
                to={program.link}
                className="group block bg-card rounded-xl border-2 border-border hover:border-accent overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-48 bg-gradient-to-br ${program.color} flex items-center justify-center`}>
                  <BookOpen className="h-20 w-20 text-white opacity-90" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <span className="text-secondary font-semibold inline-flex items-center group-hover:text-accent transition-colors">
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Siap Memulai Perjalanan Anda?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Bergabunglah dengan komunitas profesional kesehatan mental terbesar di Indonesia
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/jadwal">
              <Button size="lg" variant="accent">
                Lihat Jadwal Kelas
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Daftar Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
