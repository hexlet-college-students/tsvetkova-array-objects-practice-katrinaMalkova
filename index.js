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

const getIndiaRaiting = (str) => parseInt(str.split(';').at(6), 10);

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

const findMaxAndMinIndiaRaiting = (data) => {
  const downloads = data.map((str) => getIndiaRaiting(str));
  return [Math.max(...downloads), Math.min(...downloads)];
}; // выясняет минимум и максимум скачиваний

// task 1.3
function topThreeAust(data) {
  const appsData = data.map((str) => {
    const appInfo = str.split(';');
    const name = appInfo.at(0);
    const DownlInAustralia = parseInt(str.split(';').at(5), 10);
    return { name, DownlInAustralia };
  });
  // преобразует каждую строку данных в объект с именем приложения
  // и количеством загрузок в Австралии

  const compare = (a, b) => {
    if (a.DownlInAustralia > b.DownlInAustralia) {
      return -1;
    } if (a.DownlInAustralia === b.DownlInAustralia) {
      return 0;
    }
    return 1;
  };
  // пределяет функцию сравнения compare,
  // которая используется для сортировки объектов в массиве appsData

  const name1 = appsData.sort(compare);
  const getThirstThree = name1.slice(0, 3);
  const appNames = getThirstThree.map((app) => app.name).sort().join(', ');
  return `Top-3 Australia: ${appNames}`;
  // использует функцию sort с функцией сравнения compare
  // для сортировки массива appsData по убыванию количества загрузок в Австралии
}

// task 1.4
// нужно рассчитать среднее количество скачиваний для каждого приложения и
// отсортировать их в порядке возрастания
const Top3Down = (Data) => {
  const calculateAverageDownloads = (downloads) => {
    const totalDownloads = downloads.reduce((acc, curr) => acc + parseInt(curr, 10), 0);
    return totalDownloads / downloads.length;
  };
  // функция, которая принимает массив скачиваний и вычисляет среднее значение скачиваний
  const apps = Data.map((appData) => {
    const [name, , , , ...downloads] = appData.split(';');
    const averageDownloads = calculateAverageDownloads(downloads);
    return { name, averageDownloads };
  }).sort((a, b) => a.averageDownloads - b.averageDownloads);
  const appNames = apps.map((app) => app.name).join(', ');
  return appNames;
}; // приобразовываем каждый элемент массива Data в объект с именем
// приложения и средним количеством скачиваний,
// Сортирует полученный массив объектов по убыванию среднего количества скачиваний.
// Возвращаем строку

// task 1.5
const findTwoPlusApps = (data) => {
  const companies = data.reduce((acc, app) => {
    const company = app.split(';')[1];
    if (acc[company]) {
      acc[company] += 1;
    } else {
      acc[company] = 1;
    }
    return acc;
  }, {});
  // метод reduce для создания объекта companies, где ключом является имя разработчика,
  // а значением - количество приложений этого разработчика в массиве data.
  // Если приложение от данного разработчика встречается впервые, значение увеличивается на единицу,
  // иначе - суммируется
  const result = Object.entries(companies)
    .filter(([, counter]) => counter >= 2)
    .map(([company]) => company);
  // Использует метод filter для выбора тех пар ключ-значение
  // из объекта companies, где значение больше или равно двум.
  // метод map для создания нового массива,
  // содержащего имена разработчиков, которые имеют два и более приложения
  return result.join(', ');
}; // Возвращает строку, полученную путем объединения имен разработчиков через запятую и пробел.

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
  console.log(topThreeAust(data));
  // 1.4
  const worsttotop = Top3Down(data);
  console.log(`Top downloads: ${worsttotop}`);
  // 1.5
  const CompaniesWithTwoPlusleApps = findTwoPlusApps(data);
  console.log(`Top owner: ${CompaniesWithTwoPlusleApps}`);
};
// task 2
const candidateAssessment = (/* content */) => {

};

// task 3
const actorRating = (/* content */) => {

};

export { tableParsing, candidateAssessment, actorRating };
