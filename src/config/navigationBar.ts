// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'Le logo de MPM Conseils',
		text: 'MPM Conseils'
	},
	navItems: [
		{ name: 'Accueil', link: '/' },
		{ name: 'Nos Services', link: '/features' },
		{ name: 'À Propos', link: '/contact' },
		{
			name: 'Ressources',
			link: '#',
			submenu: [
				{ name: 'Blog', link: '/blog' },
				{ name: 'Changelog', link: '/changelog' },
				{ name: 'FAQ', link: '/faq' },
				{ name: 'Terms', link: '/terms' }
			]
		},
		{ name: 'Contact', link: '/contact' }
	],
	navActions: [{ name: 'Débutez maintenant', link: '/contact', style: 'primary', size: 'lg' }]
}
