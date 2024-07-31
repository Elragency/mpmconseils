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
		title: 'Agence MPM',
		aboutText:
			"Services comptables d'expert pour votre PME",
		logo: {
			src: '/mp.svg',
			alt: 'Agence MPM conseils',
			text: 'Agence MPM.'
		}
	},
	footerColumns: [
		{
			category: 'Services',
			subCategories: [
				{
					subCategory: 'Services',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'Tenue de livres',
					subCategoryLink: '/services/tenue'
				},
				{
					subCategory: 'Remises gouvernementales',
					subCategoryLink: '/services/gvt'
				},
				{
					subCategory: 'Syndicats de copropriété',
					subCategoryLink: '/services/sdc'
				},
				{
					subCategory: 'Paies',
					subCategoryLink: '/services/paies'
				}
			]
		},
		{
			category: 'À Propos',
			subCategories: [
				{
					subCategory: 'Agence MPM',
					subCategoryLink: '/mpm'
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
			category: 'Contactez-nous',
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
					subCategory: 'Rejoindre',
					subCategoryLink: '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© Agence MPM 2024.'
	}
}
