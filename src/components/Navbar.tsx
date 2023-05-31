import Link from "next/link";
import React from "react";
import Search from "./Search";

type Props = {};

export default function Navbar({}: Props) {
	return (
		<nav>
			<Link href="/">MiniWiki</Link>
			<Search />
		</nav>
	);
}
