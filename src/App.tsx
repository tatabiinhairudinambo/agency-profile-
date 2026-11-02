// The page as it ships: every word, price, case study and leaf comes from the
// component's own defaults. Pass props to make it yours — see README.md.
import OverstoryStudioLanding from "./OverstoryStudioLanding"
import { PricingBasic } from "@/components/ui/demo"
import { Iphone } from "./components/ui/iphone"
import { Android } from "./components/ui/android"
import { TaniAppScreen } from "./components/TaniAppScreen"
import { TaniProductsScreen } from "./components/TaniProductsScreen"

export default function App() {
  return (
    <OverstoryStudioLanding
      brand="Overstory"
      links={[
        { label: "Services", href: "#services" },
        { label: "App", href: "#app" },
        { label: "Process", href: "#process" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
        { label: "Fitur Unggulan", href: "#features" },
        {
          label: "Lainnya",
          href: "#features",
          items: [
            { label: "Produk Kami", href: "#products" },
            { label: "Work", href: "#work" },
            { label: "Galeri", href: "#gallery" },
            { label: "Artikel", href: "#articles" },
            { label: "Panduan", href: "#guide" },
          ],
        },
      ]}
      hero={{
        lead: "Smart Farming for",
        words: ["Greener", "Healthier", "Better"],
        tail: "Futures.",
        trusted: "Growing together with farming communities",
      }}
      logos={[
        { name: "Farmers", mark: "leaf", type: "heavy" },
        { name: "Growers", mark: "leaf", type: "heavy" },
        { name: "Cooperatives", mark: "leaf", type: "serif" },
        { name: "Communities", mark: "leaf", type: "sans" },
        { name: "AgriTech", mark: "leaf", type: "sans" },
      ]}
      pricingContent={<PricingBasic />}
      faq={{
        kicker: "Why Tani Pintar",
        title: "Smarter choices for your farm’s future.",
        text: "Discover how thoughtful planning, practical knowledge, and smarter tools can support your farm. Have another question? Let’s talk about what you grow.",
        contactLabel: "Talk to Tani Pintar",
        items: [
          { q: "Why choose Tani Pintar?", a: "Tani Pintar brings crop planning, soil care, water management, and farming knowledge into one practical approach. The aim is to help you make informed decisions for your land while respecting local experience and the way you already farm." },
          { q: "How can smart farming help my farm?", a: "Keeping track of field conditions, weather, and daily activities can help you spot problems earlier and plan your next steps. Smart farming supports more thoughtful use of water, nutrients, and time, with decisions guided by your crops’ actual needs." },
          { q: "Is Tani Pintar suitable for small farms?", a: "Smart farming can start on any scale. A small vegetable plot, a family farm, or a cooperative can begin with simple crop records and seasonal planning, then explore additional tools as their needs grow." },
          { q: "Do I need expensive equipment or technical skills?", a: "You can begin with practical habits: recording planting dates, observing soil moisture, and checking weather forecasts. Sensors and automation can be considered later, based on your goals and budget. Technology should support your work, not make it more complicated." },
          { q: "Can Tani Pintar help me care for crops more responsibly?", a: "Our approach starts with understanding the crop, the soil, and the cause of a problem. It combines preventive care, balanced nutrition, and informed crop-protection choices, with attention to the specific conditions of your farm." },
          { q: "How do I get started with Tani Pintar?", a: "Start by sharing what you grow, where you farm, and the challenges you want to address. These details provide a starting point for discussing practical priorities, whether that means planting schedules, irrigation, soil health, or harvest planning." },
        ],
      }}
      work={{
        kicker: "From our fields",
        title: "Healthy crops. Thoughtful care. A greener future.",
        next: "Let’s grow your farm, together.",
        nextCta: "Talk to Tani Pintar",
        items: [
          { client: "Field Crops", mark: "leaf", kind: "Crop cultivation", year: "", title: "Nurturing productive fields, from the first seed to harvest.", metric: "Grow", metricLabel: "with the seasons", image: "/images/farming/smart-irrigation.jpg", imageAlt: "Rows of crops growing across agricultural fields" },
          { client: "Fresh Vegetables", mark: "leaf", kind: "Horticulture", year: "", title: "Fresh, nourishing vegetables start with healthy soil and daily care.", metric: "Nurture", metricLabel: "every growing stage", image: "/images/farming/soil-health.jpg", imageAlt: "Vegetables and edible plants growing in a garden" },
          { client: "Crop Protection", mark: "leaf", kind: "Plant health & crop care", year: "", title: "Understanding crop protection and the products used to care for farmland.", metric: "Protect", metricLabel: "with informed choices", image: "/images/farming/crop-protection.jpg", imageAlt: "Agricultural worker handling a crop-protection product beside farm equipment" },
          { client: "Seeds & Seedlings", mark: "leaf", kind: "Planting & cultivation", year: "", title: "Give every plant a strong beginning and room to thrive.", metric: "Thrive", metricLabel: "from the roots up", image: "/images/farming/farmer-support.jpg", imageAlt: "Young plants and growing materials prepared for cultivation" },
        ],
      }}
      services={{
        kicker: "What we grow",
        title: "Smarter farming. Healthier land. Better harvests.",
        text: "From preparing the soil to planning the harvest, Tani Pintar brings practical knowledge and smart tools to every stage of farm life. Grow with confidence, care for your land, and build a more sustainable future.",
        items: [
          { title: "Smart Crop Management", time: "From seed to harvest", text: "Plan what to plant, follow crop growth, and keep daily field activities organized. Make informed decisions that suit your land, your crops, and the changing seasons.", tags: ["Crop planning", "Field monitoring", "Seasonal insights", "Farm records"], image: "/images/farming/crop-management.jpg", imageAlt: "Green agricultural fields across the countryside" },
          { title: "Water & Irrigation", time: "Every drop matters", text: "Understand your crops' water needs and plan irrigation around soil conditions and the weather. Use water thoughtfully while keeping your fields healthy throughout the growing season.", tags: ["Water management", "Irrigation planning", "Soil moisture", "Weather awareness"], image: "/images/farming/smart-irrigation.jpg", imageAlt: "Cultivated farmland with rows of growing crops" },
          { title: "Soil Health & Nutrition", time: "Healthy roots first", text: "Build a stronger foundation for every harvest. Learn about soil fertility, composting, and balanced crop nutrition to care for the land that supports your farm.", tags: ["Soil care", "Organic compost", "Crop nutrition", "Regenerative practices"], image: "/images/farming/soil-health.jpg", imageAlt: "Fresh produce growing in a vegetable garden" },
          { title: "Harvest & Market Planning", time: "From farm to market", text: "Prepare for harvest with a clear plan for timing, handling, and distribution. Explore market opportunities and keep your produce fresh on its journey from the field to the community.", tags: ["Harvest scheduling", "Post-harvest care", "Market insights", "Local distribution"], image: "/images/farming/harvest-planning.jpg", imageAlt: "Open farm fields in a rural landscape" },
          { title: "Farmer Learning & Support", time: "Growing together", text: "Grow your knowledge alongside a community that understands rural life. Discover practical farming guidance, share local experience, and explore new ways to care for your crops and land.", tags: ["Practical guidance", "Farmer community", "Shared knowledge", "Sustainable farming"], image: "/images/farming/farmer-support.jpg", imageAlt: "Plants and gardening materials for hands-on growing" },
        ],
      }}
      app={{
        kicker: "The app",
        number: "03",
        title: "Tani Pintar, in your pocket.",
        text: "Plan planting, check soil moisture, and record harvests from the field. The same practical knowledge, now in one simple app.",
        points: [
          "Field records and crop calendar in one place",
          "Irrigation and weather reminders for every plot",
          "Harvest notes and market prices, ready when you are",
        ],
        cta: { label: "Join the app waitlist", href: "#contact" },
        note: "iOS & Android · coming soon",
        chip: "Live field data",
        proof: "Built with farmers in Yogyakarta",
        visual: (
          <div className="ovs-app-phones">
            <div className="ovs-app-phone ovs-app-phone-ios">
              <Iphone>
                <TaniAppScreen />
                <span className="ovs-app-glare" aria-hidden="true" />
              </Iphone>
            </div>
            <div className="ovs-app-phone ovs-app-phone-android">
              <Android>
                <TaniProductsScreen />
              </Android>
            </div>
          </div>
        ),
      }}
      manifesto={{
        kicker: "Rural roots, greener futures",
        text: "Zona Hijau embraces the beauty of rural life, where rice fields, trees, and local communities thrive side by side. We believe thriving villages begin with caring for nature, preserving local wisdom, and nurturing healthy places to live for generations to come.",
      }}
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
