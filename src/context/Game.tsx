import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { GameState } from '../types/game';
import { initialUpgrades } from '../features/upgrades/data';
import { initialAutomations } from '../features/automations/data';

// Initial game state
const initialState: GameState = {
	cake: 0,
	clickMultiplier: 1,
	cakePerClick: 1,
	cakePerSecond: 0,
	totalClicks: 0,
	upgrades: initialUpgrades,
	automations: initialAutomations,
};

// Action types
type GameAction =
	| { type: 'CLICK' }
	| { type: 'BUY_UPGRADE'; upgradeId: string }
	| { type: 'BUY_AUTOMATION'; automationId: string }
	| { type: 'TICK' };

// Reducer function
function gameReducer(state: GameState, action: GameAction): GameState {
	switch (action.type) {
		case 'CLICK':
			return {
				...state,
				cake: state.cake + state.cakePerClick,
				totalClicks: state.totalClicks + 1,
			};

		case 'BUY_UPGRADE': {
			const upgrade = state.upgrades[action.upgradeId];
			if (!upgrade || state.cake < upgrade.currentPrice) {
				return state;
			}

			const updatedUpgrade = {
				...upgrade,
				count: upgrade.count + 1,
				currentPrice: Math.floor(upgrade.currentPrice * upgrade.costIncreaseFactor),
			};

			return {
				...state,
				cake: state.cake - upgrade.currentPrice,
				clickMultiplier: state.clickMultiplier + upgrade.multiplier,
				cakePerClick: (state.clickMultiplier + upgrade.multiplier) * 1, // base click value is 1
				upgrades: {
					...state.upgrades,
					[action.upgradeId]: updatedUpgrade,
				},
			};
		}

		case 'BUY_AUTOMATION': {
			const automation = state.automations[action.automationId];
			if (!automation || state.cake < automation.currentPrice) {
				return state;
			}

			const updatedAutomation = {
				...automation,
				count: automation.count + 1,
				currentPrice: Math.floor(automation.currentPrice * automation.costIncreaseFactor),
			};

			const newMoneyPerSecond = Object.values(state.automations).reduce((total: number, auto) => {
				return (
					total +
					(auto.id === action.automationId
						? (auto.count + 1) * auto.incomePerSecond
						: auto.count * auto.incomePerSecond)
				);
			}, 0);

			return {
				...state,
				cake: state.cake - automation.currentPrice,
				cakePerSecond: newMoneyPerSecond,
				automations: {
					...state.automations,
					[action.automationId]: updatedAutomation,
				},
			};
		}

		case 'TICK':
			return {
				...state,
				cake: state.cake + state.cakePerSecond / 10, // We update 10 times per second
			};

		default:
			return state;
	}
}

// Create context
interface GameContextType {
	state: GameState;
	dispatch: React.Dispatch<GameAction>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

// Provider component
interface GameProviderProps {
	children: ReactNode;
}

export function GameProvider({ children }: GameProviderProps) {
	const [state, dispatch] = useReducer(gameReducer, initialState);

	// Game loop for automations (runs 10 times per second)
	useEffect(() => {
		const interval = setInterval(() => {
			dispatch({ type: 'TICK' });
		}, 100);

		return () => clearInterval(interval);
	}, []);

	return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>;
}

// Custom hook to use the game context
export function useGame() {
	const context = useContext(GameContext);
	if (context === undefined) {
		throw new Error('useGame must be used within a GameProvider');
	}
	return context;
}
