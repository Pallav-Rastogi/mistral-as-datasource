import { GSCloudEvent, GSContext, PlainObject, GSStatus, GSDataSource } from "@godspeedsystems/core";

export default async function (ctx: GSContext, args: PlainObject) {
    const {
        inputs: {
            data: {
                query
            }
        }, 
        
    }= ctx;
    
    const prompt = query.prompt; 
    
    const ds: GSDataSource = ctx.datasources.mistral;
    
    const response = await ds.execute(ctx, {
        prompt,
        meta: {method: 'generatetext'}
    });
    return response;    
}







