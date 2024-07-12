import { setUser } from './store/actions';
import { Page, Footer, Header, Modal } from './components';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Authorization, Post, Registration, Users, Main} from './pages';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';

const App = styled.div`
	display: flex;
	flex-direction: column;
	width: 1000px;
	min-height: 100%;
	background-color: white;
	margin: 0 auto;
`;

export const Blog = () => {
	const dispatch = useDispatch();
	useLayoutEffect(() => {
		const currentUserDataJJON = sessionStorage.getItem('userData');

		if (!currentUserDataJJON) {
			return;
		}
		const currentUserData = JSON.parse(currentUserDataJJON);

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, [dispatch]);
	return (
		<App>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post" element={<Post/>} />
					<Route path="/post/:postId" element={<Post />} />
					<Route path="/post/:postId/edit" element={<Post />} />
					<Route
						path="/*"
						element={
							<div>Такая страница не существует или у вас нет прав</div>
						}
					/>
				</Routes>
			</Page>
			<Footer />
			<Modal />
		</App>
	);
};
