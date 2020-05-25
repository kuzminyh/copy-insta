export default class Page{
    constructor(container){
      //  console.log('container', container)
        this.fragment = document.createDocumentFragment();
        this.fragment.append(...container.map(function(x){  //x=>x.render())) //append принимает перечень(через запятую), а map возвращает массив
            console.log('xPage',x)
            return x.render()

        }))
            
    }
}