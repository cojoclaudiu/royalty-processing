import { globalStyle } from '@vanilla-extract/css'

/*
 * modern-normalize v3.0.1
 * https://github.com/sindresorhus/modern-normalize
 */

/* Use a better box model */
globalStyle('*, ::before, ::after', {
  boxSizing: 'border-box',
})

/* HTML defaults */
globalStyle('html', {
  fontFamily:
    "system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
  lineHeight: 1.15,
  WebkitTextSizeAdjust: '100%',
  tabSize: 4,
})

/* Remove default body margin */
globalStyle('body', {
  margin: 0,
})

/* Strong / bold */
globalStyle('b, strong', {
  fontWeight: 'bolder',
})

/* Monospace elements */
globalStyle('code, kbd, samp, pre', {
  fontFamily:
    "ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace",
  fontSize: '1em',
})

/* Small text */
globalStyle('small', {
  fontSize: '80%',
})

/* Sub / Sup */
globalStyle('sub, sup', {
  fontSize: '75%',
  lineHeight: 0,
  position: 'relative',
  verticalAlign: 'baseline',
})

globalStyle('sub', {
  bottom: '-0.25em',
})

globalStyle('sup', {
  top: '-0.5em',
})

/* Tables */
globalStyle('table', {
  borderColor: 'currentcolor',
})

/* Form elements */
globalStyle('button, input, optgroup, select, textarea', {
  fontFamily: 'inherit',
  fontSize: '100%',
  lineHeight: 1.15,
  margin: 0,
})

/* Buttons */
globalStyle("button, [type='button'], [type='reset'], [type='submit']", {
  WebkitAppearance: 'button',
})

/* Legend */
globalStyle('legend', {
  padding: 0,
})

/* Progress */
globalStyle('progress', {
  verticalAlign: 'baseline',
})

/* Number inputs */
globalStyle('::-webkit-inner-spin-button, ::-webkit-outer-spin-button', {
  height: 'auto',
})

/* Search inputs */
globalStyle("[type='search']", {
  WebkitAppearance: 'textfield',
  outlineOffset: '-2px',
})

globalStyle('::-webkit-search-decoration', {
  WebkitAppearance: 'none',
})

/* File upload */
globalStyle('::-webkit-file-upload-button', {
  WebkitAppearance: 'button',
  font: 'inherit',
})

/* Summary */
globalStyle('summary', {
  display: 'list-item',
})
