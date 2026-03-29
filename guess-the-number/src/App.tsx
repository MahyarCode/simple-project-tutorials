import React from "react";
import { GameProvider } from "./store/GameProvider";
import Game from "./components/Game";

const App: React.FC = () => {
	console.log("App.tsx Rendered");
	return (
		<>
			<GameProvider>
				<Game />
			</GameProvider>
		</>
	);
};

export default App;
