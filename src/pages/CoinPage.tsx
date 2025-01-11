import PageHolder from "../components/PageHolder"
import CryptoChart from "../components/CryptoChart"
import Toggle from "../components/Toggle"
function CoinPage() {
  return (
    <div className="h-full w-screen bg-slate-200/40">
        <PageHolder/>
        <div className="w-screen lg:flex">
        <div className="lg:w-8/12 lg:ml-14 mx-4">
            <CryptoChart/>
            <Toggle/>
            
             
        </div>
        
        
      </div>
        

      
        
    </div>
  )
}

export default CoinPage
