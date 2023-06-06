import Link from "next/link";
import React from "react";
import Search from "./Search";

type Props = {};

export default function Navbar({}: Props) {
	return (
		<nav className="flex flex-col  sm:flex-row justify-between items-center p-2 sm:p-4">
			<Link href="/" className="text-4xl pb-4 sm:pb-0 font-bold">
				MiniWiki
			</Link>
			<Search />
		</nav>
	);
}
