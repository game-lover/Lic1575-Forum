from flask import Flask, send_from_directory, redirect

app = Flask(__name__, static_url_path='', static_folder='frontend/build')

@app.route('/', defaults={'path': ''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')

@app.errorhandler(404)
def not_found(error):
    return app.send_static_file('index.html')
