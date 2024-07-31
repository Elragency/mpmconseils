// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'MPM Conseils Comptable',
	siteDescription:
		"L'agence MPM est votre expert en comptabilité qui parle votre language et travaille réellement pour vous.",
	ogImage: '/og.jpg',
	logo: {
		src: '/mp.svg',
		alt: 'MPM. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'light',
	scrollAnimations: true
}
