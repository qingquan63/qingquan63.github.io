import publicationsRaw from '../data/publications.bib?raw';
import { parseBibtex, type BibEntry } from './bibtex';

const papersCache: BibEntry[] = parseBibtex(publicationsRaw);

export function getAllPapers(): BibEntry[] {
	return papersCache;
}

export function getFeaturedPapers(
	limit?: number,
	papers: BibEntry[] = papersCache,
): BibEntry[] {
	const publications = papers.filter((paper) => paper.category === 'Publication');
	const featured = publications.filter((paper) => paper.featured).sort((a, b) =>
		(a.featuredOrder ?? Number.MAX_SAFE_INTEGER) - (b.featuredOrder ?? Number.MAX_SAFE_INTEGER),
	);
	return featured.length > 0
		? featured.slice(0, limit)
		: publications.slice(0, limit ?? 3);
}
