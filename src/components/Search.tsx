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
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search"
			/>
			<button>Search</button>
		</form>
	);
}
