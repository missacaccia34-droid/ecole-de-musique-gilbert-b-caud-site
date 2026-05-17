import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";

// NOUVELLES PAGES SEO
import Piano from "./pages/Piano";
import Chant from "./pages/Chant";
import Guitare from "./pages/Guitare";
import EveilMusical from "./pages/EveilMusical";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>

          {/* HOME */}
          <Route path="/" element={<Index />} />

          {/* SEO PAGES */}
          <Route
            path="/cours-piano-saint-gilles"
            element={<Piano />}
          />

          <Route
            path="/cours-chant-saint-gilles"
            element={<Chant />}
          />

          <Route
            path="/cours-guitare-saint-gilles"
            element={<Guitare />}
          />

          <Route
            path="/eveil-musical-saint-gilles"
            element={<EveilMusical />}
          />

          {/* LEGAL */}
          <Route
            path="/mentions-legales"
            element={<MentionsLegales />}
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
