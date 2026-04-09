import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const articles = [
  {
    image: news1,
    title: "Hành trình khám phá vùng cà phê Đắk Lắk cùng TOBE",
    excerpt:
      "Theo chân đội ngũ TOBE đến tận vườn cà phê để tuyển chọn những hạt tốt nhất từ vùng cao nguyên...",
  },
  {
    image: news2,
    title: "Nghệ thuật pha cà phê: Bí quyết từ chuyên gia TOBE",
    excerpt:
      "Chia sẻ những bí quyết pha chế đơn giản để có tách cà phê hoàn hảo tại nhà...",
  },
  {
    image: news3,
    title: "TOBE ra mắt dòng sản phẩm Premium mới",
    excerpt:
      "Dòng cà phê cao cấp mới với hương vị độc đáo, đánh dấu bước phát triển mới...",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 fade-in-up">
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-primary">
            Góc lắng đọng
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className="fade-in-up group cursor-pointer bg-background rounded overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-base text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed mb-3">
                  {article.excerpt}
                </p>
                <span className="text-primary font-heading font-semibold text-sm tracking-wide hover:underline underline-offset-4">
                  Đọc thêm →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
