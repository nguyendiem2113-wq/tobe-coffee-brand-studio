import { useState } from "react";
import { cn } from "@/lib/utils";
import { CtaLink, ImageCard, PageHero, Section, SectionHead } from "@/components/site/primitives";
import origin from "@/assets/tobe-origin.jpg";
import beans from "@/assets/tobe-beans.jpg";
import brewing from "@/assets/tobe-brewing.jpg";
import lifestyle from "@/assets/tobe-lifestyle.jpg";
import cup from "@/assets/tobe-cup.jpg";
import factory from "@/assets/tobe-hero-factory.jpg";

const categories = ["Tất cả", "Nguồn gốc", "Kiến thức", "Công thức", "TOBE Stories", "Lối sống"];

const places = [
  "Cầu Đất, Lâm Đồng",
  "Bảo Lộc, Lâm Đồng",
  "Đắk Lắk",
  "Sơn La",
  "Lâm Hà, Lâm Đồng",
  "Di Linh, Lâm Đồng",
];

const knowledge = [
  { title: "Arabica và Robusta khác nhau như thế nào?", image: beans },
  { title: "Độ rang ảnh hưởng đến hương vị ra sao?", image: factory },
  { title: "Bảo quản cà phê đúng cách", image: cup },
  { title: "Vì sao nên dùng cà phê Specialty?", image: brewing },
];

const recipes = [
  { title: "Cold Brew", text: "Ủ lạnh chậm, vị ngọt dịu và ít chua.", image: brewing },
  { title: "Pour Over", text: "Chiết xuất trong trẻo, làm rõ hương vùng trồng.", image: cup },
  { title: "Phin truyền thống", text: "Đậm đà, chậm rãi, rất Việt Nam.", image: beans },
];

const stories = [
  "Hành trình từ nông trại đến tách cà phê",
  "Nghệ thuật rang và vị trí của TOBE",
  "TOBE – Cam kết chất lượng trong từng hạt cà phê",
];

const life = [
  { title: "Cà phê & Công việc", image: lifestyle },
  { title: "Cà phê & Du lịch", image: origin },
  { title: "Cà phê & Cộng đồng", image: cup },
  { title: "Cà phê & Buổi sáng", image: brewing },
  { title: "Cà phê & Sống chậm", image: beans },
];

const KhamPha = () => {
  const [active, setActive] = useState("Tất cả");

  return (
    <>
      <PageHero
        eyebrow="Câu chuyện, kiến thức và cảm hứng từ thế giới cà phê."
        title="KHÁM PHÁ"
        text="Hành trình khám phá con người, những trải nghiệm và khoảnh khắc thường ngày tạo nên TOBE."
        image={origin}
      >
        <CtaLink to="/kham-pha">Xem video mới nhất</CtaLink>
      </PageHero>

      {/* SECTION 01 — CATEGORY */}
      <Section tone="white" className="!py-10 md:!py-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "rounded-sm border px-5 py-2.5 font-body text-[12px] font-medium uppercase tracking-[0.14em] transition-colors",
                active === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </Section>

      {/* SECTION 02 — NGUỒN GỐC */}
      <Section>
        <SectionHead eyebrow="Nguồn gốc" title="From Bao Loc Highlands" />
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-sm">
            <img src={origin} alt="Cao nguyên Bảo Lộc" loading="lazy" className="h-[340px] w-full object-cover lg:h-full" />
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {places.map((p, i) => (
              <li key={p} className="flex items-baseline gap-6 py-6">
                <span className="caption text-primary">0{i + 1}</span>
                <span className="font-heading text-2xl text-foreground md:text-[28px]">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* SECTION 03 — KIẾN THỨC */}
      <Section tone="stone">
        <SectionHead eyebrow="Kiến thức" title="Hiểu Hơn Về Cà Phê" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {knowledge.map((k) => (
            <ImageCard key={k.title} {...k} ratio="aspect-[4/5]" />
          ))}
        </div>
      </Section>

      {/* SECTION 04 — CÔNG THỨC */}
      <Section>
        <SectionHead eyebrow="Công thức" title="Cách Pha Của TOBE" />
        <div className="grid gap-8 md:grid-cols-3">
          {recipes.map((r) => (
            <ImageCard key={r.title} {...r} />
          ))}
        </div>
      </Section>

      {/* SECTION 05 — TOBE STORIES */}
      <Section tone="espresso">
        <SectionHead eyebrow="TOBE Stories" title="Những Câu Chuyện Của Chúng Tôi" invert />
        <div className="divide-y divide-ivory/12 border-y border-ivory/12">
          {stories.map((s, i) => (
            <article key={s} className="flex flex-col gap-3 py-8 md:flex-row md:items-center md:gap-10">
              <span className="caption text-primary md:w-16">0{i + 1}</span>
              <h3 className="font-heading text-3xl leading-snug text-ivory md:text-4xl">{s}</h3>
            </article>
          ))}
        </div>
      </Section>

      {/* SECTION 06 — LỐI SỐNG */}
      <Section tone="stone">
        <SectionHead eyebrow="Lối sống" title="Cà Phê Và Nhịp Sống" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {life.map((l) => (
            <ImageCard key={l.title} {...l} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default KhamPha;
