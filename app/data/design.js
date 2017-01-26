export default [
	{
		id: 'colorpen',
		projectTitle: 'Colorpen.io',
		projectDescription: '<p><a class="external-link" href="http://colorpen.io" target="_blank">Colorpen.io</a> is a react app that lets you copy html/css/svg colors to your clipboard so that you can more readily ditch hex codes and instead use the friendlier and more semantic color names such as LightGoldenrodYellow and NavajoWhite.</p>',
		cover: 'Colorpen.jpg',
		class: 'border',
		role: 'Product design & development',
		tech: 'Webpack, React.js, jsx, es6, PostCSS',
		subprojects: null
	},
	{
		id: 'idealist',
		projectTitle: 'Idealist',
		projectDescription: `<p>I've been working at <a href='http://www.idealist.org'>Idealist</a> since the beginning of 2012. We employ an agile software development strategy against a broad and oftentimes daunting challenge: <em>how can we help more people do more good in the world</em>?</p>
			<p>As their first full-time designer, I've championed user-centered design and design driven product development including user research, analytics tracking and a/b testing for data driven design decisions, rapid prototyping, and user testing. As a bonus I brought a clean design aesthetic and modern interface to the new responsive incarnation of the site.</p>`,
		cover: 'idealist-homepage.jpg',
		class: 'border',
		role: 'Web design, UX, UI, & front-end development',
		tech: 'Sketch, Marvel, HTML, CSS, Sass, Git, React.js',
		subprojects: [
			{
				id: 'idealist-mobile',
				title: 'mobile homepage',
				description: `<p>Idealist gets around 25 million pageviews a month, and about 20% of that traffic is mobile. Developing a responsive home page and wrapper was our first step towards providing an equally rewarding mobile experience.</p>
					<p class="small">(Click the prototype to enable interactivity.)</p>`,
				prototype: '<iframe src="https://marvelapp.com/28a514e?emb=1" width="300" height="500" allowTransparency="true" frameborder="0"></iframe>',
				projectClass: 'halfsies',
				role: 'Mobile UX, UI, Web Design, Front-end Development',
				tech: null
			},
			{
				id: 'idealist-search',
				title: 'search reskin',
				description: `<p>A mobile friendly search page completes the primary user flow for Idealist job seekers. </p>
											<p class="small">(Click the prototype to enable interactivity.)</p>`,
				file: null,
				prototype: '<iframe src="https://marvelapp.com/3bibh79?emb=1" width="300" height="500" allowTransparency="true" frameborder="0"></iframe>',
				projectClass: 'halfsies',
				role: 'UI design, UX, User testing, prototyping',
				tech: null
			},
			{
				id: 'idealist-about',
				title: 'about us',
				description: `<p>For years the Idealist ‘about us’ page was <a href="https://web.archive.org/web/20141128135648/http://www.idealist.org/info/About" target="_blank">not very appealing or engaging</a>. Traffic was nonexistent and exit rates were super high for this section of the site.</p>
					<p>With the release of this new iteration, we wanted to validate the design — we were especially curious if people would scroll through the long introductory section. As well as user-testing this, we employed <a href="http://scrolldepth.parsnip.io/" target="_blank">Scroll Depth</a> to analyze scroll behavior in Google Analytics. It turned out that most people do scroll through on desktop, but mobile visitors were far less likely to do so.</p>
					<p>In order to improve the mobile scroll rate, we employed <a href="http://optimizely.com" targt="_blank">Optimizely</a> to run an a/b test on a scroll arrow at the bottom of the first impression. It worked dramatically, bringing our initial mobile scroll rates up to about 90% from about 60%.</p>`,
				file: 'idealist-about.jpg',
				class: 'border',
				projectClass: 'halfsies',
				role: 'UX, UI, Web Design',
				tech: null
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
		subprojects: [
			{
				id: 'cold-girl',
				file: 'cold-girl',
				class: 'border',
				role: 'Design, copy'
			}
		]
	},
	{
		projectTitle: 'Grand Canyon Association',
		projectDescription: null,
		cover: 'GCA.jpg',
		class: 'border',
		id: 'gca',
		role: 'Product design, photography, product management, & front-end Development',
		tech: 'Drupal, HTML, CSS, Sass'
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
		subprojects: [
		{
			id: 'flyboys-plane',
			file: 'Flyboys-01.jpg'
		},
		{
			id: 'skydance-logo',
			file: 'Skydance-logo.png'
		}
		]
	},
	{
		id: 'polar',
		projectTitle: 'Polar Express',
		projectDescription: null,
		cover: 'polar-express-01.jpg',
		class: 'border',
		role: 'Key art design',
		tech: null,
		subprojects: [
			{
				id: 'polar-express-poster-2',
				file: 'polar-express.jpg',
				class: ' border'
			}
		]
	},
	{
		id: 'cca',
		projectTitle: 'California College of the Arts',
		projectDescription: null,
		cover: 'CCA-01.jpg',
		class: 'border',
		role: 'Collateral design',
		tech: null,
		subprojects: [
			{
				id: 'cca-2',
				file: 'CCA2'
			}
		]
	},
	{
		id: 'pinkfloyd',
		projectTitle: 'Pink Floyd',
		projectDescription: null,
		cover: 'pink-floyd-logo.png',
		class: null,
		role: 'Brand identity & collateral design.',
		tech: null,
		subprojects: [
			{
				id: 'pfwc-1',
				title: '2005 Pink Floyd wall calendar',
				file: 'pink-floyd-cal-front.jpg'
			},
			{
				id: 'pfwc-2',
				file: 'pink-floyd-cal-back.jpg'
			},
			{
				id: 'pfwc-3',
				file: 'pink-floyd-cal-august.jpg',
				class: 'border'
			}
		]
	}
];
