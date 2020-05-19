import Component from '../Component';
import htmlTemplate from './index.html';

export default class CommentPlace extends Component{
    constructor(){
        super('commentPlace');
        this.components = [];
    }

    add(component){ // по-хорошему, надо бло добавить проверку существования компонента в коллекции компонентов
        this.components.push(component);
    }

    render(){
        const element = super.render(); //вызов родительского метода render из super класса
        element.append(...this.components.map(x=>x.render())); // добавляем components(посты) в элемент
        return element;
    }
    
    getHtmlTemplate(){ // переопределяем ф-ю // должна возвращаться строка с html кодом         
        return htmlTemplate; // или можно было прописать require прям тут 
    }
}