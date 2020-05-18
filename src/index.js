import Application from './Application'
const app = new Application({
    el: document.querySelector('#app') //точка монтирования приложения
})
app.router.add('/' , null)
app.router.add('/edit' , null)

//После установления роутеров обновляем приложение целиком
app.update()

console.log(app)