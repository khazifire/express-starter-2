import { createServer } from "express-zod-api";
import {config, app} from "./config";
import {routing} from "./routes";

// export default createServer(config, routing);

app.listen(8090, () => {
    config.logger.info("Starting application.")
})

export default app;
