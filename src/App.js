import React, { useRef, useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import Canvas from './panels/Canvas';

const App = () => {
	const [fetchedUser, setUser] = useState(null);
    const [value, setValue] = useState(0);
    const handleClick = (e) => {
        setValue(value + 1);
    };

    
	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
		}
		fetchData();
	}, []);

	return (
        <div>
            <h1 onClick={handleClick}>{value}</h1>
            <Canvas width={500} height={500} fillStyle={'yellow'} />
        </div>
	);
}

export default App;