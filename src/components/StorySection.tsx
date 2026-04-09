import { Button } from "@/components/ui/button";
import storyBrewing from "@/assets/story-brewing.jpg";

const StorySection = () => {
  return (
    <section id="story" className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="fade-in-up grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded">
            <img
              src={storyBrewing}
              alt="Về chúng tôi"
              className="w-full h-[350px] lg:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3 block">
              Về Chúng Tôi
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight mb-5">
              Coffee Is In Our Blood!
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed text-base mb-4">
              Chúng tôi tìm đến xung quanh cà phê, sến đồi suối hoa hai mặt bà. Bạn có
              thể và công chúng tôi tôi được nguồn gốc trong rất Tây Nguyên quả hương,
              nước rừng dòi tà Nối Trong không Bạn, và không có phần quan trọng nhất
              là Việt Nam.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed text-base mb-6">
              Tại TOBE chúng tôi tập trung mọi nguồn lực và đam mê để hướng đến chế biến sâu
              cà phê Việt Nam. Mang đến thị trường sản phẩm cà phê hảo hạng — tiện lợi và
              ngon thuần khiết.
            </p>
            <Button variant="hero" size="lg" className="px-8 py-5 text-sm">
              Xem Thêm Về Chúng Tôi
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
