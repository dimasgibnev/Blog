import { Page, Footer, Header } from './components';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Authorization, Post, Registration, Users } from './pages';

const App = styled.div`
	display: flex;
	flex-direction: column;
	width: 1000px;
	min-height: 100%;
	background-color: white;
	margin: 0 auto;
`;

export const Blog = () => {
	return (
		<App>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post" element={<div>Новая статья</div>} />
					<Route path="/posts/:postId" element={<Post />} />
					<Route
						path="/*"
						element={
							<div>Такая страница не существует или у вас нет прав</div>
						}
					/>
				</Routes>
			</Page>
			<Footer />
		</App>
	);
};
