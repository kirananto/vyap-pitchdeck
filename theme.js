import theme from 'mdx-deck/themes'

export default {
  ...theme,
  font: '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol',
  colors: {
    text: '#111827',
    background: '#fff',
    primary: '#4F46E5',
  },
  css: {
    fontSize: '12px',
    textAlign: 'center',
    '@media screen and (min-width:64em)': {
      fontSize: '22px'
    }
  },
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md

}
