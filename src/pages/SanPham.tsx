import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CtaLink, ImageCard, PageHero, Section, SectionHead } from "@/components/site/primitives";
import product from "@/assets/tobe-product.jpg";
import beans from "@/assets/tobe-beans.jpg";
import brewing from "@/assets/tobe-brewing.jpg";
import cup from "@/assets/tobe-cup.jpg";
import factory from "@/assets/tobe-factory-line.jpg";

const filters = ["Tất cả", "Cà phê hạt", "Cà phê xay", "Drip bag", "Cà phê hòa tan", "Quà tặng"];

const products = [
  { title: "TOBE Signature Blend", eyebrow: "Cà phê hạt", text: "Robusta & Arabica, hậu vị socola và hạnh nhân.", image: product },
  { title: "Bao Loc Arabica", eyebrow: "Cà phê hạt", text: "Hương hoa, acid sáng, hậu ngọt kéo dài.", image: beans },
  { title: "Fine Ground Espresso", eyebrow: "Cà phê xay", text: "Xay mịn cho máy espresso, crema dày.", image: cup },
  { title: "Phin Grind", eyebrow: "Cà phê xay", text: "Xay dành riêng cho phin truyền thống.", image: brewing },
  { title: "TOBE Drip Bag", eyebrow: "Drip bag", text: "Túi lọc tiện lợi, pha nhanh trong 3 phút.", image: product },
  { title: "Instant Black", eyebrow: "Cà phê hòa tan", text: "Cà phê hòa tan nguyên chất, không phụ gia.", image: factory },
  { title: "Gift Box Heritage", eyebrow: "Quà tặng", text: "Hộp quà cao cấp cho doanh nghiệp và đối tác.", image: cup },
  { title: "Cold Brew Concentrate", eyebrow: "Drip bag", text: "Cốt cà phê ủ lạnh, pha loãng theo khẩu vị.", image: brewing },
];

const specs = [
  ["Giống", "Arabica / Robusta"],
  ["Vùng trồng", "Bảo Lộc, Cầu Đất, Đắk Lắk"],
  ["Độ rang", "Light / Medium / Dark"],
  ["Hương vị", "Socola, hạnh nhân, trái cây chín"],
  ["Quy cách", "250g / 500g / 1kg / 5kg"],
  ["Hạn dùng", "12 tháng kể từ ngày sản xuất"],
];

const packaging = ["250g", "500g", "1kg", "5kg", "Túi kraft van một chiều", "Hộp quà tặng", "Bao bì riêng theo yêu cầu"];

const SanPham = () => {
  const [active, setActive] = useState("Tất cả");
  const list = active === "Tất cả" ? products : products.filter((p) => p.eyebrow === active);

  return (
    <>
      <PageHero
        eyebrow="Danh mục sản phẩm"
        title="SẢN PHẨM TOBE"
        text="Cà phê hạt, cà phê xay, drip bag, cà phê hòa tan và các dòng quà tặng — sản xuất tại nhà máy Bảo Lộc theo tiêu chuẩn HACCP."
        image={product}
      >
        <CtaLink to="/lien-he">Nhận bảng giá sỉ</CtaLink>
      </PageHero>

      <Section tone="white" className="!py-10 md:!py-12">
        <div className="flex flex-wrap gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-sm border px-5 py-2.5 font-body text-[12px] font-medium uppercase tracking-[0.14em] transition-colors",
                active === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p) => (
            <ImageCard key={p.title} {...p} ratio="aspect-square" />
          ))}
        </div>
      </Section>

      <Section tone="stone">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHead eyebrow="Thông số" title="Chi Tiết Sản Phẩm" />
            <dl className="divide-y divide-border border-y border-border">
              {specs.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-8 py-4">
                  <dt className="caption text-mocha">{k}</dt>
                  <dd className="text-right text-[15px] font-light text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <SectionHead eyebrow="Quy cách" title="Đóng Gói" />
            <div className="flex flex-wrap gap-3">
              {packaging.map((p) => (
                <span key={p} className="rounded-sm border border-border bg-card px-5 py-3 text-sm text-foreground">
                  {p}
                </span>
              ))}
            </div>
            <Card className="mt-10">
              <h3 className="h3-title text-foreground">Cần bao bì riêng cho thương hiệu của bạn?</h3>
              <p className="mt-2 text-[15px] font-light text-muted-foreground">
                TOBE hỗ trợ thiết kế và sản xuất bao bì private label từ 500kg.
              </p>
              <div className="mt-6">
                <CtaLink to="/oem" variant="secondary">
                  Tìm hiểu OEM
                </CtaLink>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
};

export default SanPham;
