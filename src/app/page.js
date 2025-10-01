import ContentContainer from "@/components/ContentContainer"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <ContentContainer>
          <div className="mt-2 flex min-h-screen rounded-lg bg-blue-300 p-6 shadow-md">
            <div className="flex w-full items-center justify-center">
              Main Content
            </div>
          </div>
        </ContentContainer>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
