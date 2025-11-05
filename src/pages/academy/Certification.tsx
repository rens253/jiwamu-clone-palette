import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Users, TrendingUp } from "lucide-react";

const Certification = () => {
  const programs = [
    {
      title: "Psychoanalytic Training",
      subtitle: "Program Komprehensif Psikoanalisis",
      description: "Program pelatihan komprehensif untuk menjadi psikoanalisis profesional dengan sertifikasi internasional.",
      duration: "24 bulan",
      sessions: "96 sesi",
      maxParticipants: "12 peserta",
      price: "Rp 45.000.000",
      installment: "atau Rp 2.000.000/bulan",
      badge: "IPA Certified",
      features: [
        "Teori Psikoanalisis Klasik dan Modern",
        "Teknik Interpretasi dan Analisis Mimpi",
        "Transference dan Countertransference",
        "Analisis Karakter dan Struktur Kepribadian",
        "Supervisi Kasus dan Praktik Klinis",
        "Penelitian dalam Psikoanalisis",
      ],
    },
    {
      title: "Psychotherapy Certification",
      subtitle: "Sertifikasi Psikoterapi Profesional",
      description: "Program sertifikasi untuk menjadi psikoterapis dengan berbagai modalitas terapi modern.",
      duration: "18 bulan",
      sessions: "72 sesi",
      maxParticipants: "15 peserta",
      price: "Rp 35.000.000",
      installment: "atau Rp 2.100.000/bulan",
      badge: "Professional",
      features: [
        "Cognitive Behavioral Therapy (CBT)",
        "Dialectical Behavior Therapy (DBT)",
        "Solution-Focused Brief Therapy",
        "Trauma-Informed Care",
        "Family and Couples Therapy",
        "Clinical Supervision",
      ],
    },
    {
      title: "Creative Counseling",
      subtitle: "Konseling Kreatif dan Ekspresif",
      description: "Program pelatihan konseling dengan pendekatan kreatif dan ekspresif untuk praktisi modern.",
      duration: "12 bulan",
      sessions: "48 sesi",
      maxParticipants: "20 peserta",
      price: "Rp 25.000.000",
      installment: "atau Rp 2.300.000/bulan",
      badge: "Creative",
      features: [
        "Art Therapy Techniques",
        "Music and Movement Therapy",
        "Drama and Role-Play Therapy",
        "Narrative and Storytelling",
        "Mindfulness-Based Counseling",
        "Group Facilitation Skills",
      ],
    },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Sertifikasi Internasional",
      description: "Dapatkan sertifikat yang diakui secara internasional",
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
      icon: TrendingUp,
      title: "Fleksibilitas Waktu",
      description: "Jadwal yang dapat disesuaikan dengan kebutuhan",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider opacity-90">Academy</span>
            <h1 className="text-5xl font-bold mt-2 mb-6">Professional Certification Programs</h1>
            <p className="text-xl opacity-95 mb-8">
              Tingkatkan karir Anda dengan program sertifikasi profesional di bidang psikoanalisis, 
              psikoterapi, dan konseling kreatif yang diakui secara internasional.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="accent">
                Daftar Sekarang
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Download Brosur
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-4">Mengapa Memilih Program Kami?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Keunggulan yang membuat program sertifikasi kami menjadi pilihan terbaik
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-card p-6 rounded-xl border border-border text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-4">Program Sertifikasi Tersedia</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Pilih program yang sesuai dengan tujuan karir dan minat profesional Anda
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={index} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Siap Mengambil Langkah Selanjutnya?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi gratis dan temukan program yang tepat untuk Anda
          </p>
          <Button size="lg" variant="default" className="bg-white text-primary hover:bg-white/90">
            Konsultasi Gratis
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certification;
