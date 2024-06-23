import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { MyButton, H2, MyInput } from '../../ui';
import { server } from '../../bff';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { setUser } from '../../store/actions';
import { selectUserRole } from '../../selectors';
import { ROLE } from '../../constants/role';

const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Логин обязателен')
		.matches(/^\w+$/, 'Логин должен содержать только буквы и цифры')
		.min(3, 'Логин должен содержать минимум 3 символа')
		.max(15, 'Логин должен содержать максимум 15 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d%#]*$/,
			'неверно заполненый пароль, должен содержать буквы , цифры, знаки # и %',
		)
		.min(6, 'Пароль должен содержать минимум 6 символов')
		.max(30, 'Пароль должен содержать максимум 30 символов'),
});

const StyledLink = styled(Link)`
	text-align: center;
	text-decoration: underline;
	font-size: 20px;
`;

const ErrorMessage = styled.div`
	background-color: #ee8888;
	font-size: 20px;
	margin-bottom: 20px;
	padding: 10px;
	width: 100%;
	text-align: center;
`;

const AuthorizationContainer = ({ className }) => {
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(authFormSchema),
	});

	const [serverError, setServerError] = useState(null);
	const store = useStore();
	useEffect(() => {
		let currentWasLogout = store.getState().app.wasLogout;
		return store.subscribe(() => {
			let prevWasLogout = currentWasLogout;
			currentWasLogout = store.getState().app.wasLogout;

			if (currentWasLogout !== prevWasLogout) {
				reset();
			}
		});
	}, [reset, store]);

	const onSubmit = (loginAndPassword) => {
		server.authorize(loginAndPassword).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}

			dispatch(setUser(res));
		});
	};
	const formError = errors?.login?.message || errors?.password?.message;
	const errorMessage = formError || serverError;

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	return (
		<div className={className}>
			<H2>Авторизация</H2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<MyInput
					type="text"
					placeholder="Логин"
					{...register('login', { onChange: () => setServerError(null) })}
				/>
				<MyInput
					type="password"
					placeholder="Пароль"
					{...register('password', { onChange: () => setServerError(null) })}
				/>
				<MyButton margin="0 0 10px 0" disabled={!!formError} type="submit">
					Авторизоваться
				</MyButton>
				{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
				<StyledLink to={'/register'}>Регистрация</StyledLink>
			</form>
		</div>
	);
};

export const Authorization = styled(AuthorizationContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > form {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 260px;
	}
`;
