import Part0 from "./parts/Part0.js"
import Part1 from "./parts/Part1.js"
import Part2 from "./parts/Part2.js"

const Content = ({ parts }) => (
  <>
    <Part0 parts0={parts[0]} />
    <Part1 parts1={parts[1]} />
    <Part2 parts2={parts[2]} />
  </>
)

export default Content
