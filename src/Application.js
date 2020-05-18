import Router from './Router'

export default class Application {
    constructor(args = {}) {
        this.root = args.el  //точка монтирования
        this.router = new Router
    }
    update() {
        this.router.update()
        this.root.innerHTML = ''
        this.root.append(this.router.page)
    }
}