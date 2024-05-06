import item1 from './images/item-1.jpeg'
import item2 from './images/item-2.jpeg'
import item3 from './images/item-3.jpeg'
import item4 from './images/item-4.jpeg'
import item5 from './images/item-5.jpeg'
import item6 from './images/item-6.jpeg'
import item7 from './images/item-7.jpeg'
import item8 from './images/item-8.jpeg'
import item9 from './images/item-9.jpeg'


const reviews = [
	{
		id: 1,
		name: 'susan smith',
		job: 'web developer',
		img: 'https://www.course-api.com/images/people/person-1.jpeg',
		text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		name: 'anna johnson',
		job: 'web designer',
		img: 'https://www.course-api.com/images/people/person-2.jpeg',
		text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
	},
	{
		id: 3,
		name: 'peter jones',
		job: 'intern',
		img: 'https://www.course-api.com/images/people/person-4.jpeg',
		text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
	},
	{
		id: 4,
		name: 'bill anderson',
		job: 'the boss',
		img: 'https://www.course-api.com/images/people/person-3.jpeg',
		text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
	},
]

const questions = [
	{
		id: 1,
		title: 'Do I have to allow the use of cookies?',
		info: 'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
	},
	{
		id: 2,
		title: 'How do I change my My Page password?',
		info: 'Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.',
	},
	{
		id: 3,
		title: 'What is BankID?',
		info: 'Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.',
	},
	{
		id: 4,
		title: 'Whose birth number can I use?',
		info: 'Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.',
	},
	{
		id: 5,
		title: 'When do I recieve a password ordered by letter?',
		info: 'Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan ',
	},
]

const menu = [
	{
		id: 1,
		title: 'buttermilk pancakes',
		category: 'breakfast',
		price: 15.99,
		img: item1,
		desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
	},
	{
		id: 2,
		title: 'diner double',
		category: 'lunch',
		price: 13.99,
		img: item2,
		desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
	},
	{
		id: 3,
		title: 'godzilla milkshake',
		category: 'shakes',
		price: 6.99,
		img: item3,
		desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
	},
	{
		id: 4,
		title: 'country delight',
		category: 'breakfast',
		price: 20.99,
		img: item4,
		desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
	},
	{
		id: 5,
		title: 'egg attack',
		category: 'lunch',
		price: 22.99,
		img: item5,
		desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
	},
	{
		id: 6,
		title: 'oreo dream',
		category: 'shakes',
		price: 18.99,
		img: item6,
		desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
	},
	{
		id: 7,
		title: 'bacon overflow',
		category: 'breakfast',
		price: 8.99,
		img: item7,
		desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
	},
	{
		id: 8,
		title: 'american classic',
		category: 'lunch',
		price: 12.99,
		img: item8,
		desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
	},
	{
		id: 9,
		title: 'quarantine buddy',
		category: 'shakes',
		price: 16.99,
		img: item9,
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},
]

const jobs = [
	{
		id: 'recAGJfiU4CeaV0HL',
		order: 3,
		title: 'Full Stack Web Developer',
		dates: 'December 2015 - Present',
		duties: [
			'Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.',
			'Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.',
			'Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.',
		],
		company: 'TOMMY',
	},
	{
		id: 'recIL6mJNfWObonls',
		order: 2,
		title: 'Front-End Engineer',
		dates: 'May 2015 - December 2015',
		duties: [
			'Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.',
			'Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester',
			'Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1',
			'Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1',
		],
		company: 'BIGDROP',
	},
	{
		id: 'rec61x18GVY99hQq5',
		order: 1,
		title: 'Engineering Intern',
		dates: 'May 2014 - September 2015',
		duties: [
			"I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
			'YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.',
			'Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism.',
		],
		company: 'CUKER',
	},
]

export  {reviews, questions, menu, jobs}