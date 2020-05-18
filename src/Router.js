export default class Router {
    constructor() {
        this.routes = []
        this.route = null
    }
    add(path, container) {
        this.routes.push({
            path, container
        })
    }
    update(){
        for (const route of this.routes) {
            if(route.path.match(location.path)){
                
            }
        }
        console.log(location.pathname)
    }
}