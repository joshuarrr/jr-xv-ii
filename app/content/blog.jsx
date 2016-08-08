import React, { Component } from "react";
import Helmet from "react-helmet";
import { PageWrapper } from "./components/page-wrapper";
const Codepen = require('react-codepen');
require("../styles/content/blog.css");

export class Blog extends Component {
	render() {
		return (
			<PageWrapper
				hasHero={ false }
				mainClass="blog"
			>
				<Helmet title="Blog" />
				<h1 className="page-title">
					weblog
				</h1>
				<article className="blog-entry">
					<header>
						<h2>Ideal Form UX for a Large Scale Site</h2>
						<p className="date">August 3, 2016</p>
					</header>
					<p>At <a href="http://idealist.org" rel="external" target="idealist" className="external-link">Idealist.org</a>, our forms were all over the place. By that I mean they were everywhere (we had a lot of forms), but also that they were each treated differently. I’m not exaggerating; nearly every single form was handled uniquely. We had a log in form that had different validation behaviors depending on what page you were on. We had old server-side validation, new client-side validation, green hints, grey hints, red errors, orange errors… it was a mess.</p>
					<p>We knew we had a problem, so during a recent push to redesign our dated <a href="http://www.idealist.org/donate" rel="external" target="idonate" className="external-link">donate page</a>, we set out to undertake the effort of reeling in our forms site-wide and unifying behaviors. We called this project <em>conformification</em>. (OK, that was just me, but it was just about to catch on.)</p>
					<p>The first thing I did was put three of the best living designers on the west coast who worked at Idealist together in a room and establish some <a href="https://docs.google.com/document/d/1UluGn0xIfoiAwm7BBTYjlTA4IbQJsQW9yKSDV4-AeU8/edit?usp=sharing" rel="external" target="UX Guidelines" className="external-link">UX Guidelines</a> for how our ideal forms should behave — things we knew to be true because we liked them and/or because <a href="https://www.nngroup.com/" rel="external" target="NNGroup" className="external-link">Don and Jakob</a> said so. Things like:</p>
					<ul className="bulleted-list">
						<li>Labels are located above the inputs</li>
						<li>Multiple columns should be avoided</li>
						<li>Forms should have only one primary action (e.g. Save, Done, Sign up)</li>
						<li>Users should be made aware of specific submission requirements before the form is sent</li>
						<li>Forms should be as short as possible.</li>
					</ul>
					<p>The first item on the list was a breeze to come up with: </p>
					<blockquote>• Forms should be structured to look and behave consistently across all assets.</blockquote>
					<hr className="section-break" />
					<p>To put our UX ideas to the test, I built a couple simple prototypes with sass and jQuery. (I'm not the biggest fan of jQuery, but it’s super fast. And since the code was 100% disposable, it fit the bill.) One was a longish pseudo <a href="http://codepen.io/joshuar/full/zBoqRQ/" rel="external" target="codepen-long" className="external-link">registration form</a>, and the other was a simple <a href="http://codepen.io/joshuar/full/LZZJMP/" rel="external" target="codepen-short" className="external-link">donation form</a>.</p>
					<Codepen
						user="joshuar"
						hash="LZZJMP"
						height="600"
					/>
					<p>We had decided upon a couple UX patterns that were a little out of the box, so we wanted to make sure to use a Lean UX methodology to validate our assumptions. Specifically, we had three big concerns:</p>
					<ol>
						<li>Getting clean data into our system was very important to us, and we also wanted to make sure that our forms were fully validated before submission (so that people didn’t want to throw bricks through our windows when their page reloaded and filled up with errors). To make it clear that the form is in an non-submittable state we disabled the submit button until the required fields were completed. We had previously implemented this behavior on our log in and sign up forms and that was working well. But how would that work on a longer form? Would people wonder why they can’t submit the form?</li>
						<li>We’re validating fields as you type. Do the messages that appear on invalid entry prove helpful or just distracting? To make sure we could answer this question, we built into the prototype a devious ploy to make sure we triggers an error state: we required a 9 digit zip-code.</li>
						<li>I’ve always hated asterisks that indicate required fields. I prefer keeping optional fields to a minimum and denoting them as  optional. It seems like that pattern is becoming more ubiquitous and Nielsen Norman Group seems to <a href="https://www.nngroup.com/articles/web-form-design/" rel="external" target="UX Guidelines" className="external-link">agree with me</a>, but we had stakeholders who were resistant to that pattern. Would our users understand that all fields not marked optional were required?</li>
					</ol>
					<hr className="section-break" />
					<p>To answer these questions and to get a better sense of our users’ experiences, we had a testing session of 9 people that fit our demographic: mostly women, aged between 35-65. <a href="https://docs.google.com/document/d/1GjGPQNAGLXYjFWAWhwh6UM7wt07ZviltwO3tPwb8Y1c/edit?usp=sharing" rel="external" target="googledocs" className="external-link">Our test script</a> made sure to ask questions about their browsing behaviors so that we could estimate their general computer skill level. Most of our test subjects were relatively computer savvy, but a couple were more timid and challenged by things like passwords, registration forms, and autocomplete. We also had the opportunity to informally test the son of one of our participants — a 14 year old who filled out the forms so quickly and effortlessly that we didn’t even include his experience in our analysis.</p>
					<p>The first round of testing proved to be quite informative. Each person passed the test relatively easily, and overall we considered the form design to be a success. At the very least it wasn’t a disaster!</p>
					<p>In regards to the first question, <em>Would people wonder why they can’t submit the form?</em>, only one person struggled a bit on the long form when they tried to submit the form with an error present. They clicked the disabled submit button, and when nothing happened, scanned up the form and found the problem — in this case, they had only entered the first 5 digits of their ZIP Code. We wondered if an additional message indicating that there were errors on the form might help in cases like this and decided to keep that question in mind for further testing. Since it wasn’t a big hangup for our tester, we saw it as a minor warning. We did decide to add iconography (!) to the error messages for two reasons: first, to make the errors louder to help in situations like this, and second, to help in cases of colorblindness. Here’s the updated prototype (try typing letters in the <em>amount</em> field to see the error):</p>
					<Codepen
						user="joshuar"
						hash="WxREON"
						height="600"
					/>
					<p><em>Do the messages that appear on invalid entry prove helpful or just distracting?</em> We noted that many people completed the form without errors until they reached the 9-digit postal code field. Most people entered their 5 digit ZIP Code, moved on to the next field, and then noticed the error. However, a couple people noticed the hint mid-entry and fixed the problem right away. Under normal circumstances, we would include the 9-digit requirement as a hint below the label, but this allowed us to test the effectiveness of our error messages.</p>
					<p>One of our testers noted that the email validation message <em>Must be a valid email</em> was ‘stupid’. We agreed, and decided that a more sophisticated email validation that didn’t interrupt the entry flow would be prudent if we continue to validate on keydown as opposed to on blur.</p>
					<p>In terms of optional vs. required indicators, we established that our testers naturally assumed that all the non-marked fields were required. <em>Would our users understand that all fields not marked optional were required?</em> Yes. One caveat that arose is that the optional indicators may not be optimal. 100% of our testers entered their email address, on both the long form and the short form, despite it being optional. We assume that is because under normal circumstances the email address is always a required field. Most of our testers skipped the <em>website</em> field, often saying out loud, ‘oh, it’s optional’. We hypothesized that grouping optional fields together and placing them at the end of the form would be more clear and performant.</p>
					<hr className="section-break" />
					<p>We came across a few general takeaways from this process that seem worth sharing.</p>
					<ol>
						<li>Most people fill out a lot of forms on a daily or weekly basis, and they do it quickly and without much attention. It’s sad, but they’ll probably gloss right over that implementation detail that you spent days or weeks perfecting.</li>
						<li>Form behaviors are among the hardest parts of a website to design. These interactions can make or break conversion rates, and the way the form communicates with users is truly the voice of your site. It should be friendly and helpful.</li>
						<li>User testing is really good at learning what doesn’t work and what works really well, but the middle ground is pretty hard to evaluate.</li>
						<li>User testing is never done. As soon as you test something, you’ll want to make changes to it. And as soon as you make changes to something, you’ll want to user test it.</li>
					</ol>
				</article>
			</PageWrapper>
			);
		}
	}
