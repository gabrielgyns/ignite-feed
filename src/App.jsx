import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';

import './global.css'

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/gabrielgyns.png',
			name: 'Gabriel Soares',
			role: 'Front-end Engineer @ Aubay Portugal'
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{ type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
			{ type: 'link', content: 'jane.design/doctorcare' },
		],
		publishedAt: new Date('2022-10-24 16:50:31')
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/maykbrito.png',
			name: 'Mayk Brito',
			role: 'Educator @ Rocketseat'
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{ type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
			{ type: 'link', content: 'jane.design/doctorcare' },
		],
		publishedAt: new Date('2022-10-24 18:25:05')
	},
	{
		id: 3,
		author: {
			avatarUrl: 'https://github.com/diego3g.png',
			name: 'Diego Fernandes',
			role: 'CTO @ Rocketseat'
		},
		content: [
			{ type: 'paragraph', content: 'Fala galeraa 👋' },
			{ type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
			{ type: 'link', content: 'jane.design/doctorcare' },
		],
		publishedAt: new Date('2022-10-24 20:12:51')
	},
];

export function App() {
	return (
		<>
			<Header />
			
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map(post => (
						<Post
							key={post.id}
							author={post.author}
							content={post.content}
							publishedAt={post.publishedAt}
						/>
					))}
				</main>
			</div>
		</>
	);
}
