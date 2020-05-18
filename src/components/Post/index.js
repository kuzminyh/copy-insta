import Component from '../Component';
import htmlTemplate from './index.html';

export default class Post extends Component{
    constructor(){
        super('post');
    }
    
    getHtmlTemplate(){ // переопределяем ф-ю // должна возвращаться строка с html кодом хедера
        console.log('htmlTemplate',htmlTemplate)
        return htmlTemplate; // или можно было прописать require прям тут 
    }
}