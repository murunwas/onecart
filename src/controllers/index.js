import BlockController from "./block.ctrl"

export default function setAppRoutes(app) {
  const controllers =[new BlockController()];
  controllers.forEach(c=>{
    app.use("/", c.router)
  })
}