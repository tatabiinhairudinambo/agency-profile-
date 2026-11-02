// The page as it ships: every word, price, case study and leaf comes from the
// component's own defaults. Pass props to make it yours — see README.md.
import OverstoryStudioLanding from "./OverstoryStudioLanding"

export default function App() {
  return (
    <OverstoryStudioLanding
      brand="Overstory"
      email="hello@overstory.studio"
      onBook={(from) => {
        // Wire this to Cal.com, Calendly, a modal, a route — anything.
        console.log("[overstory] book a call from:", from)
      }}
      onSubscribe={(email) => {
        // Return false (or throw) to show the newsletter error state.
        console.log("[overstory] subscribe:", email)
      }}
    />
  )
}
