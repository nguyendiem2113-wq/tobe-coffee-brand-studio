import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { CtaButton, PageHero, Section, SectionHead } from "@/components/site/primitives";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import cup from "@/assets/tobe-cup.jpg";

const MAPS_URL = "https://maps.app.goo.gl/ruYMVAhk7NdGToaJ7";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Khu%20c%C3%B4ng%20nghi%E1%BB%87p%20L%E1%BB%99c%20S%C6%A1n%2C%20B%E2%80%99Lao%2C%20L%C3%A2m%20%C4%90%E1%BB%93ng&output=embed";

const LienHe = () => {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success("Đã ghi nhận thông tin. TOBE sẽ liên hệ lại trong 24 giờ.");
  };

  return (
    <>
      <PageHero
        eyebrow="Liên hệ"
        title="KẾT NỐI VỚI TOBE"
        text="Bạn cần báo giá sỉ, hợp tác OEM hay mở đại lý? Để lại thông tin, đội ngũ TOBE sẽ phản hồi trong 24 giờ làm việc."
        image={cup}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHead eyebrow="Thông tin" title="TOBE Coffee" />
            <div className="divide-y divide-border border-y border-border">
              <div className="flex gap-5 py-6">
                <Phone size={18} strokeWidth={1.4} className="mt-1 shrink-0 text-primary" />
                <div>
                  <p className="caption mb-1 text-mocha">Hotline</p>
                  <a href="tel:0969598892" className="text-base text-foreground hover:text-primary">
                    096 9598892
                  </a>
                </div>
              </div>
              <div className="flex gap-5 py-6">
                <Mail size={18} strokeWidth={1.4} className="mt-1 shrink-0 text-primary" />
                <div>
                  <p className="caption mb-1 text-mocha">Email</p>
                  <a href="mailto:tobebaoloc@gmail.com" className="text-base text-foreground hover:text-primary">
                    tobebaoloc@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex gap-5 py-6">
                <MapPin size={18} strokeWidth={1.4} className="mt-1 shrink-0 text-primary" />
                <div>
                  <p className="caption mb-1 text-mocha">Địa chỉ</p>
                  <p className="text-base font-light leading-[1.7] text-foreground">
                    Lô CN6, Khu công nghiệp Lộc Sơn, Phường B'Lao, Tỉnh Lâm Đồng, Việt Nam.
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="caption mt-3 inline-block text-primary"
                  >
                    Xem trên Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHead eyebrow="Form" title="Gửi Yêu Cầu" />
            <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Họ và tên</Label>
                <Input id="name" required placeholder="Nguyễn Văn A" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company">Công ty</Label>
                <Input id="company" placeholder="Tên doanh nghiệp" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Số điện thoại</Label>
                <Input id="phone" type="tel" required placeholder="09xx xxx xxx" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="ban@congty.com" />
              </div>
              <div className="grid gap-2 sm:col-span-2">
                <Label htmlFor="message">Nội dung</Label>
                <Textarea id="message" rows={5} placeholder="Nhu cầu sản lượng, dòng sản phẩm quan tâm..." />
              </div>
              <div className="sm:col-span-2">
                <CtaButton type="submit">{sent ? "Đã gửi" : "Gửi yêu cầu"}</CtaButton>
              </div>
            </form>
          </div>
        </div>
      </Section>

      <section className="h-[420px] w-full bg-stone">
        <iframe
          title="Bản đồ nhà máy TOBE Coffee"
          src={MAPS_EMBED}
          className="h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
};

export default LienHe;
