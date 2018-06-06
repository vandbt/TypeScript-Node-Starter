import * as express from "express";
import methodOverride from "method-override";
import * as restify from "express-restify-mongoose";
import * as models from "../models/mongoose";



const restifyOptions = {
    prefix: "/api",
    version: "/v1"
};

export class RestifyRoutes {

    /**
     * @param  {express.Application} app
     * @param  {express.Router} router
     * @returns void
     */
    static map(app: express.Application, router: express.Router): void {
        app.use(methodOverride("X-HTTP-Method-Override"));

        /**
         * Add mongoose schema models
         */
        restify.serve(router, models.TodoModel, restifyOptions);
        restify.serve(router, models.ContactModel, restifyOptions);
        restify.serve(router, models.LocationModel, restifyOptions);

        app.use(router);
    }
}


