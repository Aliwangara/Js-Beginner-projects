const generateQuote = document.getElementById('generate-quote');
const quoteTag = document.getElementById('quote')


const quotes = [
  "Believe you can and you're halfway there.",
  "Do one thing every day that scares you.",
  "Dream big and dare to fail.",
  "The only way to do great work is to love what you do.",
  "You miss 100% of the shots you don’t take.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Start where you are. Use what you have. Do what you can.",
  "You are never too old to set another goal or to dream a new dream.",
  "Stay hungry. Stay foolish.",
  "Action is the foundational key to all success.",
  "It always seems impossible until it’s done.",
  "Don’t limit your challenges, challenge your limits.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "If it doesn’t challenge you, it won’t change you.",
  "Be so good they can’t ignore you.",
  "Success doesn’t come to you, you go to it.",
  "Small steps every day.",
  "You don’t have to be perfect to start, but you have to start to be perfect.",
  "Discipline is choosing between what you want now and what you want most.",
  "Doubt kills more dreams than failure ever will.",
  "A river cuts through rock not because of its power, but because of its persistence.",
  "Your only limit is your mind.",
  "Hustle in silence and let your success make the noise.",
  "Make it happen. Shock everyone.",
  "Progress, not perfection.",
  "Consistency is more important than intensity.",
  "Nothing will work unless you do.",
  "Don't quit. Suffer now and live the rest of your life as a champion.",
  "The man who moves a mountain begins by carrying away small stones.",
  "It's never too late to be what you might have been.",
  "Fall seven times, stand up eight.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "The secret of getting ahead is getting started.",
  "Opportunities don't happen. You create them.",
  "The only place where success comes before work is in the dictionary.",
  "Work hard in silence. Let success be your noise.",
  "Wake up with determination, go to bed with satisfaction.",
  "What you do today can improve all your tomorrows.",
  "A goal without a plan is just a wish.",
  "Do what you can with all you have, wherever you are.",
  "If you get tired, learn to rest, not to quit.",
  "Winners are not afraid of losing. But losers are.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Don't count the days, make the days count.",
  "Difficult roads often lead to beautiful destinations.",
  "If opportunity doesn’t knock, build a door."
];
const usedIndexes = new Set()

generateQuote.addEventListener('click', function(){

    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }

    while(true){
        const randomIdx = Math.floor((Math.random() * quotes.length)) 
        if(usedIndexes.has(randomIdx)) continue

        const newQuotes= quotes[randomIdx]

        quoteTag.textContent = newQuotes;

        usedIndexes.add(randomIdx)
        break



    }

   



})