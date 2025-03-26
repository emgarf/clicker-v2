import { GameProvider } from './context/Game';
import { CakeArea } from './features/cake-area/CakeArea';
import { UpgradesList } from './features/upgrades/List';
import { AutomationsList } from './features/automations/List';
import logo from './cake_clicker.png';
import './app.css';

function App() {
	return (
		<GameProvider>
			<div className="app">
				<main className="content">
					<header className="header">
						<img src={logo} alt="logo" />
					</header>
					<section>
						<CakeArea />
					</section>
				</main>
				<aside className="upgrades">
					<UpgradesList />
					<AutomationsList />
				</aside>
			</div>
		</GameProvider>
	);
}

export default App;
