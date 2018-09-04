import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BubbleCanvas from './BubbleCanvas/BubbleCanvas';
import HUD from './HUD/HUD';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BubbleCanvas />, document.getElementById('BubbleCanvas'));
ReactDOM.render(<HUD />, document.getElementById('HUD'));
registerServiceWorker();
