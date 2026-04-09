import storyBrewing from "@/assets/story-brewing.jpg";

const stats = [
  { value: "600+", label: "Nông hộ liên kết sản xuất, kinh doanh và trồng trọn bền vững" },
  { value: "2000+", label: "Trang xay nguyên nhất được sản xuất mỗi ngày" },
  { value: "450+", label: "Bộ bao chuỗi cửa hàng nhượng quyền sản và dịch vụ thương" },
];

const ProcessSection = () => {
  return (
    <section id="process" className="relative overflow-hidden">
      {/* Wave top */}
      <div className="relative">
        <svg className="absolute top-0 left-0 w-full z-10" viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ transform: 'translateY(-99%)' }}>
          <path d="M0,80 C360,0 1080,0 1440,80 L1440,80 L0,80 Z" fill="transparent" />
          <path d="M0,80 C360,0 1080,0 1440,80" fill="none" stroke="hsl(var(--background))" strokeWidth="0" />
          <path d="M0,80 Q720,-20 1440,80 L1440,0 L0,0 Z" fill="hsl(var(--background))" />
        </svg>
        <div className="relative h-[300px] md:h-[400px] fade-in-up">
          <img
            src={storyBrewing}
            alt="TOBE Coffee Process"
            className="w-full h-full object-cover"
            loading="lazy"
            width={1920}
            height={600}
          />
          <div className="absolute inset-0 bg-foreground/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="grid grid-cols-3 gap-6 md:gap-12 text-center">
                {stats.map((stat) => (
                  <div key={stat.value} className="flex flex-col items-center">
                    <span className="font-heading font-black text-3xl md:text-5xl lg:text-6xl text-primary-foreground block mb-1">
                      {stat.value}
                    </span>
                    <span className="text-primary-foreground/80 font-light text-xs md:text-sm leading-snug block max-w-[200px]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
