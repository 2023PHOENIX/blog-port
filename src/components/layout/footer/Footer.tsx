// import { Button } from "./ui/button";
// import { Separator } from "./ui/separator";
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react";
import { TEXTS } from "@/src/constants/texts";
export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  const quickLinks = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Portfolio", href: "portfolio" },
    { label: "Blog", href: "blog" },
    { label: "Contact", href: "contact" },
  ];

  const navigateToPage = (page: string) => {
    window.dispatchEvent(new CustomEvent("navigate", { detail: page }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <button className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <img src={"/crafterCode.png"} alt="Logo" className="h-15 w-15"/>
              {/* <div className="h-8 w-8 rounded-full bg-primary"></div> */}
              <span className="text-xl font-bold">{TEXTS.BRAND.NAME}</span>
            </button>
            <p className="text-muted-foreground">{TEXTS.BRAND.DESCRIPTION}</p>
            <div className="flex space-x-2">
              {/* Social links can be mapped here if needed */}
            </div>
          </div>

          {/* Quick Links */}
          {/* <div className="space-y-4">
                        <h4 className="font-semibold">Quick Links</h4>
                        <nav className="flex flex-col space-y-2">
                            {TEXTS.QUICK_LINKS.map((link, index) => (
                                <button
                                    key={index}
                                    className="text-muted-foreground hover:text-foreground transition-colors text-left"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </nav>
                    </div> */}

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <nav className="flex flex-col space-y-2">
              {TEXTS.SERVICES.map((service, index) => (
                <span key={index} className="text-muted-foreground">
                  {service}
                </span>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>{TEXTS.CONTACT.EMAIL}</p>
              <p>{TEXTS.CONTACT.PHONE}</p>
              <p>{TEXTS.CONTACT.LOCATION}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            {/* {TEXTS.COPYRIGHTcurrentYear)} */}
          </p>
          <div className="flex items-center space-x-1 text-muted-foreground text-sm">
            <span>{TEXTS.FOOTER.MADE_WITH}</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>{TEXTS.FOOTER.USING}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
