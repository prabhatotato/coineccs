import PageHolder from "../components/PageHolder"
import CryptoChart from "../components/CryptoChart"
import Toggle from "../components/Toggle"
import Performance from "../components/Performance"
import Sentiment from "../components/Sentiment"
import About from "../components/About"
import Tokenomics from "../components/Tokenomics"
import Team from "../components/Team"
import CradsPromo from "../components/CardsPromo"
import TrendingCoins from "../components/TrendingCoins"
import SuggestionSection from "../components/SuggestionSection"

function CoinPage() {
  return (
    <div className="h-full w-screen bg-slate-200/40">
        <PageHolder/>
        <div className="w-screen lg:flex">
        <div className="lg:w-8/12 lg:ml-14 mx-4">
            <CryptoChart/>
            <Toggle/>
            <Performance/>
            <Sentiment/>
            <About/>
            <Tokenomics/>
            <Team/>     
        </div>

        <div className="lg:w-4/12 lg:mr-14 mx-4">
          <CradsPromo/>
          <TrendingCoins/>
        </div>

        
      </div>
        
      <SuggestionSection/>
      
        
    </div>
  )
}

export default CoinPage
