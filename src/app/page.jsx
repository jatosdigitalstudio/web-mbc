import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Teams from "@/components/Teams"
import Clients from "@/components/Clients"
export default async function Root() {
  return (
    <div className="container">
      <Hero />
      <About />
      <Services />
      <Teams />
      <Clients/>
    </div>
  )
}
