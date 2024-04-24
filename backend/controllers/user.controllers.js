import User from '../models/user.models.js';

export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;
		const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password');
		res.status(200).json(allUsers);
	} catch (error) {
		console.error('error in getUsersForSidebar: ', error.message);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};
