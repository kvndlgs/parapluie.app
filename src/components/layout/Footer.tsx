import { Github, Instagram, Twitter } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const Footer = () => {
  return (
    <footer className="bg-card py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <Logo className="w-40 mb-2 -ml-4" />
            <p className="text-neutral-400 text-xs -mt-1.5">
              AI Protection for Senior Financial Safety.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-500 text-lg mb-2">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground text-sm transition-colors" >Features</a></li>
              <li><a href="#pricing" className="text-muted-foreground hover:text-foreground  text-sm transition-colors">Subscriptions</a></li>
              <li><a href="#download" className="text-muted-foreground hover:text-foreground text-sm transition-colors" >Early Access</a></li>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Updates</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-500 text-lg mb-2">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-muted-foreground text-sm hover:text-primary-400 transition-colors">About</a></li>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <li><a href="#" className="text-muted-foreground text-sm hover:text-primary-400 transition-colors">Careers</a></li>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <li><a href="#" className="text-muted-foreground text-sm hover:text-primary-400 transition-colors">Press</a></li>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <li><a href="#" className="text-muted-foreground text-sm hover:text-primary-400 transition-all ease-in">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-neutral-500 text-lg mb-2">Legal</h3>
            <ul className="space-y-3">
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <li><a href="#" className="text-muted-foreground text-sm hover:text-primary-400 transition-colors" >Privacy Policy</a></li>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <li><a href="#" className="text-muted-foreground text-sm hover:text-primary-400 transition-colors" >Terms of Service</a></li>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <li><a href="#" className="text-muted-foreground text-sm hover:text-primary-400 transition-colors" >Cookie Policy</a></li>
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <li><a href="#" className="text-muted-foreground text-sm hover:text-primary-400 transition-colors" >GDPR</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground" >&copy; {new Date().getFullYear()} Parapluie. All rights reserved.</p>

          <div className="flex space-x-5 mt-4 md:mt-0">
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="https://x.com/parapluie.app" target="_blank" className="text-muted-foreground text-sm hover:text-primary-400 transition-colors">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </a>
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="https://instagram.com/parapluie.app" target="_blank" className="text-muted-foreground text-sm hover:text-primary-400 transition-colors">

              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </a>
            {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
            <a href="https://github.com/kvndlgs/parapluie-app.git" target="_blank" className="text-muted-foreground hover:text-primary-400 transition-colors">

              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;