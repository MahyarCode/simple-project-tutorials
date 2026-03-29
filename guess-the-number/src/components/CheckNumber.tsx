import React, { useRef } from "react";
import type { CheckNumberResult } from "../types/initialContext";

const CheckNumber: React.FC<CheckNumberResult> = ({
	randomNumber,
	score,
	newScore,
	newHighScore,
	gameFinished,
	setCheckResult,
}) => {
	console.log("CheckNumber.tsx Rerendered");

	const inputRef = useRef<HTMLInputElement>(null);

	const handleInput = (event: React.SyntheticEvent<HTMLFormElement>): void => {
		event.preventDefault();
		const value = Number(inputRef.current?.value);

		if (value > randomNumber) {
			newScore(score - 1);
			setCheckResult("It is too HIGH");
		} else if (value < randomNumber) {
			newScore(score - 1);
			setCheckResult("It is too LOW");
		} else if (value === randomNumber) {
			newHighScore(score);
			setCheckResult(`You Won! The Number was ${randomNumber}`);
			gameFinished(true);
		}
	};

	return (
		<form onSubmit={handleInput} className="grid justify-center">
			<input
				type="number"
				className="text-white font-press-start w-56 border rounded-l-md p-2 text-center size-24 text-5xl"
				ref={inputRef}
			/>
			<button className=" text-mist-900 font-press-start bg-white w-48 h-12 mt-12 ml-4">
				Check!
			</button>
		</form>
	);
};

export default CheckNumber;
