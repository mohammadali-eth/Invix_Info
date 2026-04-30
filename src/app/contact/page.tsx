import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about Invix? We're here to help you automate your
            billing workflows.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-muted-foreground mb-12 leading-relaxed">
              Whether you're a freelancer just starting out or a large business
              looking to scale, our team is ready to support your journey.
            </p>

            <div className="space-y-8">
              <ContactItem
                icon={<Mail className="h-6 w-6 text-primary" />}
                title="Email Us"
                content="support.invix@gmail.com"
                description="We'll respond within 24 hours."
              />
              <ContactItem
                icon={<Phone className="h-6 w-6 text-primary" />}
                title="Call Us"
                content="+91 70965 48905"
                description="Mon-Fri from 9am to 6pm."
              />
              <ContactItem
                icon={<MapPin className="h-6 w-6 text-primary" />}
                title="Visit Us"
                content="168/1, Sector 4A, Gandhinagar, Gujarat, India-382006"
                description="Our doors are always open."
              />
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl border-none">
            <CardHeader className="pb-4">
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="min-h-[150px]"
                  />
                </div>
                <Button className="w-full h-12 text-base font-semibold gap-2">
                  Send Message
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

function ContactItem({
  icon,
  title,
  content,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  description: string;
}) {
  return (
    <div className="flex gap-6">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="font-semibold text-primary mb-1">{content}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
