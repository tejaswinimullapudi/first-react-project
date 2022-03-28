from cgitb import html
import json
from flask import Flask, request, render_template, session, redirect
from flask import current_app, flash, jsonify, make_response, redirect, request, url_for
from fetchdata import reader
import numpy as np
import pandas as pd


app = Flask(__name__)

#df1, df2 = reader()
reader()
with open('car.json', 'r') as myfile:
    data = myfile.read()
    print(data)

@app.route('/cars', methods=("POST", "GET"))
def html_table1():
  if request.method == 'GET':
    # return render_template('simple.html',  tables=[df1.to_html(classes='data')], titles=[df1.columns.values])
    # return render_template('simple.html', titles='page', jsonfile=json.dumps(data))
    response=jsonify(
                
                category="success",
                data=data,
                status=200
            )
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

with open('customer.json', 'r') as myfile:
    data2 = myfile.read()

@app.route('/customer', methods=("POST", "GET"))
def html_table2():

    #return render_template('simple.html',  tables=[df2.to_html(classes='data') ], titles=[df2.columns.values])
    return render_template('simple.html', titles='page', jsonfile=json.dumps(data2))



if __name__ == '__main__':
    app.run(debug = True, host='0.0.0.0')