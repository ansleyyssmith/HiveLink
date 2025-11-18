import { Suspense, ReactNode } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Pricing from "@/components/Pricing";
import Testimonials3 from "@/components/Testimonials3";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Metadata } from 'next';
import { Button } from "@/app/components/ui/icons/button";
import { ArrowRight, Sparkles, LayoutDashboard } from "@/app/components/ui/icons";
import Link from "next/link";

// Add metadata for SEO
export const metadata: Metadata = {
  title: 'FeNAgO - Agentic AI SaaS Platform Template',
  description: 'The complete platform for building agentic AI-powered SaaS products—ideal for students, developers, startups, and entrepreneurs looking to innovate rapidly. In the near future, every traditional SaaS application will inevitably be surpassed by an Agentic SaaS solution, redefining the competitive landscape.',
  keywords: 'agentic AI, SaaS template, AI platform, DrLee, AI development, FeNAgO, AI startup',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/95">
        <div className="container section-padding">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="mr-2 h-4 w-4" />
              <span>Now in Early Access</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Your Entire Community, <span className="text-primary">Connected</span> in One Place
            </h1>
            
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Messaging, finances, onboarding, documents, and events — all in a single hub built for modern communities.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="btn btn-primary">
                Join Early Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="btn btn-outline">
                Learn More
              </Button>
            </div>
            
            <div className="mt-12">
              <div className="relative mx-auto max-w-5xl rounded-2xl border bg-background p-0.5 shadow-2xl">
                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-muted">
                  {/* Dashboard screenshot placeholder */}
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-background">
                    <LayoutDashboard className="h-16 w-16 text-primary/50" />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -left-4 -top-4 h-8 w-8 rounded-full bg-primary/20"></div>
                <div className="absolute -right-4 -bottom-4 h-8 w-8 rounded-full bg-primary/20"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
        </div>
      </section>
      
      {/* More sections will be added here */}
      
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <main>
        {/* FeNAgO - The complete platform for building agentic AI-powered SaaS products */}
        <Hero />
        <Problem />
        <FeaturesAccordion />
        <Pricing />
        <Testimonials3 />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
