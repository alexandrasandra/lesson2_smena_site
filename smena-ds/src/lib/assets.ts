export interface PartnerAsset {
  full: string
  small: string
  name: string
}

export type PartnerKey = 'auchan' | 'magnit' | 'lenta' | 'spar' | 'azbuka_vkusa'

export const PARTNERS = {
  auchan: {
    full:  '/assets/partners/auchan_logo_full.jpg',
    small: '/assets/partners/auchan_logo_small.jpeg',
    name:  'Auchan',
  },
  magnit: {
    full:  '/assets/partners/magnit_logo_full.png',
    small: '/assets/partners/magnit_logo_small.jpg',
    name:  'Магнит',
  },
  lenta: {
    full:  '/assets/partners/lenta_logo_full.png',
    small: '/assets/partners/lenta_logo_small.jpg',
    name:  'Лента',
  },
  spar: {
    full:  '/assets/partners/spar_logo_full.png',
    small: '/assets/partners/spar_logo_small.svg',
    name:  'SPAR',
  },
  azbuka_vkusa: {
    full:  '/assets/partners/azbuka_vkusa_logo_full.png',
    small: '/assets/partners/azbuka_vkusa_logo_small.png',
    name:  'Азбука Вкуса',
  },
} as const satisfies Record<PartnerKey, PartnerAsset>

export type ProfessionKey =
  | 'kassir'
  | 'komplectovshik'
  | 'komplektovshik_sklad'
  | 'pecar'
  | 'povar'
  | 'rtz'
  | 'uborshik'
  | 'upakivshik'

export const PROFESSIONS: Record<ProfessionKey, string[]> = {
  kassir: [
    '/assets/professions/kassir_1.png',
    '/assets/professions/kassir_2.png.png',
    '/assets/professions/kassir_3.png',
  ],
  komplectovshik: [
    '/assets/professions/komplectovshik_1.png',
    '/assets/professions/komplectovshik_2.png.png',
    '/assets/professions/komplectovshik_3.png.png',
  ],
  komplektovshik_sklad: [
    '/assets/professions/komplektovshik_sklad_1.png',
    '/assets/professions/komplektovshik_sklad_2.png',
    '/assets/professions/komplektovshik_sklad_3.png',
  ],
  pecar: [
    '/assets/professions/pecar_1.png',
    '/assets/professions/pecar_2.png',
    '/assets/professions/pecar_3.png',
  ],
  povar: [
    '/assets/professions/povar_1.png',
    '/assets/professions/povar_2.png',
    '/assets/professions/povar_3.png',
  ],
  rtz: [
    '/assets/professions/rtz_1.png',
    '/assets/professions/rtz_2.png',
    '/assets/professions/rtz_3.png',
  ],
  uborshik: [
    '/assets/professions/uborshik.jpg',
  ],
  upakivshik: [
    '/assets/professions/upakivshik_1.png',
    '/assets/professions/upakivshik_2.png',
  ],
}

export const PROFESSION_LABELS: Record<ProfessionKey, string> = {
  kassir:               'Кассир',
  komplectovshik:       'Комплектовщик',
  komplektovshik_sklad: 'Комплектовщик склада',
  pecar:                'Пекарь',
  povar:                'Повар',
  rtz:                  'РТЗ',
  uborshik:             'Уборщик',
  upakivshik:           'Упаковщик',
}

export const LOGO_ASSETS = {
  primary: '/assets/logo/Frame 22.png',
  white:   '/assets/logo/Frame 24 (1).png',
  icon:    '/assets/logo/Frame 100 (1).png',
} as const

export const APP_SCREENSHOTS = {
  searchList: '/assets/app-screenshots/Search (list).png',
  searchMap1: '/assets/app-screenshots/Search (map).png',
  searchMap2: '/assets/app-screenshots/Search (map) (1).png',
  vacancy:    '/assets/app-screenshots/Vacancy.png',
} as const

export const QR_CODE = '/assets/qr/Smena_QR.svg'
