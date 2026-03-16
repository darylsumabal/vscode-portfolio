import { v4 as uuidv4 } from 'uuid'

export const dataTitle = [
  {
    id: 1,
    title: "Stuff I've Built So Far",
  },
]

export const dataBox = [
  {
    id: 1,
    image: 'project1.webp',
    title: 'SimpsonsPay',
    description: 'Basic Ecommerce Website UI Design',
    slug: 'https://simpsonspay.vercel.app/home',
    stack: [
      {
        id: uuidv4(),
        language: 'react',
        color: '#63ddff',
      },
      {
        id: uuidv4(),
        language: 'tailwind',
        color: '#00b8d9',
      },
      {
        id: uuidv4(),
        language: 'axios',
        color: '#6130e6',
      },
      {
        id: uuidv4(),
        language: 'redux-toolkit',
        color: '#7c4ec7',
      },
    ],
  },
  {
    id: 2,
    image: 'judging-tabulation.png',
    title: 'Judging Tabulation System',
    slug: 'https://judging-tabulation.onrender.com',
    description:
      'A web application primarily use for contest that automate the computation of the score to determine the top winner.',
    stack: [
      {
        id: uuidv4(),
        language: 'react',
        color: '#63ddff',
      },
      {
        id: uuidv4(),
        language: 'inertia.js',
        color: '#9553E9',
      },
      {
        id: uuidv4(),
        language: 'laravel',
        color: '#F05340',
      },
      {
        id: uuidv4(),
        language: 'tailwind',
        color: '#00b8d9',
      },
    ],
  },
  {
    id: 3,
    image: 'fakeedex.png',
    title: 'Fakeedex',
    slug: 'https://fakeedex.vercel.app',
    description: 'A web pokedex to search and view the stats of pokemon.',
    stack: [
      {
        id: uuidv4(),
        language: 'react',
        color: '#63ddff',
      },
      {
        id: uuidv4(),
        language: 'tailwind',
        color: '#00b8d9',
      },
      {
        id: uuidv4(),
        language: 'axios',
        color: '#6130e6',
      },
      {
        id: uuidv4(),
        language: 'redux-toolkit',
        color: '#7c4ec7',
      },
    ],
  },
  // {
  //   id: 4,
  //   image: 'wolf.svg',
  //   title: 'sample 4',
  //   description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
  //   stack: [
  //     {
  //       id: uuidv4(),
  //       language: 'react',
  //       color: '#63ddff',
  //     },
  //     {
  //       id: uuidv4(),
  //       language: 'tailwind',
  //       color: '#00b8d9',
  //     },
  //     {
  //       id: uuidv4(),
  //       language: 'axios',
  //       color: '#6130e6',
  //     },
  //     {
  //       id: uuidv4(),
  //       language: 'redux-toolkit',
  //       color: '#7c4ec7',
  //     },
  //   ],
  // },
]
