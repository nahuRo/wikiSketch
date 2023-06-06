import React from "react";

type Props = {};

export default function Footer({}: Props) {
	return (
		<div className="py-4 text-center">
			With ♥️ by
			<a
				href="https://www.linkedin.com/in/agust%C3%ADnrodr%C3%ADguez"
				target="_blank"
				className="pl-1 text-red-400"
			>
				Aguss
			</a>
		</div>
	);
}
