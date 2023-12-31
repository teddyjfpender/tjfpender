import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';



const config: DocsThemeConfig = {
	logo: <span>Teddy Pender Blog</span>,
	project: {
		link: "https://github.com/teddyjfpender/tjfpender",
	},
	chat: {
		link: "https://discord.com/channels/1127906495409958953/1137446548469448805",
	},
	docsRepositoryBase: "https://github.com/teddyjfpender/tjfpender/tree/main/apps/docs",
	footer: {
		text: (
			<span>Apache 2.0 {new Date().getFullYear()} © Teddy Pender</span>
		),
	},
	editLink: {
		text: (
			<span>TP Blog | Edit on GitHub</span>
		),
	},
	primaryHue: {light: 45, dark: 45},
	useNextSeoProps() {
		const { asPath } = useRouter();
		if (asPath !== "/") {
			return {
				titleTemplate: "%s",
			};
		}
	},
	themeSwitch: {
		useOptions() {
			return {
				light: "Light",
				dark: "Dark",
				system: "System",
			};
		},
	},
};

export default config
