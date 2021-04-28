const container = document.getElementById('container');
const next = document.getElementById('next');
const text = document.getElementById('text');
const date = document.getElementById('date');
const loader = document.getElementById('loader');
const twitter = document.getElementById('twitter');

const loading = () => {
  loader.classList.remove('hidden');
  container.classList.add('hidden');
};

const complete = () => {
  loader.classList.add('hidden');
  container.classList.remove('hidden');
};

const tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${text.textContent}%0D%0A- Tronald Dump`;
  window.open(twitterUrl, '_blank');
};

const getQuote = async () => {
  try {
    loading();
    let apiQuote = await fetch('https://api.tronalddump.io/random/quote');

    if (!apiQuote.ok)
      throw new Error('No quote could be fetched at this moment');

    let finalQuote = await apiQuote.json();

    let linkRegex = /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi;

    let quoteText = finalQuote.value;
    quoteText = quoteText.replace(linkRegex, '');
    text.textContent = quoteText;

    let dateText = finalQuote.appeared_at.slice(0, 10);
    date.textContent = dateText;

    complete();
  } catch (err) {
    alert(err);
  }
};

next.addEventListener('click', getQuote);
twitter.addEventListener('click', tweetQuote);
getQuote();
