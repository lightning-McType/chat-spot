import { Link } from 'react-router-dom';
import GenderCheckbox from './GenderCheckbox';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup';

const Signup = () => {
	const [inputs, setInputs] = useState({
		fullname: '',
		username: '',
		password: '',
		confirmPassword: '',
		gender: '',
	});

	const { loading, signup } = useSignup();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await signup(inputs);
	};

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};

	return (
		<div className="flex flex-col items-center justify-center min-w-96 mx-auto">
			<div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
				<h1 className="text-3xl font-semibold text-center text-gray-300">
					Sign Up <span className="text-blue-500">ChatSpot</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className="label p-2">
							<span className="text-base label-text">Full Name</span>
						</label>
						<input
							type="text"
							value={inputs.fullname}
							onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
							placeholder="John Doe"
							className="w-full input input-bordered h-10"
						/>
					</div>

					<div>
						<label className="label p-2">
							<span className="text-base label-text">Username</span>
						</label>
						<input
							type="text"
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
							placeholder="johndoe"
							className="w-full input input-bordered h-10"
						/>
					</div>

					<div>
						<label className="label">
							<span className="text-base label-text">Password</span>
						</label>
						<input
							type="password"
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
							value={inputs.password}
							placeholder="Enter password"
							className="w-full input input-bordered h-10"
						/>
					</div>
					<div>
						<label className="label">
							<span className="text-base label-text">Confirm Password</span>
						</label>
						<input
							type="password"
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
							value={inputs.confirmPassword}
							placeholder="Confirm Password"
							className="w-full input input-bordered h-10"
						/>
					</div>

					<GenderCheckbox
						onCheckboxChange={handleCheckboxChange}
						selectedGender={inputs.gender}
					/>

					<Link
						to="/login"
						className="text-sm hover:underline hover:text-blue-600 inline-block mt-2">
						Already have an account?
					</Link>

					<div>
						<button
							className="btn btn-block btn-info btn-sm mt-2 border text-white"
							disabled={loading}>
							{loading ? <span className="loading loading-spinner" /> : 'Sign Up'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
