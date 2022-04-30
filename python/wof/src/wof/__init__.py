class Player:
    def __init__(self,firstname,lastname):

        captain = False

        self.firstname = firstname
        self.lastname = lastname

    def __str__(self):
        return f'{self.firstname}, {self.lastname}'

def spin_wheel():
    print("Hello World")
    player = Player("Test", "Test")
    print(player)
