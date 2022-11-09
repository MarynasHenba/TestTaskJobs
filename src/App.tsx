import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Board from './components/Board';
import JobInfo from './components/JobInfo';

function App(): JSX.Element {
	return (
		<Router>
			<Routes>
				<Route path='/jobs' element={<Board />}></Route>
				<Route path='/' element={<Navigate to='/jobs' />}></Route>
				<Route path='/:jobId' element={<JobInfo />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
