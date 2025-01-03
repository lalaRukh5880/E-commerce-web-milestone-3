export default function handler(req, res) {
    const products = [
        {
            id: 1,
            name: "Vanilla Delight",
            price: 120,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt_MtOhn6biw72WMoK_goNcZepKpkYRhaY3Q&s",
        },
        {
            id: 2,
            name: "Choco Blast",
            price: 140,
           image: "/choco.png",
        },
        {
            id: 3,
            name: "Strawberry Swirl",
            price: 130,
            oldPrice: 170,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhcoD9qKFLfQa6JG-t_E1yJMlg3zVgaDYQ5Q&s",
        },
        {
            id: 4,
            name: "Minty Fresh",
            price: 110,

            image: "/minty.png",
        },
        {
            id: 5,
            name: "Caramel Crunch",
            price: 150,

            image: "/caramel.png",
        },
        {
            id: 6,
            name: "Mango Mania",
            price: 135,

            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGhOYw2pfZmPlSu5-87SleGZg1kFM4q-u-_A&s",
        },
        {
            id: 7,
            name: "Blueberry Bliss",
            price: 125,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8SWVlX1__48DFKliW_Yz-FAYQIHOXyAZtw&s",
        },
        {
            id: 8,
            name: "Coconut Paradise",
            price: 145,

            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvb2uLTo3muKrqtkKb7tlQkcbbAQPzfg5VmA&s",
        },
        {
            id: 9,
            name: "Pistachio Treat",
            price: 155,

            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4D_HSCns7U_rFjj4e6IVMTMVH3JPzBBUZw&s",
        },

    ];

    res.status(200).json(products);
}