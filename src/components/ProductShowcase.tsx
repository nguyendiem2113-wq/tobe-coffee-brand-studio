import productDrip from "@/assets/product-drip.jpg";
import productBeans from "@/assets/product-beans.jpg";
import productCan from "@/assets/product-can.jpg";

const products = [
  {
    title: "Cà Phê Nhân cho\nNhà Rang Xay",
    subtitle: "CUNG ỨNG",
    image: productDrip,
  },
  {
    title: "Cà Phê Rang cho\nQuán, Chuỗi F&B",
    subtitle: "CUNG CẤP",
    image: productBeans,
  },
  {
    title: "Menu Thức Uống\nvà Vận Hành Quầy",
    subtitle: "SETUP & HUẤN LUYỆN",
    image: productCan,
  },
];

const ProductShowcase = () => {
  return (
    <section id="products" className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 fade-in-up">
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground uppercase tracking-wide">
            Danh mục sản phẩm
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="fade-in-up group relative overflow-hidden rounded h-72 md:h-80 cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
                width={800}
                height={800}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-foreground/40 group-hover:bg-foreground/50 transition-colors duration-300" />
              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-primary-foreground/70 font-heading font-semibold text-xs tracking-[0.15em] uppercase block mb-1">
                  {product.subtitle}
                </span>
                <h3 className="font-heading font-bold text-lg text-primary-foreground leading-snug whitespace-pre-line">
                  {product.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
