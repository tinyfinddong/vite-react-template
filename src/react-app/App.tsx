import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("unknown");

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
			</div>
			<h1>Vite + React + Cloudflare</h1>
			<div className="card">
				<button onClick={() => setCount((c) => c + 1)} aria-label="increment">
					count is {count}
				</button>
			</div>
			<div className="card">
				<button
					onClick={() => {
						fetch("/api/")
							.then((res) => res.json() as Promise<{ name: string }>)
							.then((data) => setName(data.name));
					}}
					aria-label="get name"
				>
					Name from API: {name}
				</button>
			</div>
		</>
	);
}

export default App;
