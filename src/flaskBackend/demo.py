from googletrans import Translator
translator=Translator()
test='hello'
translation=translator.translate(test, 'hi')

print(translation)