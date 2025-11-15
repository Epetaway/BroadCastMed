import { contactInfo } from '@/data/site';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Earl Hickson</h3>
            <p className="text-muted-foreground mb-4">
              Front-End Developer specializing in healthcare CMS platforms, responsive email campaigns, and accessible user interfaces.
            </p>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="w-4 h-4 mr-2" />
              {contactInfo.location}
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Specialties</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>Healthcare CMS Development</li>
              <li>Responsive Email Templates</li>
              <li>Accessible UI Components</li>
              <li>Clinical Workflow Design</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-muted-foreground hover:text-healthcare-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-healthcare-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-healthcare-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Earl Hickson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}