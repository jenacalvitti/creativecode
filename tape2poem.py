from google.colab import files
uploaded = files.upload()
for fn in uploaded.keys():
  text = uploaded[fn].decode()

print(text)

from textblob import TextBlob
import nltk
nltk.download('punkt')

np=TextBlob(text).sentences

def sentenceLength(sent):
    return len(sent.split())

sp = sorted(np, key=sentenceLength)

print(sp)

sentenceArray = []

for sentence in sp:
  if sentenceLength(sentence) == 5:
    print(sentence)
    sentenceArray.append(sentence)

arrayLength = len(sentenceArray)
  

print(sentenceArray[6])
print(sentenceArray[5])
print(sentenceArray[9])
print(sentenceArray[2])
print(sentenceArray[4])
print(sentenceArray[7])
print(sentenceArray[8])
print(sentenceArray[3])
print(sentenceArray[0])
print(sentenceArray[1])
