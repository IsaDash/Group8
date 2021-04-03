from flask import (Flask, render_template)
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)

@app.route("/")

@app.route("/time", methods=['GET', 'POST'])
def get_time():
    return {'time': time.time()}