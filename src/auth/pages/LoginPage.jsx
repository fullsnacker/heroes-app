import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
	const navigate = useNavigate();
	const onLogin = () => {
		navigate('/', { replace: true });
	};
	return (
		<div className="container mt-5">
			<h2>Login</h2>
			<hr />
			<button className="btn btn-primary" onClick={onLogin}>
				Login
			</button>
		</div>
	);
};
