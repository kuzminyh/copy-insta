import Page from './Page'
export default class Router{
    constructor(){
        this.routes = [];
        this.route = null; // текуший роут
        this.page = null;
    }

    add(path, container){ // добавляем пути для роутеринга
        this.routes.push({
            path, container
        })
        console.log('this.routes', this.routes);
    }

    update(){ // обновляет все приложение целиком
        //console.log('location',location); // location - объект, кот хранит служебную ин-фу об адресной строке

        for (const route of this.routes){ // ищем нужный роут
            if (route.path.match(location.path)){ // если путь совпадает
                console.log('route', route.container);
                this.route = route;
                this.page = new Page(route.container) // Page - внешний вид нашей страницы
                
            }
        } 
    }
}