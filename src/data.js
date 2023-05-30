import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import react from './images/react.png'
import node from './images/node.png'
import mongodb from './images/mongodb.png'

import {
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

export const pageLinks = [
  {
    id: 1,
    href: '#home',
    text: 'home',
  },
  {
    id: 2,
    href: '#about',
    text: 'about',
  },
  {
    id: 3,
    href: '#knowledge',
    text: 'knowledge',
  },
  {
    id: 4,
    href: '#projects',
    text: 'projects',
  },
  {
    id: 5,
    href: '#contact',
    text: 'contact',
  },
]

export const socialLinks = [
  {
    id: 1,
    href: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    href: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    href: 'https://www.instagram.com',
    icon: <FaInstagram />,
  },
  {
    id: 4,
    href: 'https://www.github.com',
    icon: <FaGithub />,
  },
  {
    id: 5,
    href: 'https://www.youtube.com',
    icon: <FaYoutube />,
  },
]

// export const projects = [
//   {
//     id: 1,
//     url: 'https://jobster-app-bc.netlify.app/',
//     title: 'job app',
//     image: './images/JobApp.png',
//   },
//   {
//     id: 2,
//     url: 'https://comfy-sloth-store-bc.netlify.app/',
//     title: 'shopping app',
//     image: './images/ShoppingApp.png',
//   },
//   {
//     id: 3,
//     url: 'https://cocktails-app-bc.netlify.app/',
//     title: 'cocktails app',
//     image: './images/CocktailsApp.png',
//   },
//   {
//     id: 4,
//     url: 'https://unsplash-images-bc.netlify.app',
//     title: 'unsplash images',
//     image: './images/UnsplashImages.png',
//   },
//   {
//     id: 5,
//     url: 'https://pokemon-match-app-bc.netlify.app/',
//     title: 'memory match',
//     image: './images/MatchApp.png',
//   },
//   {
//     id: 6,
//     url: 'https://color-generator-bc.netlify.app',
//     title: 'color generator',
//     image: './images/ColorGenerator.png',
//   },
//   {
//     id: 7,
//     url: 'https://grocery-list-bc.netlify.app',
//     title: 'grocery list',
//     image: './images/GroceryList.png',
//   },
//   {
//     id: 8,
//     url: 'https://cart-bc.netlify.app',
//     title: 'cart',
//     image: './images/Cart.png',
//   },
//   {
//     id: 9,
//     url: 'https://menu-bc.netlify.app',
//     title: 'menu',
//     image: './images/Menu.png',
//   },
//   {
//     id: 10,
//     url: 'https://backroads-app-bc.netlify.app',
//     title: 'back roads app',
//     image: './images/BackroadsApp.png',
//   },
//   {
//     id: 11,
//     url: 'https://tabs-bc.netlify.app',
//     title: 'tabs',
//     image: './images/Tabs.png',
//   },
//   {
//     id: 12,
//     url: 'https://strapisubmenu-bc.netlify.app',
//     title: 'Strapi Submenu',
//     image: './images/StrapiSubmenu.png',
//   },
// ]

export const knowledge = [
  {
    id: 1,
    image: html,
    title: 'html',
    info: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',
  },
  {
    id: 2,
    image: css,
    title: 'css',
    info: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
  },
  {
    id: 3,
    image: js,
    title: 'java script',
    info: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.',
  },
  {
    id: 4,
    image: react,
    title: 'react',
    info: 'React is a free and open-source front-end JavaScript library for building modern user interfaces based on UI components.',
  },
  {
    id: 5,
    image: node,
    title: 'node',
    info: 'Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.',
  },
  {
    id: 6,
    image: mongodb,
    title: 'mongodb',
    info: 'MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
  },
]

export const about = [
  {
    id: 1,
    text: 'These courses enabled me to further learn more about Web Applications and explore more about programming. In 2023 I have completed Web Application development courses in Front End, React18 and Back End, Nodejs with many projects covering both areas. Ive also completed a MERN stack course which pieced both the Front End and the Back End of a Application together. From here onwards, I look to seek employment to gain experience and to further enhance my skills learnt. The learning never stops with Web Application development.',
  },
]
