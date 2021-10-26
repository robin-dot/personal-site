// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Unity',
    competency: 3,
    category: ['Coding'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Coding'],
  },
  {
    title: 'C++',
    competency: 5,
    category: ['Coding'],
  },
  {
    title: 'C#',
    competency: 4,
    category: ['Coding'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Coding'],
  },
  {
    title: 'Adobe Illustrator',
    competency: 5,
    category: ['Art'],
  },
  {
    title: 'Adobe Photoshop',
    competency: 3,
    category: ['Art'],
  },
  {
    title: 'Adobe Dimension',
    competency: 4,
    category: ['Art'],
  },
  {
    title: 'Adobe InDesign',
    competency: 5,
    category: ['Art'],
  },
  {
    title: 'Guitar + Composition',
    competency: 5,
    category: ['Music'],
  },
  {
    title: 'Piano',
    competency: 4,
    category: ['Music'],
  },
  {
    title: 'Percussion',
    competency: 3,
    category: ['Music'],
  },
  {
    title: 'Cooking',
    competency: 5,
    category: ['Art'],
  },
  {
    title: 'Jupyter',
    competency: 5,
    category: ['Coding'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Coding'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Coding'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Coding'],
  },
  {
    title: 'Fruity Loop Studio',
    competency: 3,
    category: ['Music'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
