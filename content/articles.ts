/**
 * Опубликованные статьи сайта.
 * Добавьте объект в массив — статья сразу появится в блоке «Статьи».
 * Чтобы убрать статью — удалите объект из массива.
 */
export type PublishedArticle = {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  /** Время чтения, например "5" */
  readTime: string;
  /** Дата в формате ДД.ММ.ГГГГ */
  date: string;
  /** Полный текст. Абзацы разделяйте пустой строкой. */
  body: string;
};

export const publishedArticles: PublishedArticle[] = [
  // Пример:
  // {
  //   id: 1,
  //   category: 'Автоматизация',
  //   title: 'Заголовок статьи',
  //   excerpt: 'Короткое описание для карточки.',
  //   readTime: '5',
  //   date: '08.10.2026',
  //   body: `Первый абзац.
  //
  // Второй абзац.`,
  // },
];
