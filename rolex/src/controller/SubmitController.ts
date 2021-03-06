import { Request, Response, NextFunction } from "express";
import { getConnectionManager } from "typeorm";
import { User } from "../entity/User";

class SubmitController {
    static cancelSubmit = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const manager = getConnectionManager().get('avengers');
            const userRepository = manager.getRepository(User);
            let user = await userRepository.findOne({
                where: {email: req.query.email}
            });
            if(user) {
                user.is_final_submit = false;
                await userRepository.save(user);
                res.status(204).json({message: "Final Submit Cancel succeed."});
            } 
        } catch (e) {
            next(e);
        }
    }
}

export default SubmitController;