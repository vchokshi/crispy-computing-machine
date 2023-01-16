import os

#For /fib
import sys
import requests

#for /rolldice
from random import randint

#for /pet and /qa
import openai

#for flask
from flask import Flask, redirect, render_template, request, url_for

#for opentelemetery
from opentelemetry import trace
from opentelemetry.instrumentation.flask import FlaskInstrumentor
from opentelemetry.instrumentation.requests import RequestsInstrumentor
from opentelemetry.exporter.otlp.proto.http.trace_exporter import OTLPSpanExporter
from opentelemetry.sdk.trace import TracerProvider
from opentelemetry.sdk.trace.export import BatchSpanProcessor

provider = TracerProvider()
processor = BatchSpanProcessor(OTLPSpanExporter())
provider.add_span_processor(processor)
trace.set_tracer_provider(provider)
tracer = trace.get_tracer(__name__)

app = Flask(__name__)
FlaskInstrumentor().instrument_app(app)

RequestsInstrumentor().instrument()

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route("/")
def root():
    return render_template("fib.html")

@app.route("/pet", methods=("GET", "POST"))
def index():
    if request.method == "POST":
        animal = request.form["animal"]
        response = openai.Completion.create(
            model="text-davinci-002",
            prompt=generate_prompt(animal),
            temperature=0.9,
        )
        return redirect(url_for("index", result=response.choices[0].text))

    result = request.args.get("result")
    return render_template("pet.html", result=result)

@app.route("/qa", methods=("GET", "POST"))
def qa():
    if request.method == "POST":
        question = request.form["question"]
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt="I am a highly intelligent being. Ask me anything",
            temperature=0.6,
            max_tokens=100,
            top_p=1,
            frequency_penalty=0.0,
            presence_penalty=0.0,
            stop="\n"
        )
        return redirect(url_for("qa",result=response))
    result = request.args.get("result")
    return render_template("qa.html", result=result)

@app.route("/fib")
def fibHandler():
    i = int(request.args.get('index'))

    current_span = trace.get_current_span()
    current_span.set_attribute("parameter.index", i)

    returnValue = 0
    if i == 0:
        returnValue = 0
    elif i == 1:
        returnValue = 1
    else:
        minusOnePayload = {'index': i - 1}
        minusTwoPayload = {'index': i - 2}

        respOne = requests.get(
            'http://127.0.0.1:5000/fib', minusOnePayload)
        respTwo = requests.get(
            'http://127.0.0.1:5000/fib', minusTwoPayload)

        tracer = trace.get_tracer(__name__)

        with tracer.start_as_current_span("calculate") as span:
            returnValue = int(respOne.content) + int(respTwo.content)
            span.set_attribute("result", returnValue)

    return str(returnValue)

@app.route("/rolldice")
def roll_dice():
    return str(do_roll())

def do_roll():
    return randint(1, 6)

def generate_prompt(animal):
    return """Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: {}
Names:""".format(
        animal.capitalize()
    )
