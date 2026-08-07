import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const NAV = [
  { label: "Trang chủ", to: "/" },
  { label: "Khám phá", to: "/kham-pha" },
  { label: "Sản phẩm", to: "/san-pham" },
  { label: "OEM", to: "/oem" },
  { label: "Đại lý", to: "/dai-ly" },
  { label: "Tuyển dụng", to: "/tuyen-dung" },
  { label: "Liên hệ", to: "/lien-he" },
];

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"VI" | "EN">("VI");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid ? "bg-espresso shadow-soft" : "bg-espresso/25 backdrop-blur-sm"
      )}
    >
      <div className="shell flex h-20 items-center justify-between md:h-24">
        <Link to="/" className="leading-none">
          <span className="block font-heading text-2xl tracking-[0.22em] text-ivory md:text-[26px]">
            TOBE
          </span>
          <span className="caption block text-[10px] tracking-[0.42em] text-primary">COFFEE</span>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative py-1 font-body text-[12px] font-medium uppercase tracking-[0.16em] transition-colors",
                  isActive ? "text-primary" : "text-ivory/80 hover:text-primary",
                  isActive &&
                    "after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:bg-primary"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-5">
          <button aria-label="Tìm kiếm" className="text-ivory/80 transition-colors hover:text-primary">
            <Search size={18} strokeWidth={1.4} />
          </button>
          <button aria-label="Giỏ hàng" className="relative text-ivory/80 transition-colors hover:text-primary">
            <ShoppingBag size={18} strokeWidth={1.4} />
            <span className="absolute -right-2 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              0
            </span>
          </button>
          <div className="hidden items-center gap-1 text-[11px] font-medium tracking-[0.12em] text-ivory/60 sm:flex">
            {(["VI", "EN"] as const).map((l, i) => (
              <span key={l} className="flex items-center gap-1">
                {i > 0 && <span className="text-ivory/30">/</span>}
                <button
                  onClick={() => setLang(l)}
                  className={cn("transition-colors hover:text-primary", lang === l && "text-primary")}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>
          <button
            aria-label="Menu"
            className="text-ivory xl:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="animate-fade-in border-t border-ivory/10 bg-espresso xl:hidden">
          <div className="shell flex flex-col py-4">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "border-b border-ivory/10 py-3.5 font-body text-[13px] uppercase tracking-[0.16em] last:border-0",
                    isActive ? "text-primary" : "text-ivory/80"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
