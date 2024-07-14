import {createConfig} from "express-zod-api";
import yaml from "yaml";
import { readFileSync } from "node:fs";
import ui from "swagger-ui-express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import {env} from "@/config/env";
import {isUrlValid} from "@/utils/routing";
import express from "express";
import { attachRouting } from "express-zod-api";
import { routing } from "@/routes";
import { update } from "lodash";
import fileUpload from "express-fileupload";

const documentation = yaml.parse(
    readFileSync(env.DOC_PATH, "utf-8"),
);

export const app = express()
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(fileUpload())  

app.get("/", (req, res) =>
    res.send({
      system: "Ticketing",
      host: req.get("host"),
    })
  );;

export const config = attachRouting(
    {
    app,
    cors: true,
    startupLogo: false,
    logger: { level: "debug", color: true },
}, routing);



