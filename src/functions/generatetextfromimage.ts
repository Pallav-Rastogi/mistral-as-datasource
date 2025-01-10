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
    const imgurl = query.imgurl; 

    const ds: GSDataSource = ctx.datasources.mistral;

    const response = await ds.execute(ctx, {
        prompt,
        imgurl,
        meta: {method: 'generatetextfromimage'}
    });
    return response;    
}

// import { GSCloudEvent, GSContext, PlainObject, GSStatus } from "@godspeedsystems/core";
// import { Mistral } from '@mistralai/mistralai';
// const apiKey = process.env.MISTRAL_API_KEY;
// console.log('beginning...');
// const client = new Mistral({apiKey: apiKey});

// export default async function (ctx: GSContext, args: PlainObject) {
//     const {
//         inputs: {
//             data: {
//                 query
//             }
//         }, 
        
//     }= ctx;

//     const prompt = query.prompt; 
//     const imgurl = query.imgurl; 
    
//     const chatResponse = await client.chat.complete({
//         model: "pixtral-12b",
//         messages: [
//           {
//             role: "user",
//             content: [
//               { type: "text", text: prompt },
//               {
//                 type: "image_url",
//                 imageUrl: imgurl,
//               },
//             ],
//           },
//         ],
//       });
    
//     return new GSStatus(true, 200, undefined, chatResponse.choices[0].message.content, undefined);  
    
// }







