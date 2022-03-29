import os

import pytest

# from src import protect


@pytest.fixture
def create_file():
    with open("output_file", "wb") as fout:
        fout.write(os.urandom(1024))


def test_protect():
    # protect(create_file())
    assert True
