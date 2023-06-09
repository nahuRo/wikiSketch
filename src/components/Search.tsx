"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

type Props = {};

export default function Search({}: Props) {
	const [search, setSearch] = useState("");
	const router = useRouter();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push(`/${search}/`);

		setSearch("");
	};

	return (
		<form onSubmit={handleSubmit} className="space-x-4 w-full sm:w-fit">
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search"
				className="rounded-md p-1 w-9/12  sm:w-fit"
			/>
			<button>Search</button>
		</form>
	);
}
