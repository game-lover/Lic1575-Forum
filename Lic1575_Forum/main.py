from flask import (
    Flask, render_template, request, session, redirect, url_for
)

import secrets

app = Flask(__name__)
app.secret_key = secrets.token_urlsafe(32)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/profile')
def profile():
    return 'Profile'

@app.route('/rules')
def rules():
    return 'Rules'

@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

app.run(debug=True)
