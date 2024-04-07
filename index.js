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
// task 2.1-2.2
const Normal = (content) => {
  const contentSplit = content.split('\n');
  return contentSplit;
};

const stackcount = (content) => {
  const contentSplit = content.split('\n');
  const stack = ['React', 'Angular', 'Vue.js', 'JQuery', 'Backbone.js', 'Node.js', 'Ember.js', 'Meteor'];
  const lowercontentSplit = contentSplit[5].toLowerCase();
  let res = 0;
  const lowerstack = stack.map((item) => item.toLowerCase());
  for (let i = 0; i < stack.length; i += 1) {
    if (lowercontentSplit.includes(lowerstack[i])) {
      res += 1;
    }
  }
  return res;
};
// код создает массив counts, который содержит количество наград и
// номинаций для каждого элемента в массиве awards. Если элемент начинается с 'Награда',
// то в массиве counts для этого элемента будет 1, если с 'Номинация', то 0

// task 2.3
const getNickName = (socialString, socialNetwork) => {
  const socials = socialString.split(', ');
  for (let i = 0; i < socials.length; i += 1) {
    const parts = socials[i].split(':/');
    const username = parts[parts.length - 1].split('/').pop();
    if (parts[0].includes(socialNetwork)) {
      return username;
    }
  }
  return 'Никнейм не найден';
};

// task 2.4
const calculateExp = (startDate, endDate) => {
  const start = new Date(startDate.split('.').reverse().join('-'));
  const end = new Date(endDate.split('.').reverse().join('-'));

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return `${years} years ${months} months`;
};

// task 2.5
const findEducation = (edStr) => {
  const parts = edStr.split(';');
  let result = '';
  const EdPlaces = parts.map((part) => {
    const trimmedPart = part.trim();
    return trimmedPart.split(',')[0];
  });
  if (EdPlaces[0].toLowerCase().includes('education:')) {
    EdPlaces[0] = EdPlaces[0].replace(/education:/gi, '').trim();
  }
  const sortedEd = EdPlaces.sort();
  result = sortedEd.join(', ');
  return result;
};

// task 2
const candidateAssessment = (content) => {
  const Split = Normal(content);
  // task2.1
  console.log(`Job seeker: ${Split[0]}, ${Split[1]}`);
  // task2.2
  console.log(`Required stack: ${stackcount(content)}`);
  // task2.3
  console.log(`GitHub nickname: ${getNickName(Split.at(4), 'github')}`);
  // task2.4
  console.log(`Experience: ${calculateExp('01.01.2015', '05.06.2022')}`);
  // task2.5
  console.log(`Education: ${findEducation(Split.at(7))}`);
};
// task 3.1
function count(data) {
  let rewcount = 0; // Используем let, так как переменная должна изменяться внутри функции
  let nomcount = 0; // Также используем let, так как переменная должна изменяться внутри функции
  const counter = data.map((first) => {
    if (first.startsWith('Номинация')) {
      nomcount += 1; // Увеличиваем счетчик номинаций
    } else {
      rewcount += 1; // Увеличиваем счетчик наград
    }
    return 1; // Возвращаем значение, которое не используется
  });
  counter.push(1); // Добавляем единицу в массив counter, что также не влияет на результат
  return [rewcount, nomcount]; // Возвращаем массив с количеством наград и номинаций
}

// task 3.2
function getMoviesforYear(actorAwards, year) {
  const moviesForYear = actorAwards.filter((award) => award.includes(year));
  const moviesList = moviesForYear.map((award) => award.split('—')[4].trim());
  const uniqueMovies = [...new Set(moviesList)];
  const sortedMovies = uniqueMovies.sort().join(', ');
  return sortedMovies;
}

// task 3.3
function calculateAwardPerc(data) {
  let awards = 0;
  let nominations = 0;
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].startsWith('Награда')) {
      awards += 1;
    } else if (data[i].startsWith('Номинация')) {
      nominations += 1;
    }
  }
  const totalAwardsAndNominations = awards + nominations;
  const percentageAwards = (awards / totalAwardsAndNominations) * 100;
  return Math.round(percentageAwards);
}

// task 3.4
function mostAwMovie(data) {
  const awards = {};
  const nominations = {};
  for (let i = 0; i < data.length; i += 1) {
    const movie = data[i].split('—')[4].trim();
    if (data[i].startsWith('Награда')) {
      awards[movie] = (awards[movie] || 0) + 1;
    } else if (data[i].startsWith('Номинация')) {
      nominations[movie] = (nominations[movie] || 0) + 1;
    }
  }
  const mostSuccessfulMovie = Object.keys(awards)
    .sort()
    .reduce((mostSuccessful, movie) => {
      if (!mostSuccessful || awards[movie] + (nominations[movie] || 0)
    > awards[mostSuccessful] + (nominations[mostSuccessful] || 0)) {
        return movie;
      }
      return mostSuccessful;
    }, null);

  return mostSuccessfulMovie;
}
// task 3.5
function mostFrequentAndLeastFrequentAwards(data) {
  const awardsCount = {};
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].startsWith('Номинация')) {
      const award = data[i].split('—')[2].trim();
      awardsCount[award] = (awardsCount[award] || 0) + 1;
    }
  }

  const sortedAwards = Object.keys(awardsCount).sort();
  const mostFrequentAward = sortedAwards.reduce((a, b) => {
    if (awardsCount[a] > awardsCount[b]) {
      return a;
    }
    return b;
  });
  const leastFrequentAward = sortedAwards.reduce((a, b) => {
    if (awardsCount[a] < awardsCount[b]) {
      return a;
    }
    return b;
  });

  console.log(`Award's pet: ${mostFrequentAward}`);
  console.log(`Award's outsider: ${leastFrequentAward}`);
}

// task 3
function actorRating(content) {
  const norma = Normal(content);
  const [rewards, nominations] = count(norma);
  // 3.1
  console.log(`Awards: Rewards: ${rewards}, Nominations: ${nominations}`);
  // 3.2
  console.log(`Movies 2003: ${getMoviesforYear(norma, 2003)}`);
  // 3.3
  console.log(`Rewards percent: ${calculateAwardPerc(norma)}%`);
  // 3.4
  console.log(`Most successful movie: ${mostAwMovie(norma)}`);
  // 3.5
  mostFrequentAndLeastFrequentAwards(norma);
}
export { tableParsing, candidateAssessment, actorRating };
