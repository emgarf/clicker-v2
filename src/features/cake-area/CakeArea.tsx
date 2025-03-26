import useClickHandler from './useClickHandler';
import { useGame } from '../../context/Game';
import { useState } from 'react';
import './click-area.css';

export function CakeArea() {
	const { handleClick } = useClickHandler();
	const [askii, setAskii] = useState(`|####|>o<|###|`);
	const { state } = useGame();

	const askiiMovingParts = [
		`|####|>o<|###|`,
		`|####|u_u|###|`,
		`|####|x_x|###|`,
		`|####|v_v|###|`,
		`|####|-_-|###|`,
		`|####|T_T|###|`,
		`|####|ToT|###|`,
		`|####|U_U|###|`,
		`|####|"_"|###|`,
		`|####|"o"|###|`,
		`|####|V_V|###|`,
		`|####|VoV|###|`,
		`|####|<_<|###|`,
		`|####|>_>|###|`,
	];

	function bakeCake() {
		setAskii(askiiMovingParts[Math.floor(Math.random() * askiiMovingParts.length)]);
		handleClick();
	}

	return (
		<div className="cake">
			<p>
				You have <span>{state.cake.toFixed(2)}</span> cakes. <br />
			</p>
			<p>
				Money per click: <b>{state.cakePerClick.toFixed(2)}</b>
			</p>
			<p>click on the cake below</p>
			| <br />
			| <br />v
			<div onClick={() => bakeCake()} className="cake__askii">
				<div> (^)(^)(^)(^) </div>
				<div> _i__i__i__i_ </div>
				<div> (____________) </div>
				<div> {askii} </div>
				<div> (____________) </div>
			</div>
		</div>
	);
}
