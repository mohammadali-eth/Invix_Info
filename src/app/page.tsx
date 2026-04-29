import { ArrowRight, Bot, Zap, Shield, Mic, Scale, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <Bot className="h-3 w-3" />
            <span>AI-Powered Innovation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-600 to-indigo-600 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Invoicing Reimagined <br /> with AI
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
            Invix is an AI-powered invoicing platform that automates invoice creation, management, tracking and inventory management. It leverages intelligent data processing to generate accurate invoices, reduce manual effort, and streamline billing workflows for businesses and freelancers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <Button size="lg" className="h-12 px-8 text-base font-semibold group">
              Start Generating
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold">
              Live Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Everything you need to grow</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Powerful tools designed to simplify your financial operations and save you hours of manual work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Mic className="h-6 w-6 text-primary" />}
            title="Voice to Invoice"
            description="Generate professional invoices in seconds just by speaking. Our AI handles the rest."
          />
          <FeatureCard 
            icon={<Scale className="h-6 w-6 text-blue-500" />}
            title="Legal Documents"
            description="Instantly generate MSAs, NDAs, and other essential legal agreements with zero effort."
          />
          <FeatureCard 
            icon={<AlertTriangle className="h-6 w-6 text-indigo-500" />}
            title="Risk Analysis"
            description="Smart assessment of client risk and financial history to protect your business."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden bg-primary px-6 py-20 text-center text-primary-foreground shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-700 to-indigo-900 opacity-90 -z-10"></div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to streamline your billing?</h2>
          <p className="max-w-xl mx-auto mb-10 text-primary-foreground/80">
            Join thousands of businesses who have already switched to Invix and reclaimed their time.
          </p>
          <Button size="lg" variant="secondary" className="h-12 px-8 text-base font-bold bg-white text-primary hover:bg-slate-100">
            Get Started for Free
          </Button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 group bg-card/50 backdrop-blur-sm border border-slate-100 dark:border-slate-800">
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-background flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
