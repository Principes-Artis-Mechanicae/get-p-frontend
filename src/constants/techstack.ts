export interface ITechStack {
    groupId: number;
    groupName: string;
    groupItems: string[];
}

// !! GPT 로 만든 TechStack 예제임. 추후 수정 필요
export const techStack: ITechStack[] = [
    {
        groupId: 1,
        groupName: "디자인",
        groupItems: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Sketch", "InVision"],
    },
    {
        groupId: 2,
        groupName: "IT 프로그래밍",
        groupItems: ["JavaScript", "TypeScript", "Python", "Java", "C#", "Ruby"],
    },
    {
        groupId: 3,
        groupName: "문서 글쓰기",
        groupItems: ["Microsoft Word", "Google Docs", "LaTeX", "Markdown", "Confluence"],
    },
    {
        groupId: 4,
        groupName: "기획 마케팅",
        groupItems: ["Google Analytics", "SEO", "Facebook Ads", "Mailchimp", "Asana"],
    },
    {
        groupId: 5,
        groupName: "창업 사업",
        groupItems: ["Business Model Canvas", "SWOT Analysis", "Lean Startup", "Project Management", "Negotiation"],
    },
    {
        groupId: 6,
        groupName: "영상 사진",
        groupItems: [
            "Adobe Premiere Pro",
            "Final Cut Pro",
            "Adobe Lightroom",
            "DaVinci Resolve",
            "Canon/Nikon Cameras",
        ],
    },
    {
        groupId: 7,
        groupName: "전자책",
        groupItems: ["Adobe InDesign", "Sigil", "Calibre", "Amazon Kindle Direct Publishing", "EPUB"],
    },
    {
        groupId: 8,
        groupName: "주문제작",
        groupItems: ["Custom Software Development", "3D Printing", "CAD Software", "Tailoring", "Handcrafting"],
    },
    {
        groupId: 9,
        groupName: "음향",
        groupItems: ["Ableton Live", "Pro Tools", "FL Studio", "Logic Pro", "Audacity"],
    },
];
