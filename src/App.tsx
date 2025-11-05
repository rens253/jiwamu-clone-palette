import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Certification from "./pages/academy/Certification";
import Bootcamp from "./pages/academy/Bootcamp";
import SelfDevelopment from "./pages/academy/SelfDevelopment";
import Kesehatan from "./pages/layanan/Kesehatan";
import Login from "./pages/Login";
import Jadwal from "./pages/Jadwal";
import Articles from "./pages/resources/Articles";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/academy/certification" element={<Certification />} />
          <Route path="/academy/bootcamp" element={<Bootcamp />} />
          <Route path="/academy/self-development" element={<SelfDevelopment />} />
          <Route path="/layanan/kesehatan" element={<Kesehatan />} />
          <Route path="/layanan/kebugaran" element={<Kesehatan />} />
          <Route path="/layanan/asesmen" element={<Kesehatan />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jadwal" element={<Jadwal />} />
          <Route path="/resources/articles" element={<Articles />} />
          <Route path="/resources/videos" element={<Articles />} />
          <Route path="/resources/download" element={<Articles />} />
          <Route path="/member/trainer" element={<Index />} />
          <Route path="/member/alumni" element={<Index />} />
          <Route path="/project" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
