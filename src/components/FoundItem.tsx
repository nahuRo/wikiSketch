import Image from "next/image";
import Link from "next/link";
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

type Props = { result: Result };

export default function FoundItem({ result }: Props) {
	return (
		<article className="m-4 max-w-lg">
			<div className="grid grid-cols-item gap-x-4">
				<div className="flex flex-col justify-center">
					{result?.thumbnail?.source && (
						<Image
							src={result.thumbnail.source}
							width={result.thumbnail.width}
							height={result.thumbnail.height}
							alt={result.title}
							className="w-[100px] h-[100px] object-contain"
						/>
					)}
				</div>
				<div>
					<Link
						href={`https://en.wikipedia.org/?curid=${result.pageid}`}
						className="text-lg pb-1 font-semibold"
						target="_blank"
					>
						{result.title}
					</Link>
					<p>{result.extract}</p>
				</div>
			</div>
		</article>
	);
}
