import Head from 'next/head'

export default function Home() {

  return (
    <div id="bodyy" className="flex flex-col items-center justify-center min-h-screen py-2">
 <Head>
        <title>Super Starfish</title>
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
            <a href="/" className=""><img src="images/weblogo.gif" width="108" alt="" className="logo-image" /></a>
            <nav className="flex flex-wrap flex-row justify-around Poppitandfinchsans">
              <a href="/mint" className="text-3xl Poppitandfinchsans text-white hover:text-black m-6 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white bg-blau">MINT!</a>
              <a href="#about" className="text-3xl Poppitandfinchsans text-white hover:text-black m-6">About</a>
              <a href="#lore" className="text-3xl Poppitandfinchsans text-white hover:text-black m-6">Lore</a>
              <a href="#traits" className="text-3xl Poppitandfinchsans text-white hover:text-black m-6">Traits</a>
              <a href="#roadmap" className="text-3xl Poppitandfinchsans text-white hover:text-black m-6">Roadmap</a>
              <a href="#team" className="text-3xl Poppitandfinchsans text-white hover:text-black m-6">Team</a>
              <a href="#contact" className="text-3xl Poppitandfinchsans text-white hover:text-black m-6">Contact</a>
              <a href="https://discord.gg/6vhXd4MYjh" className="m-5"><img src="images/discord.png" width="45" alt=""/></a>
              <a href="https://twitter.com/superstarfishio" className="m-5"><img src="images/twitter.png" width="45" alt=""/></a>
              <a href="https://instagram.com/superstarfishio" className="m-5"><img src="images/instagram.png" width="45" alt=""/></a>
            </nav>
             
          </div>
          
        </div>

        <div className="md:w-2/3 w-4/5 " id="about">
       
        
          <div className="mt-6">
            <div className="flex flex-wrap lg:flex-nowrap justify-around items-center">
                  <div className="lg:w-1/2 w-3/4">
                    <h1 className="text-7xl Poppitandfinchsans text-white ">Welcome To The Beach... <br/><span className="text-white"></span></h1>
                    <p className="text-2xl text-white my-6  Poppitandfinchsans">Head on down to the Bungalow Bar and grab yourself a drink! Throw down a towel and soak in the magnificent rays of the Sloppy Shores! Or Party like a super star in the starfish club! 
                    </p>
                    <p className="text-2xl text-white my-6  Poppitandfinchsans">No matter your vibe, there is a exciting community waiting to welcome you on Asteroid Island! We are sure you will love you stay!
                    </p>
                    <p className="text-3xl text-white my-6 Poppitandfinchsans">
                    <p>LAUNCH DATE:</p>Steptember 18 2021. 7AM EST
                    <span className="text-white text-2xl Poppitandfinchsans"><p>TOTAL SUPPLY: 10,000 Starfish</p><p>PRICE: 0.05 ETH each.</p></span></p>
                    <iframe src="https://free.timeanddate.com/countdown/i7yakgf1/n179/cf11/cm0/cu4/ct0/cs1/ca0/co0/cr0/ss0/cacfff/cpcfff/pct/tcfff/fn3/fs100/szw448/szh189/iso2021-09-18T07:00:00" allowtransparency="true" frameborder="0" width="438" height="25"></iframe>

                  </div>
                  <img className="lg:w-2/3 w-3/4" src="images/new gif.gif" width="500px" />
            </div>
            <div className="flex flex-col items-center">

            <a href="/mint" className="mt-4 Poppitandfinchsans text-6xl border-6 bg-blau  text-white hover:text-black p-4 px-4 py-3 rounded ">GO TO MINTING PAGE!</a>
                
                
            </div> 
            </div>



    
            <div id="lore" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className=""><img src="images/ecosystem.png" alt="" width="400px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-10 sm:w-1/2 w-7/8 py-6">
                    <h2 className="text-blau Poppitandfinchsans text-6xl text-center">Everything in the starfish ecosystem is changing...</h2>
                    <p className="text-2xl text-white my-6  Poppitandfinchsans">As greed, gluttony, and materialism devoured the human race, chaos erupted around the globe. Government institutions became corrupt, leading to the total collapse of the global economy. Tribal instincts began to kick in as humans went full ape mode. With that came negligence for the environment and an even further divide in the population. This would be the beginning of the end for the human race...
                    </p>
                    <p className="text-2xl text-white my-6  Poppitandfinchsans">People rushed to pick up the falling pieces of society, but the economic downturn was too great. The collapse of society would set human progress back nearly 1000 years. But not only was society ruined, humans neglected one of the most essential resources during the collapse... The water supply. With pollution of the water occurring for nearly 100 years prior, the option to save the oceans was too late. Every corner of the ocean had been effected by human pollution, even Asteriod Island.
                    </p>
                    <p className="text-2xl text-white my-6  Poppitandfinchsans">On Asteroid island lived a healthy population of starfish, that was until the pollution effected their ecosystem. At first natural selection quickly killed the ones who were not fit enough to survive, but over time the starfish would learn to adapt. This abrupt change in their ecosystem led to starfish evolving much faster than their other animal counterparts. Mutations led to starfish growing faster and learning quicker than before. As the species developed and began to understand their environment, they realized the devastating effects the pollution had on their ecosystem. That is when the starfish seeked to conquer the species that fucked their world up...
                    </p>
                    <p className="text-2xl text-white my-6  Poppitandfinchsans">The starfish traveled to the fallen world to seek revenge for the fall of their ecosystem. They eradicated all humans and took over their culture. Once every human was gone, the newly evolved starfish could now live in great paradise at asteroid island and happily sit at the top of the food chain.
                    </p>
                  </div>
                </div>
                
                <div id="traits" className="   mx-6 py-6">
                    <h2 className="text-blau Poppitandfinchsans text-8xl text-center">Super Starfish Traits</h2>
                    <p className="text-5xl text-white text-center my-3 Poppitandfinchsans"> Over 9.4 Million Combinations Of Starfish! <span className="font-bold"> </span>  
              </p>
                    <p className="text-2xl text-white text-center my-3 Poppitandfinchsans"> (Look out for 75 easter egg starfish!) <span className="font-bold"> </span>  
              </p>
                  <div className="flex flex-wrap  items-center mx-6   py-6 ">
                      <div className=""><img src="images/traits.png" alt="" className="feature-image"/></div>

                  </div>
                </div>

              <div id="roadmap" className="">
                <h2 className="text-blau Poppitandfinchsans text-8xl text-center">Roadmap</h2>
                <img src="/images/Roadmap.png"/>
              <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">OUR MISSION STATEMENT</h2>
              <p className="text-xl text-white text-center my-6  montserrat"> The super starfish community is dedicated to creating a fun fulfilling experience for everyone to be a part of. We want to inspire everyone to self-improve and take an active role in bettering the world around them, and that starts with connecting with others in the community. We want this community to not only thrive but to be an outlet during these crazy times. This includes things like community events, giveaways, games, culture, and content! Stay tuned for more updates in the future! 
              </p>
              <p className="text-xl text-white text-center my-6  montserrat"> Not only that, we want to donate a portion of the proceeds to an ocean protection charity (to be determined in the future) and also reinvest back into the nft space. We want to use the new power of nfts to help other artists, creators, and communities create new and exciting opportunities! Join us for the wild ride!
              </p>
              </div>
              
              <div id="team" className="mx-12 my-16 ">
                <h2 className="text-7xl text-center Poppitandfinchsans text-blau my-4">Starfish Exploration Team</h2>
                <div className="flex justify-around flex-wrap">
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/mike.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">Mike Powers</h3>
                    <a href="https://twitter.com/ItsMikePowers" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> @itsmikepowers</a>   
                    <a href="https://www.youtube.com/channel/UCJJqeW8My07X2r_WXokg-Cw" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> @Mike Powers</a>                </div>
                  <div className="flex flex-col  my-6" style={{width:"360px"}}>
                    <div className="cards-image-mask"><img src="/images/cesare.png" width="360px" alt="" className="cards-image" /></div>
                    <h3 className="my-4 text-center text-5xl text-center Poppitandfinchsans text-blau">Cesare Joseph</h3>
                    <a href="https://twitter.com/cesare_joseph" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> @cesare_joseph</a> 
                    <a href="https://www.youtube.com/channel/UCUule8U1d9olga5JhZUxGDg" className="text-center text-4xl text-center Poppitandfinchsans underline text-white"> @Cesare Joseph</a>                 </div>
                
                </div>
       


              </div>   
              <div id="contact" className="flex flex-wrap justify-around items-center  mx-6 py-6">
                  <div className=" p-4"><img src="images/contact.png" alt="" width="400px" className="feature-image"/></div>
                  <div className="flex flex-col justify-between mx-6 sm:w-1/2 py-6 ">
                    <h2 className="text-blau Poppitandfinchsans text-6xl text-center">Contact The Starfish Exploration Team</h2>
                    <p className="text-2xl text-white my-6  Poppitandfinchsans"> If you have any questions feel free to contact us! We would love to hear from you! 
                    </p>
                    <p className="text-2xl text-white my-6  Poppitandfinchsans"> Email us at <a className="text-blau underline font-bold" target="_blank" href="mailto:superstarfishnft@protonmail.com">superstarfishnft@protonmail.com</a>,<br/>
                    or reach out to us on Twitter <a className="text-2xl text-blau underline font-bold" target="_blank" href="https://twitter.com/superstarfishio">@SuperStarfishIO</a><br/> 
                    or  reach out to us on Instagram <a className="text-2xl text-blau underline font-bold" target="_blank" href="https://www.instagram.com/superstarfishio/">@SuperStarfishIO</a><br/> 
                    or, join our <a className="text-2xl text-blau underline font-bold" target="_blank" href="https://discord.gg/6vhXd4MYjh">Discord Server</a>.
                    </p>
                  </div>
       


              </div>   
          </div>  
    </div>  
    )
  }