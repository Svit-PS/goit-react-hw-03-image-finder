const API_KEY = '42437386-75cc59f71a98a974a642ba63e';
const BASE_URL = 'https://pixabay.com/api/';
const searchParams = new URLSearchParams({
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  min_width: 270,
  min_height: 226,
});

function fetchPixabay(seachStr, page = 1, countImg = 12) {
  const arr = String(seachStr).split(' ');
  const str = arr.join('+');
  const str_Param = `?${searchParams.toString()}&q=${str}&page=${page}&per_page=${countImg}`;
  return fetch(`${BASE_URL}${str_Param}`);
}

export default fetchPixabay;
