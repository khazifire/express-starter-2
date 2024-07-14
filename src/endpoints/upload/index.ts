import {z} from "zod";
import {defaultEndpointsFactory, ez} from "express-zod-api";



export const uploadEndpoints = defaultEndpointsFactory
    .build({
        shortDescription: "example",
        description: "description.",
        method: "post", // or methods: ["get", "post", ...]
        input: z.object({
            files: z.union([z.array(ez.upload()), ez.upload()]).transform(files => Array.isArray(files) ? files : [files]),
            details: z.string()
        }),
        output: z.object({
            greetings: z.any(),
        }),
        handler: async ({ input, options, logger }) => {
            console
            const {files, details} = input;
            const _details = JSON.parse(details);
            console.log("here", _details)
            
            // logger.info("here",_details)
            // logger.info("Hello, world!");
            return { greetings: _details}
        },
});


