export type Locale =
  | 'ru'
  | 'en'
  | 'zh'
  | 'fr'
  | 'it'
  | 'uz'
  | 'ky'
  | 'kk'
  | 'ar'
  | 'es'
  | 'de'
  | 'pt'
  | 'tr';

type WidenMessages<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends readonly (infer Item)[]
      ? WidenMessages<Item>[]
      : T extends object
        ? { readonly [Key in keyof T]: WidenMessages<T[Key]> }
        : T;

export type Messages = WidenMessages<typeof import('./locales/ru').default>;
