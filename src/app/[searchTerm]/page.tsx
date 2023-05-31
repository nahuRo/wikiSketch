import FoundItem from "@/components/FoundItem";
import Image from "next/image";
import React from "react";

type Result = {
	pageid: string;
	title: string;
	extract: string;
	thumbnail?: {
		source: string;
		width: number;
		height: number;
	};
};

type SearchResult = {
	query?: { pages?: Result[] };
};
async function getWikiData(searchTerm: string): Promise<SearchResult> {
	const searchParams = new URLSearchParams({
		action: "query",
		generator: "search",
		gsrsearch: searchTerm,
		gsrlimit: "20",
		prop: "pageimages|extracts",
		exchars: "100",
		exintro: "true",
		explaintext: "true",
		exlimit: "max",
		format: "json",
		origin: "*",
	});

	const response = await fetch(
		// `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${searchTerm}&format=json`
		`https://en.wikipedia.org/w/api.php?action=query&` + searchParams
	);

	return response.json();
}

type Props = { params: { searchTerm: string } };

export default async function SearchResultPage({ params: { searchTerm } }: Props) {
	const data = await getWikiData(searchTerm);
	const results: Result[] | undefined = data?.query?.pages;

	return (
		<main>
			{results ? (
				Object.values(results).map((result) => (
					<FoundItem key={result.pageid} result={result} />
				))
			) : (
				<h2>no found</h2>
			)}
		</main>
	);
}
