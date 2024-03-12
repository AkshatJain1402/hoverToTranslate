from flask import Flask, jsonify, request, json
from flask_cors import CORS
from googletrans import Translator
app = Flask(__name__)
CORS(app)

results_data = {}  # A dictionary to hold results (in-memory)
translator=Translator()
@app.route('/processData',methods=['POST'])
def process_data():
    req_data = request.get_json(force=True)
    print(req_data)
    test=req_data['textToBeTranslated']
    if type(test)==str:

         translation=translator.translate(str(test),'hi')

         print(translation.text)
    else:
         print(type(test))

    results_data = req_data 
    
    return  jsonify(translation.text)


@app.route('/getResults', methods=["GET"])
def get_results():  
    return jsonify(results_data) 

# ... your `translateText` function ... 

if __name__ == '__main__':
    app.run(debug=True)
