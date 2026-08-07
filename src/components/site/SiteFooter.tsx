import { Link } from "react-router-dom";
import { Facebook, Instagram, MessageCircle, Music2, Youtube } from "lucide-react";
import { CtaLink } from "./primitives";
import { NAV } from "./SiteHeader";
import ctaImage from "@/assets/tobe-cup.jpg";

const MAPS_URL = "https://maps.app.goo.gl/ruYMVAhk7NdGToaJ7";

const support = [
  { label: "Liên hệ", to: "/lien-he" },
  { label: "Chính sách giao hàng", to: "/lien-he" },
  { label: "Chính sách bảo mật", to: "/lien-he" },
  { label: "Điều khoản sử dụng", to: "/lien-he" },
  { label: "FAQ", to: "/dai-ly" },
];

const socials = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Youtube, label: "Youtube" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Music2, label: "TikTok" },
  { Icon: MessageCircle, label: "Zalo OA" },
];

const SiteFooter = () => (
  <footer>
    {/* PHẦN 1 — CTA BANNER */}
    <section className="bg-stone">
      <div className="shell grid items-center gap-10 py-16 md:py-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="caption mb-4 block text-mocha">Partnership</span>
          <h2 className="h2-display text-foreground">Let's Build Better Coffee Together.</h2>
          <p className="mt-5 max-w-lg text-base font-light leading-[1.75] text-muted-foreground">
            Whether you're a café, distributor or private label partner, we're ready to collaborate.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <CtaLink to="/san-pham">Explore Products</CtaLink>
            <CtaLink to="/oem" variant="secondary">
              Request OEM Quote
            </CtaLink>
          </div>
        </div>
        <div className="overflow-hidden rounded-sm">
          <img
            src={ctaImage}
            alt="Ly cà phê và hạt cà phê rang TOBE"
            loading="lazy"
            width={1200}
            height={800}
            className="h-[280px] w-full object-cover md:h-[400px]"
          />
        </div>
      </div>
    </section>

    {/* PHẦN 2 — FOOTER CHÍNH */}
    <div className="bg-espresso text-ivory">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-4">
        <div>
          <Link to="/" className="mb-6 block leading-none">
            <span className="block font-heading text-2xl tracking-[0.22em] text-ivory">TOBE</span>
            <span className="caption block text-[10px] tracking-[0.42em] text-primary">COFFEE</span>
          </Link>
          <p className="max-w-sm text-sm font-light leading-[1.75] text-ivory/60">
            Premium Vietnamese coffee crafted in Bao Loc Highlands. We provide roasted coffee, drip
            coffee, instant coffee, and OEM &amp; Private Label solutions for partners worldwide.
          </p>
          <div className="mt-7 flex gap-3">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-ivory/15 text-ivory/70 transition-colors hover:border-primary hover:text-primary"
              >
                <Icon size={15} strokeWidth={1.4} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="caption mb-6 text-primary">Explore</h4>
          <ul className="space-y-3 text-sm font-light text-ivory/60">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-primary">
                  Trang {item.label.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="caption mb-6 text-primary">Support</h4>
          <ul className="space-y-3 text-sm font-light text-ivory/60">
            {support.map((item, i) => (
              <li key={i}>
                <Link to={item.to} className="transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="caption mb-6 text-primary">Contact</h4>
          <div className="space-y-5 text-sm font-light text-ivory/60">
            <div>
              <p className="mb-1 text-ivory">Hotline</p>
              <a href="tel:0969598892" className="transition-colors hover:text-primary">
                096 9598892
              </a>
            </div>
            <div>
              <p className="mb-1 text-ivory">Email</p>
              <a href="mailto:tobebaoloc@gmail.com" className="transition-colors hover:text-primary">
                tobebaoloc@gmail.com
              </a>
            </div>
            <div>
              <p className="mb-1 text-ivory">Địa chỉ</p>
              <p className="leading-[1.7]">
                Lô CN6, Khu công nghiệp Lộc Sơn, Phường B'Lao, Tỉnh Lâm Đồng, Việt Nam.
              </p>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-primary transition-opacity hover:opacity-75"
            >
              Xem trên Google Maps →
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="shell py-6 text-center text-xs font-light tracking-wide text-ivory/40">
          © TOBE Coffee. All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
