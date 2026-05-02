import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      <main className="pt-24">{children}</main>
      <Footer />
    </div>
  )
}
