import { Card, CtaLink, PageHero, Section, SectionHead } from "@/components/site/primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import lifestyle from "@/assets/tobe-lifestyle.jpg";
import cup from "@/assets/tobe-cup.jpg";

const benefits = [
  { title: "Giá sỉ ổn định", text: "Chính sách giá theo sản lượng, cam kết dài hạn." },
  { title: "Hỗ trợ vận hành", text: "Đào tạo pha chế, setup quầy và định lượng công thức." },
  { title: "Hỗ trợ marketing", text: "Bộ nhận diện, POSM và nội dung truyền thông." },
  { title: "Giao hàng toàn quốc", text: "Đặt hàng linh hoạt, giao nhanh theo khu vực." },
];

const tiers = [
  { name: "Đại lý bán lẻ", moq: "Từ 50 kg/tháng", perks: ["Giá sỉ cấp 1", "Hỗ trợ POSM cơ bản"] },
  { name: "Đại lý phân phối", moq: "Từ 300 kg/tháng", perks: ["Giá phân phối", "Bảo hộ khu vực", "Đào tạo tại chỗ"] },
  { name: "Đối tác chuỗi F&B", moq: "Theo hợp đồng", perks: ["Công thức riêng", "Setup quầy trọn gói", "Hỗ trợ máy móc"] },
];

const faqs = [
  { q: "Sản lượng tối thiểu để mở đại lý là bao nhiêu?", a: "TOBE nhận hợp tác từ 50 kg/tháng cho đại lý bán lẻ và từ 300 kg/tháng cho đại lý phân phối." },
  { q: "Có được bảo hộ khu vực không?", a: "Đại lý phân phối được bảo hộ theo khu vực địa lý thỏa thuận trong hợp đồng." },
  { q: "TOBE hỗ trợ gì về vận hành?", a: "Đào tạo pha chế, định lượng công thức, setup quầy và tư vấn menu." },
  { q: "Thời gian giao hàng bao lâu?", a: "3 – 5 ngày làm việc với đơn nội địa, tùy khu vực và sản lượng." },
];

const DaiLy = () => (
  <>
    <PageHero
      eyebrow="Đại lý & Phân phối"
      title={"TRỞ THÀNH\nĐỐI TÁC TOBE"}
      text="Cùng TOBE mở rộng mạng lưới cà phê Việt chất lượng cao — với chính sách giá minh bạch và hỗ trợ vận hành tận nơi."
      image={lifestyle}
    >
      <CtaLink to="/lien-he">Đăng ký làm đại lý</CtaLink>
    </PageHero>

    <Section tone="white">
      <SectionHead eyebrow="Quyền lợi" title="Vì Sao Hợp Tác Cùng TOBE" />
      <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <div key={b.title} className="bg-card p-8">
            <span className="caption mb-5 block text-primary">0{i + 1}</span>
            <h3 className="h3-title text-foreground">{b.title}</h3>
            <p className="mt-3 text-[15px] font-light leading-[1.7] text-muted-foreground">{b.text}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section tone="stone">
      <SectionHead eyebrow="Chính sách" title="Các Cấp Hợp Tác" />
      <div className="grid gap-8 md:grid-cols-3">
        {tiers.map((t) => (
          <Card key={t.name} className="flex flex-col">
            <h3 className="font-heading text-3xl text-foreground">{t.name}</h3>
            <span className="caption mt-3 block text-primary">{t.moq}</span>
            <ul className="mt-6 space-y-3 border-t border-border pt-6 text-[15px] font-light text-muted-foreground">
              {t.perks.map((p) => (
                <li key={p}>— {p}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>

    <Section>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-sm">
          <img src={cup} alt="Đối tác TOBE" loading="lazy" className="h-[320px] w-full object-cover lg:h-full" />
        </div>
        <div>
          <SectionHead eyebrow="FAQ" title="Câu Hỏi Thường Gặp" />
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-body text-base font-medium text-foreground hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] font-light leading-[1.75] text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  </>
);

export default DaiLy;
