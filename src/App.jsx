import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import RightBar from "./components/RightBar"
import SideBar from "./components/SideBar"

function App() {


  return (
    <  >
      <Header />
      <div className="flex h-auto">
        <SideBar />
        <div className="flex-1 bg-white mr-3  md:mr-7">
          <Dashboard />
        </div>
        <div className="mt-3">
          <RightBar />
        </div>
      </div>

    </>
  )
}

export default App
