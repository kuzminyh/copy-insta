import Component from '../Component';
import htmlTemplate from './index.html';

export default class Container extends Component{
    constructor(){
        super('container');
        this.components = []
    }
    
    add() {
      this.components.push(component)
    }
    
    getHtmlTemplate(){ // переопределяем ф-ю // должна возвращаться строка с html кодом хедера
       
        return htmlTemplate; // или можно было прописать require прям тут 
    }
}