export interface InitialContext {
	score: number;
	newScore: (score: number) => void;
	highScore: number;
	newHighScore: (highScore: number) => void;
	randomNumber: number;
	newRandomNumber: () => void;
	isFinished: boolean;
	gameFinished: (condition: boolean) => void;
	checkResult: string;
	setCheckResult: (result: string) => void;
}

export interface ScoreBoard {
	score: number;
	highScore: number;
	checkResult: string;
}

export interface CheckNumberResult {
	randomNumber: number;
	score: number;
	newScore: (score: number) => void;
	newHighScore: (highScore: number) => void;
	gameFinished: (condition: boolean) => void;
	setCheckResult: (result: string) => void;
}
