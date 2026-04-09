import storyBrewing from "@/assets/story-brewing.jpg";

const stats = [
  { value: "600+", label: "Nông hộ liên kết sản xuất, kinh doanh và trồng trọn bền vững" },
  { value: "2000+", label: "Trang xay nguyên nhất được sản xuất mỗi ngày" },
  { value: "450+", label: "Bộ bao chuỗi cửa hàng nhượng quyền sản và dịch vụ thương" },
];

const ProcessSection = () => {
  return (
    <section id="process" className="relative overflow-hidden">
      {/* Full-width background image with stats overlay */}
      <div className="relative h-[300px] md:h-[350px] fade-in-up">
        <img
          src={storyBrewing}
          alt="TOBE Coffee Process"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={600}
        />
        <div className="absolute inset-0 bg-foreground/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-3 gap-6 md:gap-12 text-center">
              {stats.map((stat) => (
                <div key={stat.value}>
                  <span className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-primary-foreground block mb-2">
                    {stat.value}
                  </span>
                  <span className="text-primary-foreground/70 font-light text-xs md:text-sm leading-snug block max-w-[200px] mx-auto">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
