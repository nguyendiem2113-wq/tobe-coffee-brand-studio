import { Card, CtaLink, PageHero, Section, SectionHead } from "@/components/site/primitives";
import factoryLine from "@/assets/tobe-factory-line.jpg";
import factory from "@/assets/tobe-hero-factory.jpg";
import product from "@/assets/tobe-product.jpg";

const steps = [
  { title: "Tiếp nhận yêu cầu", text: "Trao đổi nhu cầu sản lượng, hương vị và ngân sách." },
  { title: "Phát triển công thức", text: "Thử nghiệm blend và độ rang theo định vị thương hiệu." },
  { title: "Mẫu thử & phê duyệt", text: "Gửi mẫu, hiệu chỉnh đến khi đạt hồ sơ hương vị mong muốn." },
  { title: "Thiết kế bao bì", text: "Hỗ trợ thiết kế, in ấn và hoàn thiện private label." },
  { title: "Sản xuất hàng loạt", text: "Rang, xay và đóng gói trên dây chuyền tiêu chuẩn HACCP." },
  { title: "Kiểm định & giao hàng", text: "QC từng lô, chứng từ đầy đủ, hỗ trợ xuất khẩu." },
];

const capacity = [
  ["Sản lượng", "10.000+ kg/ngày"],
  ["MOQ", "Từ 500 kg / mã sản phẩm"],
  ["Thời gian mẫu", "7 – 10 ngày làm việc"],
  ["Thời gian sản xuất", "15 – 25 ngày"],
  ["Chứng nhận", "HACCP, ISO-ready"],
  ["Thị trường", "Nội địa & xuất khẩu"],
];

const formats = [
  "Cà phê hạt rang",
  "Cà phê xay",
  "Drip bag",
  "Cà phê hòa tan",
  "Cold brew concentrate",
  "Hộp quà doanh nghiệp",
];

const Oem = () => (
  <>
    <PageHero
      eyebrow="OEM & Private Label"
      title={"GIA CÔNG\nTHEO THƯƠNG HIỆU"}
      text="TOBE đồng hành cùng các thương hiệu cà phê từ khâu phát triển công thức, thiết kế bao bì đến sản xuất và xuất khẩu."
      image={factoryLine}
    >
      <CtaLink to="/lien-he">Yêu cầu báo giá OEM</CtaLink>
    </PageHero>

    <Section tone="white">
      <SectionHead
        eyebrow="Quy trình"
        title="6 Bước Hợp Tác OEM"
        subtitle="Một quy trình minh bạch, có mốc thời gian rõ ràng cho từng giai đoạn."
      />
      <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <div key={s.title} className="bg-card p-8">
            <span className="caption mb-5 block text-primary">Bước 0{i + 1}</span>
            <h3 className="h3-title text-foreground">{s.title}</h3>
            <p className="mt-3 text-[15px] font-light leading-[1.7] text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section tone="espresso">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHead eyebrow="Năng lực" title="Thông Số Sản Xuất" invert />
          <dl className="divide-y divide-ivory/12 border-y border-ivory/12">
            {capacity.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-8 py-4">
                <dt className="caption text-primary">{k}</dt>
                <dd className="text-right text-[15px] font-light text-ivory/80">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="overflow-hidden rounded-sm">
          <img src={factory} alt="Nhà máy rang xay TOBE" loading="lazy" className="h-[320px] w-full object-cover lg:h-full" />
        </div>
      </div>
    </Section>

    <Section>
      <SectionHead eyebrow="Định dạng sản phẩm" title="Chúng Tôi Gia Công Những Gì?" />
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-wrap gap-3">
          {formats.map((f) => (
            <span key={f} className="rounded-sm border border-border bg-card px-5 py-3 text-sm text-foreground">
              {f}
            </span>
          ))}
        </div>
        <Card>
          <img src={product} alt="Bao bì private label TOBE" loading="lazy" className="mb-6 h-56 w-full rounded-sm object-cover" />
          <h3 className="h3-title text-foreground">Private Label trọn gói</h3>
          <p className="mt-2 text-[15px] font-light leading-[1.7] text-muted-foreground">
            Từ tem nhãn, túi kraft van một chiều đến hộp quà — TOBE hỗ trợ hoàn thiện nhận diện trên
            từng sản phẩm.
          </p>
          <div className="mt-7">
            <CtaLink to="/lien-he">Bắt đầu dự án</CtaLink>
          </div>
        </Card>
      </div>
    </Section>
  </>
);

export default Oem;
