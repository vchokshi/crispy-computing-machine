from src import createUser

def setup_dynamodb():


def test_createUser():
    user = createUser("NAME", "SURNAME", "EMAIL", "PASSWORD)")
    print(type(user))
    # assert type(user) == Object
    assert user.name == "NAME"
    assert user.getName() == "NAME"
    assert user.getSurname() == "SURNAME"
