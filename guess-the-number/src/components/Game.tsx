import React, { useContext } from "react";

import Heading from "./Heading";
import Title from "./Title";
import { GameInitialContext } from "../store/GameInitialContext";
import CheckNumber from "./CheckNumber";
import Score from "./Score";

const Game: React.FC = () => {
	const gameCTX = useContext(GameInitialContext);

	if (!gameCTX) return;

	return (
		<div className="h-screen w-screen bg-mist-900">
			<div>
				<Heading restartGame={gameCTX?.newRandomNumber} />
				<Title answer={gameCTX.randomNumber} isFinished={gameCTX.isFinished} />
			</div>

			<div className="grid grid-cols-2">
				<CheckNumber
					randomNumber={gameCTX.randomNumber}
					score={gameCTX.score}
					newScore={gameCTX.newScore}
					newHighScore={gameCTX.newHighScore}
					gameFinished={gameCTX.gameFinished}
					setCheckResult={gameCTX.setCheckResult}
				/>
				<Score
					score={gameCTX.score}
					highScore={gameCTX.highScore}
					checkResult={gameCTX.checkResult}
				/>
			</div>
		</div>
	);
};

export default Game;
