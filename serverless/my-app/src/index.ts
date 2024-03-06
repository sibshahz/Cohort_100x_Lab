export interface Env {

}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		console.log(request.body)
		console.log(request.headers)
		console.log("ROUTE IS: ",request.url)
		if(request.method === "GET"){
			return new Response("You sent a get request")
		}else{

			return Response.json({
				message: "You did not sent a get request"
			});
		}
	},
};
