import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="section-container">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Contact</h2>
        <p className="text-muted-foreground mb-8">
          Feel free to reach out if you'd like to connect or discuss opportunities.
        </p>
        
        <div className="space-y-4">
          <a 
            href="mailto:sokmeak.sarenn@gmail.com"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>sokmeak.sarenn@gmail.com</span>
          </a>
          <div className="flex items-center gap-3 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span>Phnom Penh, Cambodia</span>
          </div>
          <a 
            href="tel:+85517546798"
            className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>+855 17546798</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
