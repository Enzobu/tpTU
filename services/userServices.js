const User = require('../models/userModel')

class UserService {


    async isEmailTaken  (email) {
        const usedEmail = await User.findOne({
            where: { email: email }
          });
        
        if (usedEmail) {
            return true
        }
        return false 
    }
}

module.exports = UserService;


