from flask import Flask, jsonify
import db
app = Flask(__name__)



@app.route('/')
def flask_mongodb_atlas():
    return "flask mongodb atlas!"

#test to insert data to the data base
@app.route('/test')
def test():
    # db.db.collection.insert_one({"name": "John"})
    return "Connected to the data base!"
@app.route("/quote", methods=["GET"])
def get_random_quote():
    return jsonify({"greeting":"hello"})