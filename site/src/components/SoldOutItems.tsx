import Image from "next/image";

type SoldItem = {
    id: number;
    image: string;
    title: string;
    description?: string;
    rating?: number;
    review?: string;
};

const soldItems: SoldItem[] = [
    {
        id: 1,
        image: "/sold/pulp-magazines.jpg",
        title: "A1 Seller",
        description:
            'This collection features over 20 original "Men\'s Adventure" pulp magazines, primarily from the 1950s and 1960s. These publications are famous for their vibrant, "sweat magazine" cover art, over-the-top headlines, and sensationalist storytelling.',
    },
    {
        id: 2,
        image: "/sold/mad-magazines.jpg",
        title: "Vintage 1956 & 1957 Mad Magazines Lot",
        rating: 5,
        review: "\"FABULOUS NEW SELLER! RECOMMENDED!\" - Dave R.",
    },
    {
        id: 3,
        image: "/sold/birdsey-watercolor.jpg",
        title:
            "Alfred Birdsey Watercolor Painting Bermuda - NO RESERVE - Gimbels",
        rating: 5,
        review:
            "\u201cHello, fantastic experience all around! The seller contacted me immediately and even offered to meet me somewhere\u2014at my convenience\u2014 so I could have my purchase sooner and not wait for the shipping. My art work was extremely well packed! Lots of bubble wrap and tape. Super friendly, professional, efficient, and I\u2019m super pleased with the entire process. And my item is in great condition. Many thanks!\u201d - Sarah T.",
    },
    {
        id: 4,
        image: "/sold/minstrel-poster.jpg",
        title:
            "RARE Black African-American Lithograph Poster Vaudville Minstrel Show New York",
        rating: 5,
        review: "\"Great poster! Exactly as described and very securely packaged.\" - Josh K.",
    },
    {
        id: 5,
        image: "/sold/cynic-magazines.jpg",
        title:
            'University of Cincinnati Ohio "Cynic" 1925 & 1926 Magazine Lot',
        rating: 5,
        review:
            "\u201cGreat collection of items, all packaged securely and arrived quickly. Seller followed up to keep me informed and the items were exactly as described. Very happy with the transaction and would purchase from seller again.\u201d - Mark L.",
    },
    {
        id: 6,
        image: "/sold/toy-knights.jpg",
        title: "Britains Made in Hong Kong Vintage Toy Knights Lot",
        rating: 4,
        review: "\"Really cool vintage set, very happy with the purchase.\" - Bob A.",
    },
    {
        id: 7,
        image: "/sold/na-pamphlets.jpg",
        title: "Narcotics Anonymous N.A. Lot of (5) 1976-1981 Pamphlets Booklets 1976-1981 -Drug Addiction Literature",
        rating: 5,
        review: "\"Excellent transaction. The pamphlets were carefully packaged.\" - Emily W.",
    },
    {
        id: 8,
        image: "/sold/NA2.jpg",
        title: "Narcotics Anonymous N.A. Lot of (6) 1976 Brochures Drug Addiction Literature",
        rating: 5,
        review: "\"Item as described, thank you! Glad to add this to my collection.\" - Mike S.",
    },
    {
        id: 9,
        image: "/sold/Mario.jpg",
        title: "Mario Lemieux Pittsburgh Penguins Rookie Hockey Card 1985 Topps #9 Ex-Mint Not Graded",
        rating: 5,
        review: "\"Awesome seller who is very attentive to his buyers\u2026 will look to buy from this seller again!\" - Greg P.",
    },
    {
        id: 10,
        image: "/sold/Rod.jpg",
        title: "Rod Carew Minnesota Twins Baseball Card 1968 Topps #80 Ex-Mint Not Graded",
        rating: 5,
        review: "\"A+++ Seller. Great communication, shipping. Very happy with card\u2014accurate description.\" - Steve J.",
    },
    {
        id: 11,
        image: "/sold/Duke.jpg",
        title: "Rare Duke Ellington Vintage & Original 1935 Jazz Concert Handbill Cincinnati Ohio",
        rating: 5,
        review: "\"A real piece of history! Well packed and shipped fast.\" - Alice M.",
    },
];

export default function SoldOutItems() {
    return (
        <section className="sold-section">
            <div className="ornate-divider" style={{ marginTop: "3rem" }}>
                <span>&#10022;</span>
            </div>
            <h2 className="sold-section-title">Sold Out Items</h2>
            <p className="sold-section-subtitle">
                A showcase of treasures that found new homes
            </p>
            <div className="ornate-divider">
                <span>&#10022;</span>
            </div>

            <div className="sold-list">
                {soldItems.map((item, index) => (
                    <article
                        key={item.id}
                        className={`sold-item ${index % 2 === 1 ? "sold-item--reverse" : ""}`}
                    >
                        <div className="sold-item-image-wrap">
                            <div className="sold-item-badge">SOLD</div>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={600}
                                height={400}
                                className="sold-item-image"
                            />
                        </div>

                        <div className="sold-item-body">
                            <h3 className="sold-item-title">{item.title}</h3>
                            {item.rating ? (
                                <div className="bg-black/70 text-white p-4 rounded-lg shadow-xl shadow-black/40 border-t-4 border-blue-500 relative transform transition hover:-translate-y-1 my-2 text-sm max-w-sm ml-auto mr-auto sm:mr-0 flex flex-col gap-2">
                                    <div className="flex text-[#F5AF02] text-xl tracking-widest drop-shadow-md">
                                        {"★".repeat(item.rating)}
                                    </div>
                                    <p className="italic font-light leading-relaxed text-gray-100">{item.review}</p>
                                    <div className="flex items-center gap-2 mt-1 pt-2 border-t border-white/20 text-xs text-gray-300 font-medium">
                                        <span>Sold on</span>
                                        <span className="font-bold tracking-tighter text-[1.1rem] font-sans -space-x-[1px] flex items-baseline bg-white/95 px-1.5 py-0.5 rounded-sm shadow-md">
                                            <span className="text-[#E53238]">e</span>
                                            <span className="text-[#0064D2]">b</span>
                                            <span className="text-[#F5AF02]">a</span>
                                            <span className="text-[#86B817]">y</span>
                                        </span>
                                    </div>
                                </div>
                            ) : item.description ? (
                                <div className="sold-item-desc">
                                    <p>{item.description}</p>
                                </div>
                            ) : (
                                <p className="sold-item-tagline">
                                    &#10022; Acquired by a private collector &#10022;
                                </p>
                            )}
                        </div>

                        {index < soldItems.length - 1 && (
                            <div className="sold-item-divider" aria-hidden="true">
                                <span>&#10087;</span>
                            </div>
                        )}
                    </article>
                ))}
            </div>
        </section>
    );
}
