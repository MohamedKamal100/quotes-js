var quotesArr = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },
  {
    author: "― Dr. Seuss",
    quote:
      "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
  },
  {
    author: "― Mae West",
    quote: "“You only live once, but if you do it right, once is enough.”",
  },
  {
    author: "― Robert Frost",
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
  },
  {
    author: "Wayne Gretzy",
    quote: "You miss 100% of the shots you don't take.",
  },
  {
    author: "― Mark Twain",
    quote: "“If you tell the truth, you don't have to remember anything.”",
  },
];

function quotes() {
  var random = Number.parseInt(Math.random() * quotesArr.length + 1);
  document.getElementById(
    "quoteContent"
  ).textContent = `"${quotesArr[random].quote}"`;
  document.getElementById(
    "quoteAuthor"
  ).textContent = `"${quotesArr[random].author}"`;
}
