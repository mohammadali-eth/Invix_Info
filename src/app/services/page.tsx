import {
  Bot,
  Mic,
  Scale,
  Files,
  AlertTriangle,
  Building2,
  Briefcase,
  Users,
  Shield,
  FileText,
  BarChart3,
  Clock,
  Zap,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-50 to-background dark:from-slate-900/50 dark:to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Advanced AI-powered solutions to automate every aspect of your
            business billing and organizational management.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={<Mic className="h-8 w-8 text-primary" />}
            title="Voice to Invoice"
            description="Generate professional invoices effortlessly using advanced voice recognition and AI processing."
          />
          <ServiceCard
            icon={<Scale className="h-8 w-8 text-blue-500" />}
            title="Legal Document Generate"
            description="Automatically generate MSAs, NDAs, and other essential legal documents tailored to your needs."
          />
          <ServiceCard
            icon={<Files className="h-8 w-8 text-indigo-500" />}
            title="Document Management"
            description="A secure and organized repository for all your business documents and financial records."
          />
          <ServiceCard
            icon={<AlertTriangle className="h-8 w-8 text-purple-500" />}
            title="Client Risk Analyze"
            description="Leverage AI to analyze client profiles and financial history to assess potential business risks."
          />
          <ServiceCard
            icon={<Building2 className="h-8 w-8 text-green-500" />}
            title="Company Creation"
            description="Comprehensive organization setup with dedicated roles for Admins, Managers, and Users."
          />
          <ServiceCard
            icon={<Briefcase className="h-8 w-8 text-orange-500" />}
            title="Personal Organizations"
            description="Efficiently manage multiple independent organizations and workflows under a single account."
          />
          <ServiceCard
            icon={<Zap className="h-8 w-8 text-yellow-500" />}
            title="AI Invoice Generation"
            description="Our core AI engine creates brand-consistent, accurate invoices in seconds from any data source."
          />
          <ServiceCard
            icon={<BarChart3 className="h-8 w-8 text-cyan-500" />}
            title="Inventory Management"
            description="Automated stock tracking that stays in perfect sync with your sales and invoicing cycles."
          />
          <ServiceCard
            icon={<Clock className="h-8 w-8 text-rose-500" />}
            title="Smart Tracking"
            description="Real-time invoice status tracking with automated AI follow-ups for unpaid bills."
          />
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            <Step
              number="01"
              title="Input Data"
              description="Connect your data source or input transaction details manually."
            />
            <Step
              number="02"
              title="AI Processing"
              description="Our AI engine processes the data, calculates taxes, and generates the invoice."
            />
            <Step
              number="03"
              title="Delivery & Tracking"
              description="The invoice is sent to your client, and we track its status until payment."
            />
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to get started?</h2>
        <div className="flex justify-center gap-4">
          <Button size="lg" className="h-12 px-8">
            View Detailed Pricing
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8">
            Talk to Sales
          </Button>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-8 hover:shadow-lg transition-all duration-300 border-none bg-card/50 backdrop-blur-sm">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-8 items-start">
      <span className="text-5xl font-extrabold text-primary/20">{number}</span>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
