from app import app
app.debug = True
app.secret_key = 'Tarzan_key'
app.run(host='127.0.0.1', port='5000')