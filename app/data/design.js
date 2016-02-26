export default [
	{
		title: 'Idealist',
		description: `<p>
										I've been working at <a href='http://www.idealist.org'>Idealist</a> since the beginning of 2012, where we employ an agile software development strategy against a broad and oftentimes daunting challenge: <em>how can we help more people do more good in the world</em>?
									</p>
									<p>
										As their first full-time designer, I've championed design driven product development, user research, analytics tracking and a/b testing for data driven design decisions, and brought a clean design aesthetic and modern interface to the new responsive incarnation of the site.
									</p>
									`,
		role: 'Web design, UX, UI, & front-end development',
		tech: 'Sketch, Marvel, HTML, CSS, Sass, Git, React.js',
		file: 'idealist-homepage.jpg',
		class: 'border',
		id: 'idealist',
		subprojects: [
			{
				title: 'mobile homepage',
				description: 'Idealist gets around 25 million pageviews a month, and about 20% of that traffic is mobile. Developing a responsive home page and wrapper was our first step towards providing an equally rewarding mobile experience.',
				role: 'Mobile UX, UI, Web Design, Front-end Development',
				file: 'idealist-homepage-mobile.jpg',
				class: 'mobile',
				id: 'idealist-mobile'
			},
			{
				title: 'about us',
				description: `<p>
												For years, the Idealist ‘about us’ page was <a href="https://web.archive.org/web/20141128135648/http://www.idealist.org/info/About" target="_blank">not very appealing or engaging</a>. Traffic was particularly poor and exit rates particularly high for this section of the site.
											</p>
											<p>
												With the release of this new iteration, we wanted to validate the design. We were especially curious if people would scroll through the long introductory section. We employed <a href="http://scrolldepth.parsnip.io/" target="_blank">Scroll Depth</a>, a plugin that lets us analyze scroll behavior in Google Analytics. It turned out that most people do scroll through on desktop, but mobile visitors were far less likely to do so.
											</p>
											<p>
												In order to improve the mobile scroll rate, we employed <a href="http://optimizely.com" targt="_blank">Optimizely</a> to run an a/b test on a scroll arrow at the bottom of the first impression. It worked dramatically, bringing our initial mobile scroll rates up to about 85% from about 50%.
											</p>
											<p>
											Our next tests will bring paralax and animations to the page to determine their effectiveness.
											</p>
											`,
				role: 'UX, UI, Web Design',
				file: 'idealist-about.jpg',
				class: 'border',
				id: 'idealist-about'
			}
		],
		etcTitle: 'more',
		etcetera: [
			{
				title: 'working here',
				description: `<p>
												We\'re growing rapidly and needed a page that invites the type of candidates we\'re looking for: talented individuals with the greater good at heart. We went a bit nuts and threw out every trick in the book - paralax, scroll events, and more paralax.
											</p>`,
				role: 'UX, UI, Web Design, Front-end Development',
				file: 'sample.jpg',
				class: '',
				id: 'working-here'
			},
			{
				title: 'Manifesto',
				description: `<p>
												The Idealist Manifesto is at the heart of our mission. This treatment attempts to inspire like-minded individuals.
											</p>
											`,
				role: 'Graphic Design',
				file: 'sample.jpg',
				class: 'border',
				id: 'manifesto'
			}
		]
	},
	{
		title: 'Colorpen.io',
		description: ``,
		role: 'Design & development',
		tech: 'Webpack, React.js, jsx, es6, PostCSS',
		file: 'Colorpen.jpg',
		class: 'border',
		id: 'colorpen'
	},
	{
		title: 'Produce Row',
		description: ``,
		file: 'prc.png',
		class: '',
		role: 'Identity / Brand, web, & collateral design.',
		id: 'prc'
	},
	{
		title: 'Grand Canyon Association',
		description: ``,
		file: 'GCA.jpg',
		class: 'border',
		id: 'gca',
		role: 'Product design, photography, product management, & front-end Development',
		tech: 'Drupal, HTML, CSS, Sass',
		subprojects: [
			{
				title: 'store',
				description: 'GCA Store.',
				file: 'gca-store.jpg',
				class: 'border',
				id: 'gca-store'
			}
		]
	},
	{
		title: 'Chali2na',
		description: ``,
		file: 'Chali2Na.jpg',
		class: 'border',
		role: 'Web design',
		id: 'chali'
	},
	{
		title: 'Skydance Productions',
		description: ``,
		file: 'flyboys-02.jpg',
		class: 'border',
		role: 'Brand identity & collateral design',
		id: 'skydance'
	},
	{
		title: 'Polar Express',
		description: ``,
		file: 'polar-express-01.jpg',
		class: 'border',
		role: 'Design',
		id: 'polar'
	},
	{
		title: 'California College of the Arts',
		description: ``,
		file: 'CCA-01.jpg',
		class: 'border',
		role: 'Design',
		id: 'cca'
	},
	{
		title: 'Pink Floyd',
		description: ``,
		file: 'pink-floyd-logo.png',
		class: '',
		role: 'Brand identity & collateral design.',
		id: 'pinkfloyd'
	}
];
