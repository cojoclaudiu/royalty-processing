import { globalStyle } from '@vanilla-extract/css'
import './lib/modern-normalize.css'

globalStyle('body', {
  position: 'relative',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  height: '100dvh',
})

globalStyle('.root', {
  isolation: 'isolate',
})
