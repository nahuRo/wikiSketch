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

type Props = { result: Result };

export default function FoundItem({ result }: Props) {
	return (
		<article className="m-4 max-w-lg" key={result.pageid}>
			<div className="flex flex-row gap-4">
				<div className="flex flex-col justify-center">
					{result?.thumbnail?.source && (
						<Image
							src={result.thumbnail.source}
							width={result.thumbnail.width}
							height={result.thumbnail.height}
							alt={result.title}
						/>
					)}
				</div>
				{result.extract}
			</div>
		</article>
	);
}
