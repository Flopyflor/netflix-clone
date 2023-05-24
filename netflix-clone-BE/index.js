import app from './app.js'

const port = app.get('port')

app.listen(port, async () => {
    console.log('funcionando en el puerto', port)
});