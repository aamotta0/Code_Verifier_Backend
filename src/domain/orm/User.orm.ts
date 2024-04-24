import { UserEntity } from "../entities/User.entity";
import { LogSuccess, LogError } from "@/utils/logger";

/**
 * Method to obtain all User from collection "Users" in Monog DB
 */
export const GetAllUsers = async (): Promise<any[] | undefined> => {
    try {
        let userModel = UserEntity();

        // search all users
        return await userModel.find({ isDelete: false });

    } catch (error) {
        LogError(`[ORM ERROR]: Getting All Users: ${error}`);
    }
}

//* TODO:
// - Get User by ID
// - Get User by Email
// - Delete User by ID
// - Create New User
// - Update User by ID

