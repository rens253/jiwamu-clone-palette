import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Calendar } from "lucide-react";

interface ProgramCardProps {
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  sessions: string;
  maxParticipants: string;
  price: string;
  installment?: string;
  badge?: string;
  features?: string[];
}

const ProgramCard = ({
  title,
  subtitle,
  description,
  duration,
  sessions,
  maxParticipants,
  price,
  installment,
  badge,
  features,
}: ProgramCardProps) => {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-accent">
      <CardHeader>
        {badge && (
          <Badge className="w-fit mb-2 bg-accent text-accent-foreground">{badge}</Badge>
        )}
        <h3 className="text-2xl font-bold text-primary mb-1">{title}</h3>
        <p className="text-sm font-medium text-secondary">{subtitle}</p>
        <p className="text-muted-foreground mt-3">{description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
          <div className="flex flex-col items-center text-center">
            <Calendar className="h-5 w-5 text-secondary mb-1" />
            <span className="text-xs text-muted-foreground">Durasi</span>
            <span className="font-semibold text-sm">{duration}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Clock className="h-5 w-5 text-secondary mb-1" />
            <span className="text-xs text-muted-foreground">Sesi</span>
            <span className="font-semibold text-sm">{sessions}</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="h-5 w-5 text-secondary mb-1" />
            <span className="text-xs text-muted-foreground">Peserta</span>
            <span className="font-semibold text-sm">{maxParticipants}</span>
          </div>
        </div>

        {features && features.length > 0 && (
          <div className="space-y-2">
            <p className="font-semibold text-sm">Kurikulum:</p>
            <ul className="space-y-1">
              {features.slice(0, 4).map((feature, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start">
                  <span className="text-secondary mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col items-start space-y-3">
        <div>
          <p className="text-2xl font-bold text-primary">{price}</p>
          {installment && <p className="text-sm text-muted-foreground">{installment}</p>}
        </div>
        <Button className="w-full" variant="secondary" size="lg">
          Daftar Sekarang
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
