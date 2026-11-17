import publicationsRaw from '../data/publications.bib?raw';
import { parseBibtex, type BibEntry } from './bibtex';

const papersCache: BibEntry[] = parseBibtex(publicationsRaw);

export function getAllPapers(): BibEntry[] {
	return papersCache;
}

export function getFeaturedPapers(
	limit = 3,
	papers: BibEntry[] = papersCache,
): BibEntry[] {
	const publications = papers.filter((paper) => paper.category === 'Publication');
	const featured = publications.filter((paper) => paper.featured);
	return (featured.length > 0 ? featured : publications).slice(0, limit);
}
