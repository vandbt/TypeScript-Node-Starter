import * as express from "express";


export class DefaultRoutes {

    /**
     * Define app route here in separated routes module
     * @param  {express.Application} app
     * @returns void
     * @example insert at app.ts
     * DefaultRoutes.map(app);
     */
    static map(app: express.Application): void {
        app.get("/version", (req: express.Request, res: express.Response) => {
            const pkg = require("../../package.json");
            res.json({
                name: pkg.name,
                version: pkg.version,
                description: pkg.description
            });
        });
    }

}


