// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Foxi.',
		aboutText:
			"Des services de comptabilité pour les PME qui vous permettrons d'être équipé adéquatement afin d'avoir une enteprise prospère. ",
		logo: {
			src: '/logo.svg',
			alt: 'Services comptable MPM Conseils',
			text: 'MPM Conseils'
		}
	},
	footerColumns: [
		{
			category: 'Services',
			subCategories: [
				{
					subCategory: 'Tenue de livre',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'Rapport financiers',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Service de paie',
					subCategoryLink: '/pricing'
				},
				{
					subCategory: 'Changelog',
					subCategoryLink: '/changelog'
				},
				{
					subCategory: 'Terms',
					subCategoryLink: '/terms'
				}
			]
		},
		{
			category: 'About us',
			subCategories: [
				{
					subCategory: 'About us',
					subCategoryLink: '/'
				},
				{
					subCategory: 'News',
					subCategoryLink: '/blog'
				},
				{
					subCategory: 'Careers',
					subCategoryLink: '/blog'
				}
			]
		},
		{
			category: 'Get in touch',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Support',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Join us',
					subCategoryLink: '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© Foxi 2024.'
	}
}
