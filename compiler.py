
import os
import webapp2
import jinja2
import random
import time
import urllib

from google.appengine.ext import ndb

#initializing work environment: the file, and the jinja
template_dir = os.path.join(os.path.dirname(__file__), "templates")
template_loader = jinja2.FileSystemLoader(template_dir)
template_env = jinja2.Environment(loader = template_loader, autoescape = True)


# page making handler
class Handler(webapp2.RequestHandler):
    """contains the basic methods for rendering the templates into html pages"""
    def write(self, *arguments, **key_word_dictionary):
        """makes a html page out of the inputs"""
        self.response.out.write(*arguments, **key_word_dictionary)

    def render_str(self, template, **parameters):
    # why here paramenters, and in the other cases i call it key_word_dicitionary
        """makes a string out of the inputs"""
        t = template_env.get_template(template)
        return t.render(parameters)

    def render(self, template, **key_word_dictionary):
        """takes template to fill it in with the keywords"""
        self.write(self.render_str(template, **key_word_dictionary))

class Suggestion(ndb.Model):
    """object made of user inputs for stage 4 """
    name = ndb.StringProperty()
    suggestion_text = ndb.StringProperty()
    approved = ndb.StringProperty()
    date = ndb.DateTimeProperty(auto_now_add=True)

#page making!!
class HomePage(Handler):
    def get(self):
        """make homepage page up"""
        query = Suggestion.query().order(Suggestion.date)
        suggestions = query.fetch()

        suggestion_list = []
        for s in suggestions:
            if s.approved:
                suggestion_list.append(s.suggestion_text)
        error = self.request.get('error')

        template_values = {
              "suggestion" : choose_suggestion(suggestion_list),
              "error": error
        }

        self.render("zzjj.html", **template_values)


    def post(self):
        """take suggestions"""

        name = self.request.get('name')
        suggestion_text = self.request.get('suggestion')

        if suggestion_text and suggestion_text.isspace() == False:
            suggestion = Suggestion(name=name, suggestion_text=suggestion_text)
            suggestion.put()
            self.redirect("/#dodaj-svoje")
        else:
            self.redirect("/?error=!#dodaj-svoje")


#helper funtions
suggestions = ["Sprehod v naravi", "Obisk psihijatra", "Caj s prijateljicami"]
def populate_suggestions(premade_list):
    if not premade_list:
        for l in premade_list:
            suggestion = Suggestion(suggestion_text=l, approved="YES")
            suggestion.put()

populate_suggestions(suggestions)


def choose_suggestion(suggestion_list):
    """takes a suggestion"""
    if suggestion_list:
        idea_num = random.randint(0,len(suggestion_list))
        return suggestion_list[idea_num-1]

#creation of pages
app = webapp2.WSGIApplication([("/", HomePage),],
                              debug = True)

