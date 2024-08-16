import User from '../models/usermodel.js'
export const getUsersForSiderbar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id

        //fetch users from the db
        //$ne:logggeIn exclude authenticated user
        // select - exclude passw
        const filteredUser = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(filteredUser);
    } catch (error) {
        console.error("Error in getUsersForSiderbar:", error.message)
        res.status(500).json({ error: "Internal server error.message" });

    }
}