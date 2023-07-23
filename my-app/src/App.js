import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	const [inputWindow, setInputWindow] = useState('');
	const numberClick = (number) => {
		setInputWindow(String(inputWindow) + String(number));
	};
	const plus = () => {
		setInputWindow(String(inputWindow) + String('+'));
	};
	const minus = () => {
		setInputWindow(String(inputWindow) + String('-'));
	};
	const result = () => {
		setInputWindow(String(eval(inputWindow)));
	};
	const reset = () => {
		setInputWindow(String(''));
	};
	return (
		<div className={styles.app}>
			<input
				type="text"
				value={inputWindow}
				placeholder="0"
				className={styles.input}
			/>
			<ul className={styles.ul}>
				{numbers.map((number, id) => (
					<li
						key={id}
						onClick={() => numberClick(number)}
						className={styles.ol}
					>
						{number}
					</li>
				))}
			</ul>
			<button className={styles.button} onClick={plus}>
				+
			</button>
			<button className={styles.button} onClick={minus}>
				-
			</button>
			<button className={styles.button} onClick={reset}>
				C
			</button>
			<button className={styles.button} onClick={result}>
				=
			</button>
		</div>
	);
};
