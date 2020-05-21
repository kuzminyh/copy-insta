console.log("strat")
import Application from "./Application";
import Header from "./components/Header";
import Container from "./components/Container"
import Post from "./components/Post"


import store from './fakeData.json'
const app = new Application({
    el: document.querySelector("#app") //точка монтирования
  }); // создаем приложение
const header = new Header()
const container = new Container()
//container.add(new Post)
       for (const post of store.posts){
         container.add(new Post(post))
       }

  app.router.add("/", [header, container]);
  console.log('app' , app);
  app.update()