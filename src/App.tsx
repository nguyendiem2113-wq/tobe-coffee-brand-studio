import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "@/components/site/SiteLayout";
import Index from "./pages/Index.tsx";
import KhamPha from "./pages/KhamPha.tsx";
import SanPham from "./pages/SanPham.tsx";
import Oem from "./pages/Oem.tsx";
import DaiLy from "./pages/DaiLy.tsx";
import TuyenDung from "./pages/TuyenDung.tsx";
import LienHe from "./pages/LienHe.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/kham-pha" element={<KhamPha />} />
            <Route path="/san-pham" element={<SanPham />} />
            <Route path="/oem" element={<Oem />} />
            <Route path="/dai-ly" element={<DaiLy />} />
            <Route path="/tuyen-dung" element={<TuyenDung />} />
            <Route path="/lien-he" element={<LienHe />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
