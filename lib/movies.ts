export interface Movie {
    id: string;
    slug: string;
    title: string;
    category: string;
    year: string;
    description: string;
    image: string;
    video: string;
    thesis: string;
    summary: string;
    screenshots: string[];
}

export const movies: Movie[] = [
    {
        id: "01",
        slug: "lords-of-lockdown",
        title: "LORDS OF LOCKDOWN",
        category: "DOCUMENTARY FEATURE",
        year: "2022",
        description: "An acclaimed documentary exploring the untold stories and resilient spirit during unprecedented times.",
        image: "/locks.png",
        video: "https://drive.google.com/file/d/1U8vTO-sbU9UHJb-bMDlkXKiiqWee0wv_/preview",
        summary: "Lords of Lockdown captures the raw, unfiltered reality of humanity during one of the most challenging periods in modern history. Through intimate lens and sweeping narratives, it documents the indomitable spirit of those who stood tall when the world engagingly stood still.",
        thesis: "The documentary posits that crisis does not facilitate change; it reveals the true nature of societal bonds. By focusing on micro-narratives within the macro-event of the lockdown, the film authenticates the human experience as one of collective resilience rather than isolated suffering. It challenges the viewer to look beyond the statistics and see the faces of survival.",
        screenshots: [
            "/projects/01.jpg",
            "/projects/02.jpg",
            "/projects/03.jpg",
            "/projects/04.jpg",
            "/projects/05.jpg"
        ]
    },
    {
        id: "02",
        slug: "chingum",
        title: "CHINGUM",
        category: "HORROR-NOIR SHORT",
        year: "2021",
        description: "A gripping horror-noir short that blends gritty realism with genre elements, showcasing the unique voice of Northeast India.",
        image: "/chingum.png",
        video: "https://drive.google.com/file/d/1xqkJ22yeAMdIOPdLrry74KbuxPvNgtWM/preview",
        summary: "In the shadow-drenched alleys of a forgotten town, 'Chingum' weaves a tale of suspense and supernatural intrigue. It is a stylistic homage to classic noir, infused with the rich, eerie folklore of the region.",
        thesis: "Chingum explores the intersection of modern anxiety and ancient fear. It suggests that our past acts as a hauntology, always present, always watching. The film utilizes high-contrast visual storytelling to mirror the duality of its characters—caught between tradition and modernity, reality and nightmare.",
        screenshots: [
            "/projects/1.jpg",
            "/projects/2.jpg",
            "/projects/3.jpg",
            "/projects/4.jpg",
            "/projects/5.jpg"
        ]
    }
];
