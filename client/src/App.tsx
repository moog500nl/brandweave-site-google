
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner"; // Using shadcn sonner for non-blocking notifications
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Switch } from "wouter";
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
        <Layout> {/* Wrap Routes with Layout */}
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/why-it-matters" component={WhyItMattersPage} />
            <Route path="/ai-audit" component={AiAuditPage} />
            <Route path="/about-us" component={AboutUsPage} />
            <Route path="/pricing-contact" component={PricingContactPage} />
            <Route path="/blog" component={BlogListPage} />
            <Route path="/blog/:slug" component={BlogPostPage} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
