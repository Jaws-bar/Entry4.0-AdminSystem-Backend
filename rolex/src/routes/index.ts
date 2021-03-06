import { Router, Request, Response} from "express";
import auth from './auth';
import stats from './stats';
import submit from './submit';
import info from './info';
import list from './list';

const routes = Router();

routes.use("/auth", auth);
routes.use("/stats", stats);
routes.use("/submit", submit);
routes.use("/info", info);
routes.use("/list", list);

export default routes;