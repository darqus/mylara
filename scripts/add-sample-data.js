/**
 * Скрипт для добавления тестовых данных в Firebase
 * Запустите в консоли браузера на странице админки
 */

// Функция для добавления тестовых продуктов
async function addSampleProducts() {
  const products = [
    {
      name: 'Крем для лица увлажняющий',
      description: 'Интенсивно увлажняющий крем для всех типов кожи',
      price: 1500,
      category: 'Уход за лицом',
      available: true,
      imageUrl: 'https://example.com/cream.jpg',
    },
    {
      name: 'Сыворотка с витамином C',
      description: 'Антиоксидантная сыворотка для сияния кожи',
      price: 2200,
      category: 'Сыворотки',
      available: true,
      imageUrl: 'https://example.com/serum.jpg',
    },
    {
      name: 'Очищающая пенка',
      description: 'Мягкая пенка для ежедневного очищения',
      price: 800,
      category: 'Очищение',
      available: false,
      imageUrl: 'https://example.com/cleanser.jpg',
    },
  ]

  for (const product of products) {
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })

      if (response.ok) {
        console.log(`Продукт "${product.name}" добавлен`)
      }
    } catch (error) {
      console.error(`Ошибка при добавлении продукта "${product.name}":`, error)
    }
  }
}

// Функция для добавления тестовых статей
async function addSampleArticles() {
  const articles = [
    {
      title: 'Как правильно ухаживать за кожей зимой',
      content:
        'Зимний уход за кожей имеет свои особенности. В холодное время года кожа особенно нуждается в дополнительном увлажнении и защите.',
      author: 'Анна Козлова',
      published: true,
      publishDate: new Date().toISOString().split('T')[0],
      tags: 'уход, зима, увлажнение',
    },
    {
      title: 'Топ-5 ингредиентов для антивозрастного ухода',
      content:
        'Ретинол, витамин C, гиалуроновая кислота, пептиды и антиоксиданты - основные компоненты эффективной антивозрастной косметики.',
      author: 'Мария Петрова',
      published: false,
      publishDate: new Date().toISOString().split('T')[0],
      tags: 'антивозрастной уход, ингредиенты, косметология',
    },
  ]

  for (const article of articles) {
    console.log(`Статья "${article.title}" готова к добавлению`)

    // В реальном проекте здесь был бы запрос к API
  }
}

// Функция для добавления тестовых пользователей
async function addSampleUsers() {
  const users = [
    {
      email: 'user1@example.com',
      name: 'Елена Иванова',
      phone: '+7 (999) 123-45-67',
      role: 'user',
      active: true,
    },
    {
      email: 'admin@example.com',
      name: 'Администратор',
      phone: '+7 (999) 000-00-00',
      role: 'admin',
      active: true,
    },
    {
      email: 'moderator@example.com',
      name: 'Модератор',
      phone: '+7 (999) 111-11-11',
      role: 'moderator',
      active: true,
    },
  ]

  for (const user of users) {
    console.log(`Пользователь "${user.name}" готов к добавлению`)

    // В реальном проекте здесь был бы запрос к API
  }
}

// Экспортируем функции для использования в консоли
window.addSampleData = {
  products: addSampleProducts,
  articles: addSampleArticles,
  users: addSampleUsers,
}

console.log('Функции для добавления тестовых данных загружены!')
console.log('Используйте:')
console.log('- window.addSampleData.products() для добавления продуктов')
console.log('- window.addSampleData.articles() для добавления статей')
console.log('- window.addSampleData.users() для добавления пользователей')
