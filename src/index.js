console.log("strat")
import Application from "./Application";
import Header from "./components/Header";
import Container from "./components/Container"
import Post from "./components/Post"
const app = new Application({
    el: document.querySelector("#app")
  }); // создаем приложение
const header = new Header()
const container = new Container()
container.add(new Post)

  app.router.add("/", [header, container]);
  console.log('header' , [header]);
  app.update()