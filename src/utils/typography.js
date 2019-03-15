import Typography from 'typography'
import theme from 'typography-theme-bootstrap'

theme.overrideThemeStyles = ({ rhythm, scale }, options) => {
  return {
    'h1, h2, h3': {
      ...scale(1 / 6),
      fontWeight: `normal`,
      color: `#999`,
      lineHeight: `1.2`
    },
    'code, kbd, pre, samp': {
      fontFamily: `Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
    },
    code: {
      fontSize: `90%`
    },
    'h1 code, h2 code': {
      color: `#112`,
      fontWeight: `bold`
    },
    'p > code': {
      background: `#fcf1e8`,
      color: `#452108`,
      padding: `.1rem .3rem`
    },
    a: {
      color: `inherit`,
      textDecoration: `none`,
      // transition: `background 0.2s ease-out`,
      // textShadow: `0.03em 0 #fff, -0.03em 0 #fff, 0 0.03em #fff, 0 -0.03em #fff, 0.06em 0 #fff, -0.06em 0 #fff, 0.09em 0 #fff, -0.09em 0 #fff, 0.12em 0 #fff, -0.12em 0 #fff, 0.15em 0 #fff, -0.15em 0 #fff`
    },
    'a:hover': {
      // background: `#cdecf9`,
      // textShadow: `none`
    },
    'a > code': {
      fontWeight: `bold`
    },
    img: {
      borderRadius: `2px`,
      margin: `0`
    },
  }
}

const typography = new Typography(theme)

// Back out the below once Typography is upgraded for es6
export default typography

export const rhythm = typography.rhythm
export const scale = typography.scale
export const options = typography.options
