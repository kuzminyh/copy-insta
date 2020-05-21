import Component from '../Component';
import htmlTemplate from './index.html';
import CommentsPlace from '../CommentsPlace';

export default class Post extends Component{
    constructor(originalArgs={}){
        super('post')
        const args = {
            user: {
                name: 'notName',
                family: 'NoFamily',
                image: 'Oops'
            },
            content: {
              description: '' ,
              image: 'Oops',
              tags: []
            },
            comments: [],
            ...originalArgs // тут мы сливаем данные с данными по умолчанию
        }
        this.user = {
            name: args.user.name,
            family: args.user.family,
            image: args.user.image
          };
      
          this.content = {
           description: args.content.description,
           image: args.content.image,
           tags: args.content.tags.slice()
          }
           
          this.commentsPlace = new CommentsPlace(args.comments)
         /* this.comments = args.comments.map(x=>({
            name: x.user.name,
            family: x.user.family,
            image: x.user.image
          }))*/

        }
    
    
     
        getHtmlTemplate() {// переопределяем ф-ю // должна возвращаться строка с html кодом    
            return htmlTemplate // или можно было прописать require прям тут
              .replace(/{%user.name%}/g, this.user.name) // заменяем шаблоны // флаг g замена всех вхождений
              .replace(/{%user.family%}/g, this.user.family)
              .replace(/{%user.image%}/g, this.user.image)
        
              .replace(/{%content.image%}/g, this.content.image)
              .replace(/{%content.description%}/g, this.content.description)
              .replace(/{%content.tags%}/g, this.content.tags.join(" "));
          }
          
          render() {
              const element = super.render()
              console.log('this.commentsPlace.comments', this.commentsPlace.comments)
             // element.append(...this.commentsPlace.comments.map(x=>x.render())); // добавляем components(посты) в элемент
              return element;
          }
}

// иммутабельность - неизменяемым (англ. immutable) называется объект, состояние которого не может быть изменено после создания.
// Результатом любой модификации такого объекта всегда будет новый объект, при этом старый объект не изменится

// мы не создаем доп ссылок на объекты, пришебшие извне, вместо этого мы создаем свои объекты и клонируем в них все данные
// это делается для того, чтобы изменения были независимы друг от друга