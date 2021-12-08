# backend/server.py

import os.path

import flask
import flask_cors

from docker.backend.storage.card import CardNotFound
from docker.backend.wiring import Wiring


env = os.environ.get("APP_ENV", "dev")
print(f"Starting application in {env} mode")


class HabrAppDemo(flask.Flask):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        flask_cors.CORS(self, resources={r"/*": {"origins": "*"}})

        self.wiring = Wiring(env)

        self.route("/api/v1/card/<card_id_or_slug>")(self.card)

    def card(self, card_id_or_slug):
        try:
            card = self.wiring.card_dao.get_by_slug(card_id_or_slug)
        except CardNotFound:
            try:
                card = self.wiring.card_dao.get_by_id(card_id_or_slug)
            except (CardNotFound, ValueError):
                return flask.abort(404)
        return flask.jsonify({
            k: v
            for k, v in card.__dict__.items()
            if v is not None
        })


app = HabrAppDemo("habr-app-demo")
app.config.from_object(f"docker.backend.{env}_settings")