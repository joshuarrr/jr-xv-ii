export default [
	{
		id: 'colorpen',
		projectTitle: 'Colorpen.io',
		projectDescription: null,
		cover: 'Colorpen.jpg',
		class: 'border',
		role: 'Design & development',
		tech: 'Webpack, React.js, jsx, es6, PostCSS',
		subprojects: null
	},
	{
		id: 'idealist',
		projectTitle: 'Idealist',
		projectDescription: `<p>I've been working at <a href='http://www.idealist.org'>Idealist</a> since the beginning of 2012, where we employ an agile software development strategy against a broad and oftentimes daunting challenge: <em>how can we help more people do more good in the world</em>?</p>
			<p>As their first full-time designer, I've championed design driven product development, user research, analytics tracking and a/b testing for data driven design decisions, and brought a clean design aesthetic and modern interface to the new responsive incarnation of the site.</p>`,
		cover: 'idealist-homepage.jpg',
		class: 'border',
		role: 'Web design, UX, UI, & front-end development',
		tech: 'Sketch, Marvel, HTML, CSS, Sass, Git, React.js',
		subprojects: [
			{
				id: 'idealist-mobile',
				title: 'mobile homepage',
				description: '<p>Idealist gets around 25 million pageviews a month, and about 20% of that traffic is mobile. Developing a responsive home page and wrapper was our first step towards providing an equally rewarding mobile experience.</p>',
				file: 'idealist-homepage-mobile.jpg',
				class: 'mobile',
				role: 'Mobile UX, UI, Web Design, Front-end Development',
				tech: null
			},
			{
				id: 'idealist-about',
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
				file: 'idealist-about.jpg',
				class: 'border',
				role: 'UX, UI, Web Design',
				tech: null
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
				class: null,
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
		id: 'prc',
		projectTitle: 'Produce Row',
		projectDescription: null,
		cover: 'prc.png',
		class: null,
		role: 'Identity / Brand, web, & collateral design.',
		tech: null,
		subprojects: null
	},
	{
		projectTitle: 'Grand Canyon Association',
		projectDescription: null,
		cover: 'GCA.jpg',
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
		id: 'chali',
		projectTitle: 'Chali2na',
		projectDescription: null,
		cover: 'Chali2Na.jpg',
		class: 'border',
		role: 'Web design',
		tech: null,
		subprojects: null
	},
	{
		id: 'skydance',
		projectTitle: 'Skydance Productions',
		projectDescription: null,
		cover: 'flyboys-02.jpg',
		class: 'border',
		role: 'Brand identity & collateral design',
		tech: null,
		subprojects: null
	},
	{
		id: 'polar',
		projectTitle: 'Polar Express',
		projectDescription: null,
		cover: 'polar-express-01.jpg',
		class: 'border',
		role: 'Key art',
		tech: null,
		subprojects: null
	},
	{
		id: 'cca',
		projectTitle: 'California College of the Arts',
		projectDescription: null,
		cover: 'CCA-01.jpg',
		class: 'border',
		role: 'Collateral design',
		tech: null,
		subprojects: null
	},
	{
		id: 'pinkfloyd',
		projectTitle: 'Pink Floyd',
		projectDescription: null,
		cover: 'pink-floyd-logo.png',
		class: null,
		role: 'Brand identity & collateral design.',
		tech: null,
		subprojects: null
	}
];
