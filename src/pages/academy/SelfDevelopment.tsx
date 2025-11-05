import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Lightbulb, Users } from "lucide-react";

const SelfDevelopment = () => {
  const programs = [
    {
      icon: Heart,
      title: "Emotional Intelligence",
      description: "Kembangkan kecerdasan emosional untuk hubungan yang lebih baik",
      duration: "6 Minggu",
      sessions: "12 Sesi",
      price: "Rp 5.500.000",
    },
    {
      icon: Brain,
      title: "Mindfulness & Meditation",
      description: "Teknik mindfulness untuk mengurangi stress dan meningkatkan fokus",
      duration: "8 Minggu",
      sessions: "16 Sesi",
      price: "Rp 6.000.000",
    },
    {
      icon: Lightbulb,
      title: "Life Purpose Discovery",
      description: "Temukan tujuan hidup dan passion sejati Anda",
      duration: "4 Minggu",
      sessions: "8 Sesi",
      price: "Rp 4.500.000",
    },
    {
      icon: Users,
      title: "Relationship Mastery",
      description: "Bangun hubungan interpersonal yang sehat dan bermakna",
      duration: "6 Minggu",
      sessions: "12 Sesi",
      price: "Rp 5.800.000",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="bg-gradient-to-r from-accent to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider">Academy</span>
            <h1 className="text-5xl font-bold mt-2 mb-6">Self Development Programs</h1>
            <p className="text-xl opacity-95 mb-8">
              Program pengembangan diri untuk meningkatkan kesejahteraan mental, emosional, 
              dan spiritual. Cocok untuk siapa saja yang ingin tumbuh dan berkembang.
            </p>
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
              Mulai Journey Anda
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Program Pengembangan Diri</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Temukan program yang tepat untuk perjalanan transformasi pribadi Anda
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="bg-card border-2 border-border rounded-xl p-8 hover:border-accent hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{program.title}</h3>
                  <p className="text-muted-foreground mb-4">{program.description}</p>
                  <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                    <span>⏱ {program.duration}</span>
                    <span>📚 {program.sessions}</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-2xl font-bold text-primary">{program.price}</span>
                    <Button variant="secondary">Daftar</Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Tidak Yakin Program Mana yang Tepat?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Konsultasi gratis dengan advisor kami untuk menemukan program yang sesuai dengan kebutuhan Anda
          </p>
          <Button size="lg" variant="accent">
            Jadwalkan Konsultasi
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SelfDevelopment;
