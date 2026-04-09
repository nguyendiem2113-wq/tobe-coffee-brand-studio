import { useState, useEffect } from "react";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import logoTobe from "@/assets/logo-tobe.png";

const navItems = [
  { label: "Trang chủ", href: "#" },
  { label: "Câu chuyện", href: "#story" },
  { label: "Sản phẩm", href: "#products" },
  { label: "Quy trình", href: "#process" },
  { label: "Tin tức", href: "#news" },
  { label: "Liên hệ", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-foreground/30 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <img src={logoTobe} alt="TOBE Coffee" className="h-12 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium font-heading tracking-wide text-foreground/80 hover:text-primary transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="text-foreground/70 hover:text-primary transition-colors" aria-label="Tìm kiếm">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="relative text-foreground/70 hover:text-primary transition-colors" aria-label="Giỏ hàng">
            <ShoppingCart size={20} strokeWidth={1.5} />
            <span className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <button
            className="lg:hidden text-foreground/70"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium font-heading tracking-wide text-foreground/80 hover:text-primary uppercase py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
