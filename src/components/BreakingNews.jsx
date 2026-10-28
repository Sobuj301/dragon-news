import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    const breaking = [
        {
            id: 1,
            title: "Bangladesh Announces New Education Policy",
        },
        {
            id: 2,
            title: "Heavy Rainfall Expected in Several Districts",
        },
        {
            id: 3,
            title: "Bangladesh Advances in Technology Sector",
        },
    ];
    return (
        <div className="container mx-auto bg-amber-50 px-3 py-3 flex items-center gap-2">
            <button className="btn bg-red-600 text-white">Latest</button>
            <Marquee speed={100} pauseOnHover={true}>
                {breaking.map(news =><span key={news.id}> {news.title}</span>)}
            </Marquee>
        </div>
    );
};

export default BreakingNews;