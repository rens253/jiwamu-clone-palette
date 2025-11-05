import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, Heart, MessageCircle, FileText } from "lucide-react";

const Kesehatan = () => {
  const services = [
    {
      icon: MessageCircle,
      title: "Konseling Individual",
      description: "Sesi konseling one-on-one dengan psikolog berpengalaman untuk mengatasi masalah pribadi Anda",
      features: ["Sesi 60 menit", "Privasi terjaga", "Metode evidence-based", "Laporan progress"],
      price: "Rp 500.000/sesi",
    },
    {
      icon: Heart,
      title: "Terapi Psikologi",
      description: "Program terapi komprehensif untuk mengatasi gangguan mental seperti depresi, anxiety, trauma",
      features: ["Multiple sessions", "Treatment plan", "Monitoring berkelanjutan", "Dukungan 24/7"],
      price: "Mulai Rp 2.000.000",
    },
    {
      icon: Shield,
      title: "Crisis Intervention",
      description: "Layanan darurat untuk situasi krisis mental health yang memerlukan penanganan segera",
      features: ["Respon cepat", "Profesional trained", "Koordinasi dengan RS", "Follow-up care"],
      price: "Hubungi kami",
    },
    {
      icon: FileText,
      title: "Clinical Assessment",
      description: "Pemeriksaan klinis menyeluruh untuk diagnosis dan rekomendasi treatment yang tepat",
      features: ["Comprehensive test", "Diagnosis akurat", "Treatment plan", "Referral jika perlu"],
      price: "Rp 1.500.000",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider">Layanan</span>
            <h1 className="text-5xl font-bold mt-2 mb-6">Kesehatan Mental</h1>
            <p className="text-xl opacity-95 mb-8">
              Layanan profesional untuk mengatasi masalah kesehatan mental dengan pendekatan 
              yang compassionate dan evidence-based. Kami siap membantu Anda.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="accent">
                Buat Janji Temu
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Layanan Kami</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Pilih layanan yang sesuai dengan kebutuhan kesehatan mental Anda
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-card border-2 border-border rounded-xl p-8 hover:border-accent hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-sm flex items-center text-muted-foreground">
                        <span className="text-secondary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="font-bold text-primary">{service.price}</span>
                    <Button variant="secondary">Book Now</Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border-2 border-accent rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">
              Butuh Bantuan Segera?
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Jika Anda atau orang yang Anda kenal mengalami krisis kesehatan mental, 
              jangan ragu untuk menghubungi layanan darurat kami
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" variant="destructive">
                Hotline Darurat: 119
              </Button>
              <Button size="lg" variant="secondary">
                Chat dengan Konselor
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kesehatan;
