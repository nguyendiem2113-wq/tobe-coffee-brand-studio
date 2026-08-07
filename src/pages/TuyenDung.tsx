import { Card, CtaLink, PageHero, Section, SectionHead } from "@/components/site/primitives";
import team from "@/assets/tobe-team.jpg";
import factory from "@/assets/tobe-factory-line.jpg";

const values = [
  { title: "Craft", text: "Tôn trọng nghề, làm kỹ từ hạt cà phê đến bao bì." },
  { title: "Clarity", text: "Giao tiếp thẳng thắn, quy trình minh bạch." },
  { title: "Care", text: "Quan tâm đến nông hộ, đồng nghiệp và khách hàng." },
];

const jobs = [
  { role: "Nhân viên QC", place: "Bảo Lộc, Lâm Đồng", type: "Toàn thời gian" },
  { role: "Kỹ thuật viên rang", place: "Bảo Lộc, Lâm Đồng", type: "Toàn thời gian" },
  { role: "Nhân viên kinh doanh B2B", place: "TP. Hồ Chí Minh", type: "Toàn thời gian" },
  { role: "Chuyên viên Marketing", place: "Remote / Bảo Lộc", type: "Toàn thời gian" },
  { role: "Nhân viên vận hành kho", place: "Bảo Lộc, Lâm Đồng", type: "Toàn thời gian" },
];

const benefits = [
  "Lương thưởng cạnh tranh",
  "Bảo hiểm đầy đủ",
  "Đào tạo chuyên môn cà phê",
  "Cà phê miễn phí hàng tháng",
  "Lộ trình thăng tiến rõ ràng",
  "Môi trường sản xuất chuẩn HACCP",
];

const TuyenDung = () => (
  <>
    <PageHero
      eyebrow="Tuyển dụng"
      title={"LÀM VIỆC\nCÙNG TOBE"}
      text="Chúng tôi tìm những người yêu nghề, tỉ mỉ và muốn góp phần đưa cà phê Việt Nam đi xa hơn."
      image={team}
    >
      <CtaLink href="mailto:tobebaoloc@gmail.com">Gửi CV</CtaLink>
    </PageHero>

    <Section tone="white">
      <SectionHead eyebrow="Văn hóa" title="Giá Trị Chúng Tôi Theo Đuổi" />
      <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
        {values.map((v, i) => (
          <div key={v.title} className="bg-card p-8 md:p-10">
            <span className="caption mb-5 block text-primary">0{i + 1}</span>
            <h3 className="font-heading text-3xl text-foreground">{v.title}</h3>
            <p className="mt-3 text-[15px] font-light leading-[1.7] text-muted-foreground">{v.text}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section>
      <SectionHead eyebrow="Vị trí đang tuyển" title="Cơ Hội Hiện Tại" />
      <div className="divide-y divide-border border-y border-border">
        {jobs.map((j) => (
          <article key={j.role} className="flex flex-col gap-3 py-7 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="font-heading text-3xl text-foreground">{j.role}</h3>
              <p className="mt-1 text-sm font-light text-muted-foreground">
                {j.place} · {j.type}
              </p>
            </div>
            <CtaLink href="mailto:tobebaoloc@gmail.com" variant="secondary">
              Ứng tuyển
            </CtaLink>
          </article>
        ))}
      </div>
    </Section>

    <Section tone="stone">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHead eyebrow="Phúc lợi" title="Những Gì Bạn Nhận Được" />
          <div className="flex flex-wrap gap-3">
            {benefits.map((b) => (
              <span key={b} className="rounded-sm border border-border bg-card px-5 py-3 text-sm text-foreground">
                {b}
              </span>
            ))}
          </div>
          <Card className="mt-10">
            <h3 className="h3-title text-foreground">Không thấy vị trí phù hợp?</h3>
            <p className="mt-2 text-[15px] font-light text-muted-foreground">
              Gửi CV về tobebaoloc@gmail.com — chúng tôi luôn tìm kiếm người đồng hành.
            </p>
          </Card>
        </div>
        <div className="overflow-hidden rounded-sm">
          <img src={factory} alt="Đội ngũ TOBE tại nhà máy" loading="lazy" className="h-[320px] w-full object-cover lg:h-full" />
        </div>
      </div>
    </Section>
  </>
);

export default TuyenDung;
