import * as express from "express";
import methodOverride from "method-override";
import * as restify from "express-restify-mongoose";
import * as models from "../models/mongoose";



const DefaultReadLimit = "50";

/**
 * Setting Default limit when limit query missed harness over load
 * @param  {express.Request} req
 * @param  {express.Response} res
 * @param  {express.NextFunction} next
 */
const paginateMiddleware = function (req: express.Request, res: express.Response, next: express.NextFunction) {
    // only effect http method GET
    // if (req.method == "GET") {
    //     req.query.limit = req.query.limit || DefaultReadLimit;
    // }
    req.query.limit = req.query.limit || DefaultReadLimit;
    // console.log(req.query);
    next();
};

// declare option for restify
const restifyOptions = {
    prefix: "/api",
    version: "/v1",
    totalCountHeader: true
};

// build base api path
const routePath = restifyOptions.prefix + restifyOptions.version + "/*";

export class RestifyRoutes {

    /**
     * @param  {express.Application} app
     * @param  {express.Router} router
     * @returns void
     */
    static map(app: express.Application, router: express.Router): void {
        // use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
        app.use(methodOverride("X-HTTP-Method-Override"));

        router.get(routePath, paginateMiddleware); // apply defulat limit that prevent loading all records.

        /**
         * Add mongoose schema models
         */
        restify.defaults(restifyOptions);
        restify.serve(router, models.TodoModel);
        restify.serve(router, models.ContactModel);
        restify.serve(router, models.LocationModel);

        app.use(router);
    }
}


