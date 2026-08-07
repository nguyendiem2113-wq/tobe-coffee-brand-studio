import { Card, CtaLink, ImageCard, PageHero, Section, SectionHead } from "@/components/site/primitives";
import heroFactory from "@/assets/tobe-hero-factory.jpg";
import origin from "@/assets/tobe-origin.jpg";
import beans from "@/assets/tobe-beans.jpg";
import brewing from "@/assets/tobe-brewing.jpg";
import product from "@/assets/tobe-product.jpg";
import lifestyle from "@/assets/tobe-lifestyle.jpg";
import factoryLine from "@/assets/tobe-factory-line.jpg";
import cup from "@/assets/tobe-cup.jpg";

const capabilities = [
  { title: "HACCP Certified", text: "Hệ thống quản lý an toàn thực phẩm được chứng nhận." },
  { title: "Manufactured in Bao Loc", text: "Nhà máy rang xay đặt tại cao nguyên Bảo Lộc." },
  { title: "Vietnam Coffee Origin", text: "Nguyên liệu chọn lọc từ các vùng trồng Việt Nam." },
  { title: "OEM & Private Label", text: "Gia công trọn gói cho thương hiệu đối tác." },
];

const videos = [
  { title: "Nguồn gốc từ Bảo Lộc", eyebrow: "Origin", image: origin },
  { title: "Thu mua trực tiếp", eyebrow: "Sourcing", image: beans },
  { title: "Nghệ thuật rang cà phê", eyebrow: "Roasting", image: heroFactory },
  { title: "Năng lực OEM", eyebrow: "Manufacturing", image: factoryLine },
];

const recipes = [
  { title: "Cold Brew", text: "Ủ lạnh 16 giờ, hậu vị ngọt thanh và êm dịu.", image: brewing },
  { title: "Pour Over", text: "Chiết xuất thủ công làm nổi bật hương trái cây.", image: cup },
  { title: "Phin", text: "Cách pha truyền thống Việt Nam, đậm và tròn vị.", image: beans },
];

const knowledge = [
  "Arabica và Robusta khác nhau như thế nào?",
  "Độ rang ảnh hưởng đến hương vị ra sao?",
  "Bảo quản cà phê đúng cách",
  "Vì sao nên dùng cà phê Specialty?",
];

const origins = [
  { title: "Cầu Đất, Lâm Đồng", text: "Độ cao 1.500m, Arabica hương hoa và acid sáng." },
  { title: "Đắk Lắk", text: "Thủ phủ Robusta, hậu vị đậm và body dày." },
  { title: "Sơn La", text: "Arabica vùng núi phía Bắc, ngọt hậu và cân bằng." },
];

const factoryFacts = [
  "2.000m²",
  "10.000+ kg/ngày",
  "HACCP",
  "Kiểm soát chất lượng",
  "OEM Manufacturing",
  "Private Label",
  "Export Ready",
];

const lifestyleCards = [
  { title: "Coffee & Work", text: "Nguồn năng lượng cho những giờ tập trung.", image: lifestyle },
  { title: "Coffee & Travel", text: "Hương vị đồng hành trên mọi hành trình.", image: origin },
  { title: "Coffee & Community", text: "Kết nối con người qua từng tách cà phê.", image: cup },
];

