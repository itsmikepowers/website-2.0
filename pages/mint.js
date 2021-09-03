import Head from 'next/head'
import Web3 from "web3";
import { useState, useEffect } from 'react';

import {ADDRESS, ABI} from "../config.js"

export default function Mint() {

  // FOR WALLET
  const [signedIn, setSignedIn] = useState(false)

  const [walletAddress, setWalletAddress] = useState(null)

  // FOR MINTING
  const [how_many_starfish, set_how_many_starfish] = useState(1)

  const [starfishContract, setStarfishContract] = useState(null)

  // INFO FROM SMART Contract

  const [totalSupply, setTotalSupply] = useState(0)

  const [saleStarted, setSaleStarted] = useState(false)

  const [starfishPrice, setStarfishPrice] = useState(0)

  useEffect( async() => { 

    signIn()

  }, [])

  async function signIn() {
    if (typeof window.web3 !== 'undefined') {
      // Use existing gateway
      window.web3 = new Web3(window.ethereum);
     
    } else {
      alert("No Ethereum interface injected into browser. Read-only access");
    }

    window.ethereum.enable()
      .then(function (accounts) {
        window.web3.eth.net.getNetworkType()
        // checks if connected network is mainnet (change this to rinkeby if you wanna test on testnet)
        .then((network) => {console.log(network);if(network != "main"){alert("You are on " + network+ " network. Change network to mainnet or you won't be able to do anything here")} });  
        let wallet = accounts[0]
        setWalletAddress(wallet)
        setSignedIn(true)
        callContractData(wallet)

  })
  .catch(function (error) {
  // Handle error. Likely the user rejected the login
  console.error(error)
  })
  }

//

  async function signOut() {
    setSignedIn(false)
  }
  
  async function callContractData(wallet) {
    // let balance = await web3.eth.getBalance(wallet);
    // setWalletBalance(balance)
    const starfishContract = new window.web3.eth.Contract(ABI, ADDRESS)
    setStarfishContract(starfishContract)

    const salebool = await starfishContract.methods.saleIsActive().call() 
    // console.log("saleisActive" , salebool)
    setSaleStarted(salebool)

    const totalSupply = await starfishContract.methods.totalSupply().call() 
    setTotalSupply(totalSupply)

    const starfishPrice = await starfishContract.methods.starfishPrice().call() 
    setStarfishPrice(starfishPrice)
   
  }
  
  async function mintStarfish(how_many_starfish) {
    if (starfishContract) {
 
      const price = Number(starfishPrice)  * how_many_starfish

      const gasAmount = await starfishContract.methods.mintSuperStarfish(how_many_starfish).estimateGas({from: walletAddress, value: price})
      console.log("estimated gas",gasAmount)

      console.log({from: walletAddress, value: price})

      bananaContract.methods
            .mintSuperStarfish(how_many_starfish)
            .send({from: walletAddress, value: price, gas: String(gasAmount)})
            .on('transactionHash', function(hash){
              console.log("transactionHash", hash)
            })
          
    } else {
        console.log("Wallet not connected")
    }
    
  };

  



  return (
    <div id="bodyy" className="flex flex-col items-center min-h-screen py-2">
      <Head>
        <title>Super Starfish Minting</title>
        <link rel="icon" href="/images/favicon.ico" />

        <meta property="og:title" content="Super Starfish" key="ogtitle" />
        <meta property="og:description" content="Welcome to the beach! Super Starfish is an online community of fun loving starfish!" key="ogdesc" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:url" content="https://superstarfish.io/" key="ogurl"/>
        <meta property="og:image" content="https://superstarfish.io/images/weblogo.gif" key="ogimage"/>
        <meta property="og:site_name" content="https://superstarfish.io" key="ogsitename" />

        <meta name="twitter:card" content="summary_large_image" key="twcard"/>
        <meta property="twitter:domain" content="superstarfish.io" key="twdomain" />
        <meta property="twitter:url" content="superstarfish.io/" key="twurl" />
        <meta name="twitter:title" content="Super Starfish" key="twtitle" />
        <meta name="twitter:description" content="Welcome to the beach! Super Starfish is an online community of fun loving starfish!" key="twdesc" />
        <meta name="twitter:image" content="https://superstarfish.io/images/weblogo.gif" key="twimage" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>


      <div >
      <div className="flex items-center justify-between w-full">
            <a href="/" className=""><img src="images/large icon with face.png" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="/#about" className="text-3xl Poppitandfinchsans text-white hover:text-black m-6">About</a>
              <a href="/#story" className="text-3xl Poppitandfinchsans text-white hover:text-black m-6">Lore</a>
              <a href="/#traits" className="text-3xl Poppitandfinchsans text-white hover:text-black m-6">Traits</a>
              <a href="/#roadmap" className="text-3xl Poppitandfinchsans text-white hover:text-black m-6">Roadmap</a>
              <a href="/#team" className="text-3xl Poppitandfinchsans text-white hover:text-black m-6">Team</a>
              <a href="/#contact" className="text-3xl Poppitandfinchsans text-white hover:text-black m-6">Contact</a>
              <a href="https://discord.gg/6vhXd4MYjh" className="m-5"><img src="images/discord.png" width="45" alt=""/></a>
              <a href="https://twitter.com/superstarfishio" className="m-5"><img src="images/twitter.png" width="45" alt=""/></a>
              <a href="https://instagram.com/superstarfishio" className="m-5"><img src="images/instagram.png" width="45" alt=""/></a>
            </nav>
             
          </div>
          <div className="flex auth my-8 font-bold  justify-center items-center vw2">
            {!signedIn ? <button onClick={signIn} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Connect Wallet with Metamask</button>
            :
            <button onClick={signOut} className="montserrat inline-block border-2 border-black bg-white border-opacity-100 no-underline hover:text-black py-2 px-4 mx-4 shadow-lg hover:bg-blue-500 hover:text-gray-100">Wallet Connected: {walletAddress}</button>}
          </div>
        </div>

        <div className="md:w-2/3 w-4/5">
       
        
          <div className="mt-6 py-0">

            <div className="flex flex-col items-center">

                <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none my-5">TOTAL STARFISH MINTED:…<span className="text-blau text-6xl"> {!signedIn ?  <> -</>  :  <>{totalSupply}</> } / 10,000</span></span>

                <div id="mint" className="flex justify-around  mt-10 mx-6">
                  <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3">GIMME</span>
                  
                  
                  <input 
                                      type="number" 
                                      min="1"
                                      max="20"
                                      value={how_many_starfish}
                                      onChange={ e => set_how_many_starfish(e.target.value) }
                                      name="" 
                                      className="Poppitandfinchsans pl-4 text-4xl  inline bg-grey-lighter  py-2 font-normal rounded text-grey-darkest  font-bold"
                                  />
                  
                  <span className="flex Poppitandfinchsans text-5xl text-white items-center bg-grey-lighter rounded rounded-r-none px-3 ">Starfish!</span>
    
                </div>
                {saleStarted ? 
                <button onClick={() => mintStarfish(how_many_starfish)} className="mt-10 Poppitandfinchsans text-4xl border-6 bg-blau rounded text-white hover:text-black p-2">MINT {how_many_starfish} starfish for {(starfishPrice * how_many_starfish) / (10 ** 18)} ETH + GAS</button>        
                  : <button className="mt-10 Poppitandfinchsans text-4xl border-6 bg-blau rounded text-white hover:text-black p-2 ">SALE IS NOT ACTIVE OR NO WALLET IS CONNECTED</button>        
            
              }
                
            </div> 
            </div>
 
          </div>  
    </div>  
    )
  }