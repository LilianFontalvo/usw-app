from flask import Flask, render_template, url_for, request

app = Flask(__name__)

# Config options - Make sure you created a 'config.py' file.
app.config.from_object("config")
# To get one variable, tape app.config['MY_VARIABLE']


@app.route("/")
def index():
    return render_template("main.html")