const Index = () => (
  <>
    <PageHero
      eyebrow="Premium Vietnamese Coffee"
      title={"FROM BEAN\nTO BEING."}
      text="Cà phê rang xay chất lượng cao từ cao nguyên Bảo Lộc. Cung cấp cà phê rang, cà phê túi lọc, cà phê hòa tan và giải pháp gia công OEM cho đối tác trong và ngoài nước."
      image={heroFactory}
    >
      <CtaLink to="/san-pham">Khám phá sản phẩm</CtaLink>
      <CtaLink to="/oem" variant="ghost">
        Giải pháp OEM
      </CtaLink>
    </PageHero>

    {/* SECTION 01 — NĂNG LỰC NỔI BẬT */}
    <Section tone="white">
      <SectionHead eyebrow="Capabilities" title="Năng Lực Nổi Bật" />
      <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((c, i) => (
          <div key={c.title} className="bg-card p-8">
            <span className="caption mb-5 block text-primary">0{i + 1}</span>
            <h3 className="h3-title text-foreground">{c.title}</h3>
            <p className="mt-3 text-[15px] font-light leading-[1.7] text-muted-foreground">{c.text}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* SECTION 02 — VIDEO NỔI BẬT */}
    <Section>
      <SectionHead
        eyebrow="Featured Videos"
        title="Video Nổi Bật"
        subtitle="Hành trình từ vùng nguyên liệu đến nhà máy, kể bằng hình ảnh."
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {videos.map((v) => (
          <ImageCard key={v.title} {...v} ratio="aspect-[3/4]" />
        ))}
      </div>
    </Section>

    {/* SECTION 03 — RECIPE & BREWING */}
    <Section tone="stone">
      <SectionHead
        eyebrow="Recipe & Brewing"
        title="Công Thức Pha Chế"
        subtitle="Ba cách pha quen thuộc để khai thác trọn vẹn hương vị của từng mẻ rang."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {recipes.map((r) => (
          <ImageCard key={r.title} {...r} />
        ))}
      </div>
    </Section>

    {/* SECTION 04 — KIẾN THỨC CÀ PHÊ */}
    <Section>
      <SectionHead eyebrow="Knowledge" title="Kiến Thức Cà Phê" />
      <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
        {knowledge.map((k, i) => (
          <article key={k} className="group bg-card p-8 transition-colors hover:bg-stone md:p-10">
            <span className="caption mb-4 block text-primary">Bài viết 0{i + 1}</span>
            <h3 className="font-heading text-2xl leading-snug text-foreground md:text-[28px]">{k}</h3>
            <span className="caption mt-6 inline-block text-mocha">Đọc tiếp →</span>
          </article>
        ))}
      </div>
    </Section>

    {/* SECTION 05 — ORIGIN STORY */}
    <Section tone="espresso">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHead
            eyebrow="Origin Story"
            title="Từ Những Vùng Trồng Việt Nam"
            subtitle="Mỗi vùng nguyên liệu mang một đặc tính hương vị riêng, được TOBE tuyển chọn và thu mua trực tiếp."
            invert
          />
          <div className="overflow-hidden rounded-sm">
            <img src={origin} alt="Vùng nguyên liệu" loading="lazy" className="h-[320px] w-full object-cover md:h-[420px]" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          {origins.map((o, i) => (
            <div key={o.title} className="border-b border-ivory/12 py-8 first:pt-0 last:border-0">
              <span className="caption mb-3 block text-primary">0{i + 1}</span>
              <h3 className="font-heading text-3xl text-ivory">{o.title}</h3>
              <p className="mt-3 text-[15px] font-light leading-[1.75] text-ivory/60">{o.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* SECTION 06 — FACTORY TOUR */}
    <Section>
      <SectionHead
        eyebrow="Factory Tour"
        title="Nhà Máy TOBE Tại Bảo Lộc"
        subtitle="Hệ thống rang xay và đóng gói khép kín, vận hành theo tiêu chuẩn quốc tế."
      />
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-sm">
          <img src={factoryLine} alt="Dây chuyền sản xuất TOBE" loading="lazy" className="h-[320px] w-full object-cover md:h-[460px]" />
        </div>
        <div className="flex flex-wrap gap-3">
          {factoryFacts.map((f) => (
            <span
              key={f}
              className="rounded-sm border border-border bg-card px-5 py-3 font-body text-sm text-foreground"
            >
              {f}
            </span>
          ))}
          <div className="mt-6 w-full">
            <CtaLink to="/oem" variant="secondary">
              Xem năng lực OEM
            </CtaLink>
          </div>
        </div>
      </div>
    </Section>

    {/* SECTION 07 — LIFESTYLE */}
    <Section tone="stone">
      <SectionHead eyebrow="Lifestyle" title="Cà Phê Trong Đời Sống" />
      <div className="grid gap-8 md:grid-cols-3">
        {lifestyleCards.map((l) => (
          <ImageCard key={l.title} {...l} />
        ))}
      </div>
      <div className="mt-14">
        <Card className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="font-heading text-3xl text-foreground">Sản phẩm TOBE</h3>
            <p className="mt-2 text-[15px] font-light text-muted-foreground">
              Cà phê hạt, cà phê xay, drip bag và cà phê hòa tan.
            </p>
          </div>
          <CtaLink to="/san-pham">Xem sản phẩm</CtaLink>
        </Card>
      </div>
      <img src={product} alt="" className="sr-only" aria-hidden />
    </Section>
  </>
);

export default Index;
