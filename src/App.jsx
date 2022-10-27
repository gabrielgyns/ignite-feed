import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css';

import './global.css'

export function App() {
	return (
		<>
			<Header />
			
			<div className={styles.wrapper}>
				<Sidebar />
				<main>
					<Post
						author="Gabriel Soares" 
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, tenetur quisquam facere reprehenderit laboriosam reiciendis magni distinctio et quia officiis optio consequuntur illo ipsum alias eos sint molestias velit? Provident." />
					<Post
						author="Fernanda Almeida" 
						content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, tenetur quisquam facere reprehenderit laboriosam reiciendis magni distinctio et quia officiis optio consequuntur illo ipsum alias eos sint molestias velit? Provident." />
				</main>
			</div>
		</>
	);
}
