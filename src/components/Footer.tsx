import { Facebook, Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoTobe from "@/assets/logo-tobe.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-10 lg:py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img src={logoTobe} alt="TOBE Coffee" className="h-10 w-auto brightness-0 invert mb-4" />
            <p className="text-primary-foreground/70 font-light text-sm leading-relaxed">
              Brew Bold. Be TOBE.<br />
              Cà phê Việt Nam chất lượng cao cho người trẻ hiện đại.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-[0.15em] uppercase mb-4">
              Nhận tin mới
            </h4>
            <p className="text-primary-foreground/70 text-sm font-light mb-3">
              Đăng ký để nhận ưu đãi và tin tức mới nhất.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email của bạn"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm"
              />
              <Button variant="outline" size="sm" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 shrink-0">
                <Mail size={16} />
              </Button>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-[0.15em] uppercase mb-4">
              Địa chỉ
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/70 font-light">
              <div>
                <p className="text-primary-foreground font-medium mb-1">Hồ Chí Minh</p>
                <p>123 Nguyễn Huệ, Quận 1<br />TP. Hồ Chí Minh</p>
              </div>
              <div>
                <p className="text-primary-foreground font-medium mb-1">Vũng Tàu</p>
                <p>45 Trần Phú, TP. Vũng Tàu<br />Bà Rịa - Vũng Tàu</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-bold text-sm tracking-[0.15em] uppercase mb-4">
              Kết nối
            </h4>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <div className="mt-4 text-sm text-primary-foreground/70 font-light">
              <p>Hotline: 1900 xxxx</p>
              <p>Email: hello@tobecoffee.vn</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/15 mt-8 pt-6 text-center text-xs text-primary-foreground/50 font-light">
          © 2026 TOBE Coffee. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
