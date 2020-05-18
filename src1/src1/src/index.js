console.log("strat")
import Application from "./Application";
import Header from "./components/Header";

const app = new Application({
    el: document.querySelector("#app")
  }); // создаем приложение
const header = new Header
  app.router.add("/", null);
  console.log(app , [header]);
  app.update()