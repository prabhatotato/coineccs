import PageHolder from "../components/PageHolder"
import CryptoChart from "../components/CryptoChart"
function CoinPage() {
  return (
    <div className="h-full w-screen bg-slate-200/40">
        <PageHolder/>
        <div className="w-screen lg:flex">
        <div className="lg:w-8/12 lg:ml-14 mx-4">
            <CryptoChart/>
             
        </div>
        
        
      </div>
        

      
        
    </div>
  )
}

export default CoinPage
