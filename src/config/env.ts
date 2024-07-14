import 'dotenv/config';
import {z} from "zod";

const environmentSchema = z.object({
    APP_NAME: z.string().optional().default("Express Starter"),
    PORT: z.coerce.number({message: "Port should be a number."}).optional().default(8090),
    BASE_URL: z.string().optional().default("http://localhost:8090"),
    JWT_SECRET: z.string({message: "Secret should not be empty."}).default("secret"),
    JWT_EXPIRED: z.string().optional().default("1h"),
    MS_AUTHORITY: z.string().optional().default("https://login.microsoftonline.com/common"),
    MS_CLIENT_ID: z.string({message: "CLIENT_ID should not be empty."}).default("sdsds2222"),
    MS_CLIENT_SECRET: z.string({message: "CLIENT_SECRET should not be empty."}).default("hellohsidsds"),
    MS_REDIRECT_URI: z.string().optional().default("http://localhost:8090/v1/auth/microsoft/callback"),
    MS_REDIRECT_FE_URL: z.string().optional().default("http://localhost:3000/login").describe("When user redirect to ms-auth callback, it would redirect to this given url."),
    DOC_PATH: z.string().optional().default("documentation/endpoints.yaml")
})

export const env = environmentSchema.parse(process.env);
