// task 1.1
const normalizeData = (content) => {
  const [, ...data] = content.trim().split('\n');
  return data;
};

// Предназначено для разделения строки на части с помощью ';' и извлечения нужной информации
const getNameCompany = (str) => str.split(';').at(0);
const getDevOfCompany = (str) => str.split(';').at(1);
const getPlayMarketRating = (str) => parseFloat(str.split(';').at(2), 10);
const getAppStoreRating = (str) => parseFloat(str.split(';').at(3), 10);

// Вычисляет среднее значение рейтингов приложения из Play Market и App Store
const averageRating = (str) => (getAppStoreRating(str) + getPlayMarketRating(str)) / 2;

// Принимает массив данных data, преобразует каждый элемент массива
// с помощью функции averageRating и возвращает новый массив со средними оценками
const getListOfRating = (data) => data.map(averageRating);

// Принимает массив данных data, находит максимальное среднее значение рейтинга
// с помощью функции getListOfRating, затем определяет название компании и разработчика,
// которые соответствуют этому рейтингу, и возвращает эти данные
const getMaxAvRating = (data) => {
  const maxIndex = getListOfRating(data).indexOf(Math.max(...getListOfRating(data)));
  return [getNameCompany(data[maxIndex]), getDevOfCompany(data[maxIndex])];
};

// task 1.2
const getIndiaRaiting = (str) => parseInt(str.split(';').at(6), 10);

const findMaxAndMinIndiaRaiting = (data) => {
  const downloads = data.map((str) => getIndiaRaiting(str));
  return [Math.max(...downloads), Math.min(...downloads)];
}; // выясняет минимум и максимум скачиваний

// task 1.3
// const getAustraliaRaiting = (str) => parseInt(str.split(';').at(5), 10);

// task 1.4

// task 1.5

// task 1
const tableParsing = (content) => {
  // 1.1
  const data = normalizeData(content);
  const [name, developer] = getMaxAvRating(data);
  console.log(`General top messenger: ${name}, Owner: ${developer}`);
  // 1.2
  const [maxCount, minCount] = findMaxAndMinIndiaRaiting(data);
  console.log(`Download count: Max count: ${maxCount}, Min count: ${minCount}`);
  // 1.3

  // 1.4

  // 1.5
};

// task 2
const candidateAssessment = (/* content */) => {

};

// task 3
const actorRating = (/* content */) => {

};

export { tableParsing, candidateAssessment, actorRating };
