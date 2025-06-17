
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner"; // Using shadcn sonner for non-blocking notifications
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import Layout from "./components/Layout"; // Import the Layout component
import HomePage from "./pages/HomePage"; // Renamed from Index
import WhyItMattersPage from "./pages/WhyItMattersPage";
import AiAuditPage from "./pages/AiAuditPage";
import AboutUsPage from "./pages/AboutUsPage";
import PricingContactPage from "./pages/PricingContactPage";
import BlogListPage from "./pages/BlogListPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster /> {/* For traditional toasts from shadcn/ui/toast */}
        <Sonner richColors position="top-right" /> {/* For more modern, non-blocking notifications */}
        <BrowserRouter>
          <Layout> {/* Wrap Routes with Layout */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/why-it-matters" element={<WhyItMattersPage />} />
              <Route path="/ai-audit" element={<AiAuditPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/pricing-contact" element={<PricingContactPage />} />
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
