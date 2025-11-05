import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Jadwal = () => {
  const schedules = [
    {
      month: "Januari 2025",
      classes: [
        {
          title: "Psychoanalytic Training - Cohort 8",
          date: "15 Januari 2025",
          time: "09:00 - 17:00 WIB",
          location: "Jakarta & Online",
          type: "Professional Certification",
          spots: "3 kursi tersisa",
          status: "open",
        },
        {
          title: "Anxiety Management Bootcamp",
          date: "22 Januari 2025",
          time: "13:00 - 16:00 WIB",
          location: "Online",
          type: "Bootcamp",
          spots: "8 kursi tersisa",
          status: "open",
        },
      ],
    },
    {
      month: "Februari 2025",
      classes: [
        {
          title: "Emotional Intelligence Workshop",
          date: "5 Februari 2025",
          time: "09:00 - 12:00 WIB",
          location: "Bandung",
          type: "Self Development",
          spots: "12 kursi tersisa",
          status: "open",
        },
        {
          title: "Psychotherapy Certification - Cohort 6",
          date: "12 Februari 2025",
          time: "08:00 - 17:00 WIB",
          location: "Jakarta",
          type: "Professional Certification",
          spots: "Penuh",
          status: "full",
        },
        {
          title: "Trauma-Informed Care Bootcamp",
          date: "26 Februari 2025",
          time: "14:00 - 18:00 WIB",
          location: "Online",
          type: "Bootcamp",
          spots: "5 kursi tersisa",
          status: "open",
        },
      ],
    },
    {
      month: "Maret 2025",
      classes: [
        {
          title: "Mindfulness & Meditation Program",
          date: "10 Maret 2025",
          time: "10:00 - 12:00 WIB",
          location: "Online",
          type: "Self Development",
          spots: "15 kursi tersisa",
          status: "open",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="bg-gradient-to-r from-secondary to-accent text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Jadwal Kelas</h1>
          <p className="text-xl opacity-95 max-w-2xl mx-auto">
            Temukan jadwal kelas dan program yang tersedia. Daftarkan diri Anda sekarang!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {schedules.map((schedule, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                <Calendar className="mr-3 h-8 w-8 text-secondary" />
                {schedule.month}
              </h2>
              <div className="space-y-4">
                {schedule.classes.map((classItem, i) => (
                  <div
                    key={i}
                    className="bg-card border-2 border-border rounded-xl p-6 hover:border-accent hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-secondary text-white">{classItem.type}</Badge>
                          {classItem.status === "full" ? (
                            <Badge variant="destructive">Penuh</Badge>
                          ) : (
                            <Badge variant="outline" className="border-accent text-accent">
                              Tersedia
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3">{classItem.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-secondary" />
                            {classItem.date}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-secondary" />
                            {classItem.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2 text-secondary" />
                            {classItem.location}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start lg:items-end gap-2">
                        <div className="flex items-center text-sm font-medium">
                          <Users className="h-4 w-4 mr-2 text-secondary" />
                          <span className={classItem.status === "full" ? "text-destructive" : "text-accent"}>
                            {classItem.spots}
                          </span>
                        </div>
                        <Button
                          variant={classItem.status === "full" ? "outline" : "secondary"}
                          disabled={classItem.status === "full"}
                        >
                          {classItem.status === "full" ? "Kelas Penuh" : "Daftar Sekarang"}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Tidak Menemukan Jadwal yang Cocok?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Hubungi kami untuk informasi jadwal khusus atau program in-house untuk organisasi Anda
          </p>
          <Button size="lg" variant="accent">
            Hubungi Kami
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jadwal;
