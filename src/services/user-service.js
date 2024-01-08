import UserRepository from "../repository/user-repository.js";

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }
    async signUp(data){
        try{
            const user = await this.userRepository.create(data);
            return user;
        } catch(error){
            throw error;
        }
    }

    async signIn(data){
        try{
            const email = data.email;
            const currentpassword = data.password;
            const user = await this.userRepository.findBy({email});
            if(!user){
                throw {
                    message:"User not found"
            }
        }
        if(!user.comparePassword(currentpassword)){
            throw {
                message:"Invalid Password"
            }
        }
        console.log("User Successfully Logged In");
        } catch(error){
            throw error;
        }
    }
}

export default UserService;