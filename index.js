// task 1
const normalizeData = (content) => {
  const [, ...data] = content.trim().split('\n');
  return data;
}; // функция принимает строку, удаляет лишние пробелы,
// разбивает её по строкам и возвращает массив этих строк, исключая первую.

const getNameCompany = (str) => str.split(';').at(0);
const getDevOfCompany = (str) => str.split(';').at(1);
const getPlayMarketRating = (str) => parseFloat(str.split(';').at(2), 10);
const getAppStoreRating = (str) => parseFloat(str.split(';').at(3), 10);
// предназначено для разделения строки на части с помощью ';' и извлечения нужной информации

const averageRating = (str) => (getAppStoreRating(str) + getPlayMarketRating(str)) / 2;
// вычисляет среднее значение рейтингов приложения из Play Market и App Store

const getListOfRating = (data) => {
  const listOfrating = data.map((str) => averageRating(str));
  return listOfrating;
};
// принимает массив данных data, преобразует каждый элемент массива
// с помощью функции averageRating и возвращает новый массив со средними оценками

const getMaxAvRating = (data) => {
  const list = getListOfRating(data);
  const getMaxIndex = list.indexOf(Math.max(...list));
  const name = getNameCompany(data[getMaxIndex]);
  const developer = getDevOfCompany(data[getMaxIndex]);
  return [name, developer];
};
// принимает массив данных data, находит максимальное среднее
// значение рейтинга с помощью функции getListOfRating, затем определяет
// название компании и разработчика, которые соответствуют этому рейтингу, и возвращает эти данные

// task1
const tableParsing = (content) => {
  const data = normalizeData(content);
  const [name, developer] = getMaxAvRating(data);
  console.log(`General top messenger: ${name}, Owner: ${developer}`);
};

// task 2
const candidateAssessment = (/* content */) => {

};

// task 3
const actorRating = (/* content */) => {

};

export { tableParsing, candidateAssessment, actorRating };
