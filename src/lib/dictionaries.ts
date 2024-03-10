import 'server-only'
import type { Locale } from '../../i18n.config' 
import { i18n } from '../../i18n.config'

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  it: () => import('../dictionaries/it.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: Locale) => dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]()