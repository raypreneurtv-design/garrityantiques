import Image from "next/image";

const soldItems = [
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
        description: "FABULOUS NEW SELLER! RECOMMENDED!",
    },
    {
        id: 3,
        image: "/sold/birdsey-watercolor.jpg",
        title:
            "Alfred Birdsey Watercolor Painting Bermuda - NO RESERVE - Gimbels",
        description:
            "\u201cHello, fantastic experience all around! The seller contacted me immediately and even offered to meet me somewhere\u2014at my convenience\u2014 so I could have my purchase sooner and not wait for the shipping. My art work was extremely well packed! Lots of bubble wrap and tape. Super friendly, professional, efficient, and I\u2019m super pleased with the entire process. And my item is in great condition. Many thanks!\u201d",
    },
    {
        id: 4,
        image: "/sold/minstrel-poster.jpg",
        title:
            "RARE Black African-American Lithograph Poster Vaudville Minstrel Show New York",
    },
    {
        id: 5,
        image: "/sold/cynic-magazines.jpg",
        title:
            'University of Cincinnati Ohio "Cynic" 1925 & 1926 Magazine Lot',
        description:
            "\u201cGreat collection of items, all packaged securely and arrived quickly. Seller followed up to keep me informed and the items were exactly as described. Very happy with the transaction and would purchase from seller again.\u201d",
    },
];

export default function SoldOutItems() {
    return (
        <section className="sold-section">
            {/* Section Header */}
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

            {/* Vertical List */}
            <div className="sold-list">
                {soldItems.map((item, index) => (
                    <article
                        key={item.id}
                        className={`sold-item ${index % 2 === 1 ? "sold-item--reverse" : ""}`}
                    >
                        {/* Image side */}
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

                        {/* Text side */}
                        <div className="sold-item-body">
                            <h3 className="sold-item-title">{item.title}</h3>
                            {item.description ? (
                                <p className="sold-item-desc">{item.description}</p>
                            ) : (
                                <p className="sold-item-tagline">
                                    &#10022; Acquired by a private collector &#10022;
                                </p>
                            )}
                        </div>

                        {/* Divider between items (except last) */}
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
