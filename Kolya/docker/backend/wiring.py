# backend/wiring.py

import os

from pymongo import MongoClient
from pymongo.database import Database

import docker.backend.dev_settings
from docker.backend.storage.card import CardDAO
from docker.backend.storage.card_impl import MongoCardDAO


class Wiring(object):

    def __init__(self, env=None):
        if env is None:
            env = os.environ.get("APP_ENV", "dev")
        self.settings = {
            "dev": docker.backend.dev_settings,
            # (добавьте сюда настройки других
            # окружений, когда они появятся!)
        }[env]

        # С ростом числа компонент этот код будет усложняться.
        # В будущем вы можете сделать тут такой DI, какой захотите.
        self.mongo_client: MongoClient = MongoClient(
            host=self.settings.MONGO_HOST,
            port=self.settings.MONGO_PORT)
        self.mongo_database: Database = self.mongo_client[self.settings.MONGO_DATABASE]
        self.card_dao: CardDAO = MongoCardDAO(self.mongo_database)