import Component from '../Component';
import htmlTemplate from './index.html';

export default class CommentPlace extends Component{
    constructor(args){
        super('commentPlace');
        this.comments = args;

    }

    add(component){ // по-хорошему, надо бло добавить проверку существования компонента в коллекции компонентов
        this.comments.push(component);
    }

    render(){
        const element = super.render(); //вызов родительского метода render из super класса
        element.append(...this.comments.map(x=>x.render())); // добавляем components(посты) в элемент
        return element;
    }
    
    
    getHtmlTemplate(){ // переопределяем ф-ю // должна возвращаться строка с html кодом         
        return htmlTemplate; // или можно было прописать require прям тут 
    }
}