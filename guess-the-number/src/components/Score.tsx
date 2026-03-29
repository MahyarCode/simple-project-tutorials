import React from "react";
import type { ScoreBoard } from "../types/initialContext";

const Score: React.FC<ScoreBoard> = ({ score, highScore, checkResult }) => {
	console.log("Score.tsx Rerendered");

	return (
		<div className="ml-12">
			<h1 className="font-press-start text-white p-4 text-xl">{checkResult}</h1>

			<p className="font-press-start text-white mt-17 text-xl">💯 Score: {score}</p>
			<p className="font-press-start text-white mt-5 text-xl">🎖️ HighScore: {highScore}</p>
		</div>
	);
};

export default Score;
