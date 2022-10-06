from flask import Flask,render_template
app = Flask(__name__)


# @app.route("/")
# def hello_world():
#     return """<h1>Hello, World! This is My  App</h1>
#     """

# @app.route("/about")
# def about():
#     return "<h1> About Page</h1>"

@app.route("/")
def hello_world():
    return  render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact")
def contact():
    return "<h1> Contact Page</h1>"

if __name__ == "__main__":
    app.run(debug=True)