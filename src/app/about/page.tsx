import { Bot, Shield, Globe, Users, Target, Rocket } from "lucide-react";

export default function About() {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Invix was born out of a simple observation: businesses spend too much time on paperwork and not enough time on what matters—innovation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Invix is an AI-powered invoicing platform that automates invoice creation, management, tracking and inventory management. It leverages intelligent data processing to generate accurate invoices, reduce manual effort, and streamline billing workflows for businesses and freelancers.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Founded by a team of AI enthusiasts and financial experts, we aim to democratize advanced financial tools for businesses of all sizes.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-primary">10k+</span>
                <span className="text-sm text-muted-foreground">Active Users</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-primary">$50M+</span>
                <span className="text-sm text-muted-foreground">Invoices Processed</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <AboutCard icon={<Bot className="h-6 w-6 text-primary" />} title="AI-First" />
              <AboutCard icon={<Shield className="h-6 w-6 text-green-500" />} title="Secure" />
            </div>
            <div className="space-y-4">
              <AboutCard icon={<Globe className="h-6 w-6 text-blue-500" />} title="Global" />
              <AboutCard icon={<Rocket className="h-6 w-6 text-indigo-500" />} title="Fast" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard 
            icon={<Target className="h-8 w-8 text-primary" />}
            title="Precision"
            description="We believe in the power of accurate data. Our AI ensures that every invoice is error-free."
          />
          <ValueCard 
            icon={<Users className="h-8 w-8 text-primary" />}
            title="User Centric"
            description="Our users are at the heart of everything we build. We listen, learn, and iterate."
          />
          <ValueCard 
            icon={<Rocket className="h-8 w-8 text-primary" />}
            title="Innovation"
            description="We are constantly pushing the boundaries of what's possible with AI in finance."
          />
        </div>
      </section>
    </div>
  );
}

function AboutCard({ icon, title }: { icon: React.ReactNode, title: string }) {
  return (
    <div className="bg-background border rounded-2xl p-6 shadow-sm flex flex-col items-center gap-3 text-center">
      {icon}
      <span className="font-semibold">{title}</span>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-3xl border bg-card/50 hover:border-primary/50 transition-colors">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
