import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Target, Zap, CheckCircle } from "lucide-react";

const Bootcamp = () => {
  const bootcamps = [
    {
      title: "Anxiety & Depression Management",
      duration: "8 Minggu",
      intensity: "Intensif",
      level: "Intermediate",
      topics: ["CBT Techniques", "Mindfulness", "Crisis Intervention", "Self-Care Strategies"],
      price: "Rp 12.000.000",
    },
    {
      title: "Trauma-Informed Care",
      duration: "6 Minggu",
      intensity: "Intensif",
      level: "Advanced",
      topics: ["PTSD Treatment", "EMDR Basics", "Somatic Therapy", "Safety Planning"],
      price: "Rp 15.000.000",
    },
    {
      title: "Child & Adolescent Psychology",
      duration: "10 Minggu",
      intensity: "Regular",
      level: "Intermediate",
      topics: ["Developmental Psychology", "Play Therapy", "Family Systems", "School Counseling"],
      price: "Rp 13.500.000",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="bg-gradient-to-r from-secondary to-accent text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider">Academy</span>
            <h1 className="text-5xl font-bold mt-2 mb-6">Mental Health Bootcamp</h1>
            <p className="text-xl opacity-95 mb-8">
              Pelatihan intensif untuk praktisi kesehatan mental yang ingin meningkatkan kompetensi 
              dalam penanganan kasus-kasus spesifik dengan metode terkini.
            </p>
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
              Daftar Bootcamp
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Pembelajaran Intensif</h3>
              <p className="text-muted-foreground">Program padat dengan fokus praktikal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Topik Spesifik</h3>
              <p className="text-muted-foreground">Fokus pada kasus dan kondisi tertentu</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Sertifikat Kompetensi</h3>
              <p className="text-muted-foreground">Pengakuan resmi untuk keahlian Anda</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Program Bootcamp Tersedia</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Pilih bootcamp yang sesuai dengan area spesialisasi yang ingin Anda kembangkan
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bootcamps.map((bootcamp, index) => (
              <div key={index} className="bg-card border-2 border-border rounded-xl p-6 hover:border-accent hover:shadow-xl transition-all">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-accent text-white">{bootcamp.level}</Badge>
                  <Badge variant="outline">{bootcamp.intensity}</Badge>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{bootcamp.title}</h3>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{bootcamp.duration}</span>
                </div>
                <div className="space-y-2 mb-6">
                  <p className="font-semibold text-sm">Topik yang Dipelajari:</p>
                  <ul className="space-y-1">
                    {bootcamp.topics.map((topic, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-secondary mr-2">✓</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t pt-4">
                  <p className="text-2xl font-bold text-primary mb-4">{bootcamp.price}</p>
                  <Button className="w-full" variant="secondary">
                    Daftar Sekarang
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bootcamp;
