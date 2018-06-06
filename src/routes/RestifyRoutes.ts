import * as express from "express";
import methodOverride from "method-override";
import * as restify from "express-restify-mongoose";


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
        // restify.serve(router, model, restifyOptions);

        app.use(router);
    }
}


