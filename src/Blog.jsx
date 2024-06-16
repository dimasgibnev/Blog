import { Content, Footer, Header } from './components';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const App = styled.div`
	display: flex;
	flex-direction: column;
	width: 1000px;
	min-height: 100%;
	background-color: white;
	margin: 0 auto;
`;

const H = styled.h2`
	text-align: center;
`

export const Blog = () => {
	return (
		<App>
			<Header />
			<Content>
				<H>Заголовок</H>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<div>Авторизация</div>} />
					<Route path="/register" element={<div>Регистрация</div>} />
					<Route path="/users" element={<div>Пользователи</div>} />
					<Route path="/post" element={<div>Новая статья</div>} />
					<Route path="/post/:postId" element={<div>Статья</div>} />
					<Route
						path="/*"
						element={
							<div>Такая страница не существует или у вас нет прав</div>
						}
					/>
				</Routes>
			</Content>
			<Footer />
		</App>
	);
};
