import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "Memahami Depresi: Lebih dari Sekadar Sedih",
      excerpt: "Depresi adalah kondisi medis serius yang mempengaruhi jutaan orang. Artikel ini membahas gejala, penyebab, dan cara mengatasinya.",
      author: "Dr. Sarah Johnson",
      date: "15 Des 2024",
      readTime: "8 menit",
      category: "Mental Health",
      image: "bg-gradient-to-br from-primary to-secondary",
    },
    {
      title: "Teknik Mindfulness untuk Mengurangi Stress",
      excerpt: "Pelajari teknik mindfulness sederhana yang dapat Anda praktikkan sehari-hari untuk mengurangi stress dan meningkatkan kesejahteraan.",
      author: "Dr. Michael Chen",
      date: "10 Des 2024",
      readTime: "6 menit",
      category: "Self Care",
      image: "bg-gradient-to-br from-secondary to-accent",
    },
    {
      title: "Membangun Resiliensi Mental di Era Digital",
      excerpt: "Bagaimana teknologi mempengaruhi kesehatan mental kita dan strategi untuk membangun resiliensi di era digital.",
      author: "Dr. Amanda Williams",
      date: "5 Des 2024",
      readTime: "10 menit",
      category: "Digital Wellness",
      image: "bg-gradient-to-br from-accent to-secondary",
    },
    {
      title: "Peran Keluarga dalam Proses Terapi",
      excerpt: "Dukungan keluarga sangat penting dalam proses pemulihan. Pelajari bagaimana keluarga dapat berperan aktif.",
      author: "Dr. Robert Lee",
      date: "1 Des 2024",
      readTime: "7 menit",
      category: "Family Therapy",
      image: "bg-gradient-to-br from-primary to-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Articles & Insights</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Baca artikel terbaru tentang kesehatan mental, terapi, dan pengembangan diri dari para ahli kami
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-accent hover:shadow-xl transition-all cursor-pointer">
                <div className={`h-48 ${article.image} flex items-center justify-center`}>
                  <div className="text-white text-center p-6">
                    <Badge className="bg-white/20 text-white mb-2">{article.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <h3 className="text-2xl font-bold text-primary mb-2 hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-4">
                      <span>{article.date}</span>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;
