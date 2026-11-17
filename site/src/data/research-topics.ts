export const researchTopics = [
  {
    tag: "fair",
    title: "Fair Machine Learning & Responsible AI",
    quote: "a world where technology works well for all of us",
    author: "Joy Buolamwini",
    source: "https://www.fordfoundation.org/news-and-stories/videos/how-can-public-interest-tech-change-our-world-for-good/joy-buolamwini-fighting-the-coded-gaze-how-we-make-artificial-intelligence-benefit-all-public-interest-tech/",
  },
  {
    tag: "game",
    title: "AI in Games",
    quote: "Video games are meant to be just one thing: fun. Fun for everyone.",
    author: "Satoru Iwata",
    source: "https://gdcvault.com/play/1013371/Disrupting",
  },
  {
    tag: "multi-objective",
    title: "Multi-objective Optimization/Learning",
    quote: "Some among the Great Goods cannot live together.",
    author: "Isaiah Berlin",
    source: "https://isaiah-berlin.wolfson.ox.ac.uk/sites/default/files/inline-files/bib196%20-%20Pursuit%20of%20the%20Ideal_3.pdf",
  },
] as const;

export const publicationTopics = [...researchTopics.map(({ tag }) => tag), "optimization"];

export function getPublicationTopics(keywords: string[]): string[] {
  return keywords.filter((keyword) => publicationTopics.includes(keyword));
}
