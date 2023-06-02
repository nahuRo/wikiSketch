import Link from "next/link";
import React from "react";
import Search from "./Search";

type Props = {};

export default function Navbar({}: Props) {
	return (
		<nav className="flex flex-row justify-between items-center p-4">
			<Link href="/" className="text-4xl">
				MiniWiki
			</Link>
			<Search />
		</nav>
	);
}
