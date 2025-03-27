export interface Upgrade {
	id: string;
	name: string;
	basePrice: number;
	currentPrice: number;
	multiplier: number;
	count: number;
	costIncreaseFactor: number;
}

export interface Automation {
	id: string;
	name: string;
	basePrice: number;
	currentPrice: number;
	incomePerSecond: number;
	count: number;
	costIncreaseFactor: number;
}

export interface GameState {
	cake: number;
	clickMultiplier: number;
	cakePerClick: number;
	cakePerSecond: number;
	upgrades: Record<string, Upgrade>;
	automations: Record<string, Automation>;
}
