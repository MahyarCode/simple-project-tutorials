import { useState, type ReactNode } from "react";
import React from "react";
import { GameInitialContext } from "./GameInitialContext";
const firstRandom = Math.random();

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [randomNumber, setRandomNumber] = useState<number>(Math.floor(firstRandom * 20) + 1);
	const [highScore, setHighScore] = useState<number>(0);
	const [score, setScore] = useState<number>(20);
	const [isFinished, setIsFinished] = useState<boolean>(false);
	const [checkResult, setCheckResult] = useState<string>("Start Guessing...");

	function newScore(): void {
		setScore((prevScore) => prevScore - 1);
	}
	function newHighScore(currentScore: number): void {
		setHighScore((prevHighScore) =>
			prevHighScore < currentScore ? currentScore : prevHighScore,
		);
	}
	function newRandomNumber(): void {
		const generateNumber = Math.floor(Math.random() * 20) + 1;
		setRandomNumber(generateNumber);
		setIsFinished(false);
		setScore(20);
		setCheckResult("Start Guessing...");
	}
	function gameFinished(condition: boolean): void {
		setIsFinished(condition);
	}

	const gameCTX = {
		score,
		newScore,
		highScore,
		newHighScore,
		randomNumber,
		newRandomNumber,
		isFinished,
		gameFinished,
		checkResult,
		setCheckResult,
	};

	console.log("GameContext.tsx Rerendered");

	return <GameInitialContext.Provider value={gameCTX}>{children}</GameInitialContext.Provider>;
};
