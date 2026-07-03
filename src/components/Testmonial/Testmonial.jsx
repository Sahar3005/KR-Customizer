import { useEffect, useState } from "react";
import "./Testmonial.css";

function Testimonials() {

    const testimonials = [
        {
            name: "James Parker",
            role: "Store Owner",
            text: "Customization was a pain before this. Customers can now quickly create items and see exactly what they'll get. It's made shopping a lot more enjoyable, increased sales, and reduced returns. Our team grows the business instead of fixing mistakes all the time. We couldn't have run our store without it.",
            image: "/user1.png"
        },
        {
            name: "Lily Thompson",
            role: "Small Business Founder",
            text: "KR Customizer's tool works for all of the things we sell, like mugs, t-shirts, and gifts. Customers are more likely to buy when they can see their thoughts right away. It made our store feel more engaging, got more people involved, and turned casual shoppers into passionate customers who keep coming back for more.",
            image: "/user2.png"
        },
        {
            name: "David Kim",
            role: "E-Commerce Seller",
            text: "We didn't know how to start making custom sports gear, but we wanted to. It was really simple to set up this tool, and it works great with our Shopify shop. Lots of people have bought it before and will buy it again. It has completely changed how people see our business.",
            image: "/user3.png"
        },
        {
            name: "Sarah Mitchell",
            role: "E-commerce Director",
            text: "This changed how we talk to customers in a big way. They love making their own clothes, and sales have gone up in all areas, from clothing to home decor. It's great for new styles, launches, and everyday shopping. Our buyers feel like they know us better, and our business feels more personal.",
            image: "/user4.png"
        }
    ];

    const [active, setActive] = useState(1);

    useEffect(() => {

        const timer = setInterval(() => {

            setActive((prev) => (prev + 1) % testimonials.length);

        }, 4000);

        return () => clearInterval(timer);

    }, []);

    return (

        <section className="testimonial">

            <h2>
                What KR Customizer's
                <br />
                <span>Clients Are Saying</span>
            </h2>

            <div className="cards">

                {testimonials.map((item, index) => {

                    let cls = "hidden";

                    const prev =
                        (active - 1 + testimonials.length) % testimonials.length;

                    const next =
                        (active + 1) % testimonials.length;

                    if (index === prev) {
                        cls = "left";
                    }

                    if (index === active) {
                        cls = "center";
                    }

                    if (index === next) {
                        cls = "right";
                    }

                    return (

                        <div className={`card ${cls}`} key={index}>

                            <div className="stars">★★★★★</div>

                            <p>{item.text}</p>

                            <div className="user">

                                <img src={item.image} alt="" />

                                <div>
                                    <h4>{item.name}</h4>
                                    <span>{item.role}</span>
                                </div>

                            </div>

                        </div>

                    );

                })}

            </div>

            <div className="dots">

                {testimonials.map((_, index) => (

                    <span
                        key={index}
                        className={active === index ? "active" : ""}
                        onClick={() => setActive(index)}
                    ></span>

                ))}

            </div>

        </section>

    );
}

export default Testimonials;