const company = {
  name: 'Велика Компанія',
  type: 'Головна компанія',
  platform: 'Платформа для продажу квитків',
  sellsSolution: 'Рішення для продажу квитків',
  clients: [
    {
      name: 'Клієнт 1',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків',
      partners: [
        {
          name: 'Клієнт 1.1',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
        },
        {
          name: 'Клієнт 1.2',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
          partners: [
            {
              name: 'Клієнт 1.2.3',
              type: 'subSubCompany',
              uses: 'Рішення для продажу квитків',
              sells: 'Рішення для продажу квитків',
            },
          ],
        },
      ],
    },
    {
      name: 'Клієнт 2',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків',
    },
  ],
};

function findValueByKey(companyName, companyNode) {
  if (companyNode.name === companyName) {
    console.log("Знайдено компанію:", companyNode);
    return companyNode;
  }

  if (companyNode.clients) {
    for (const client of companyNode.clients) {
      const result = findValueByKey(companyName, client);
      if (result) {
        return result;
      }
    }
  }

  return null;
}

const companyNameToFind = 'Клієнт 1.2.3';
const foundCompany = findValueByKey(companyNameToFind, company);

if (!foundCompany) {
  console.log(`Компанію з назвою ${companyNameToFind} не знайдено`);
}
