# tools/add_test_content.py

from docker.backend.storage.card import Card
from docker.backend.wiring import Wiring

wiring = Wiring()

wiring.card_dao.create(Card(
    slug="helloworld beach",
    name="Hello, world beach!",
    markdown="""
This is a hello-world page.
"""))