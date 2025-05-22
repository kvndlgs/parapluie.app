import { Github, Instagram, Twitter } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-text text-xs -mt-2">
            AI Protection for Senior Financial Safety.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Subscriptions</a></li>
              <li><a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">Early Access</a></li>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Updates</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Careers</a></li>
                            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Press</a></li>
                            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
                            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
                            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
                            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cookie Policy</a></li>
                            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Parapluie. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
                          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="https://x.com/parapluie.app" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
                          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="https://instagram.com/parapluie.app" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
                         
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
                          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="https://github.com/kvndlgs/parapluie-app.git" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
           
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;