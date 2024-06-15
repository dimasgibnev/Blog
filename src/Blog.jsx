import styled from 'styled-components';
import { Content, Footer, Header } from './components';
import { Routes, Route } from 'react-router-dom';

export const Blog = () => {
	return (
		<>
			<Header />
			<Content>
				<h2>Заголовок</h2>
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
		</>
	);
};
