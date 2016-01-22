import random
suggestions = ["Sprehod v naravi", "Obisk psihijatra", "Caj s prijateljicami"]
def choose_suggestion(suggestion_list):
    """takes a suggestion"""
    idea_num = random.randint(0, len(suggestion_list))
    return suggestion_list[idea_num]

print choose_suggestion(suggestions)