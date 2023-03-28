import { CONFIG } from '@src/const/meta'
import { openExternalLinkClickedElement, scrollToAction, scrollToClickedElement } from '@src/lib/analytics/events'
const {social} = CONFIG

export const mainMenu = [
  { id: 0, title: 'Get protected', url: '#rpc' },
  { id: 1, title: 'FAQ', url: '#faq'},
]

export const footerMenu = [
  { id: 0, title: 'Get protected', url: '#rpc', onClick: scrollToClickedElement },
  { id: 1, title: 'FAQ', url: '#faq', onClick: scrollToClickedElement},
  {id: 2, title: 'Questions & Support', url: social.telegram.url, target: '_blank', onClick: openExternalLinkClickedElement },
]

