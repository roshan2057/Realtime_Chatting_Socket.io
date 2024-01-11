import {createClient} from 'redis';
const client = createClient();
client.on('error',error=>{
    console.error(`Error in connecting redis ${error}`)
})

await client.connect({url: process.env.REDIS_URL});

export default client;