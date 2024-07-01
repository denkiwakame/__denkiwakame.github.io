import katex from 'katex'

function render(expression: string, displayMode: boolean): string {
  const result: string = katex.renderToString(expression, {
    throwOnError: false,
    displayMode: displayMode,
  })
  return result
}

const Equation = ({ children, displayMode = true }) => {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: render(children, displayMode),
      }}
    />
  )
}

export default Equation
