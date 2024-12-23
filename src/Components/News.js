import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {

  articles = [
    {
      "source": {
        "id": null,
        "name": "9to5google.com"
      },
      "author": "Abner Li",
      "title": "Live Scam Detection in calls rolling out to Pixel 6-9 Phone app - 9to5Google",
      "description": "After demoing at I/O 2024 in May, Google is rolling out real-time Scam Detection for phone calls on Pixel devices.",
      "url": "http://9to5google.com/2024/11/13/pixel-phone-scam-detection/",
      "urlToImage": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2023/03/google-phone-logo-circle-3.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2024-11-13T18:00:00Z",
      "content": "After demoing at I/O 2024 in May, Google is rolling out real-time Scam Detection for phone calls on Pixel devices.\r\nScam Detection listens for conversation patterns commonly associated with scams. On… [+2020 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": "Michael C. Wright",
      "title": "Spurs say Popovich's absence due to mild stroke - ESPN",
      "description": "The Spurs provided a diagnosis and update on coach Gregg Popovich's status, saying he is continuing to recover after suffering a mild stroke Nov. 2.",
      "url": "https://www.espn.com/nba/story/_/id/42369859/gregg-popovich-recovering-nov-2-stroke-spurs-say",
      "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1125%2Fr1257598_1296x729_16%2D9.jpg",
      "publishedAt": "2024-11-13T18:00:00Z",
      "content": "SAN ANTONIO -- Spurs coach Gregg Popovich is continuing to recover after he suffered what the team called a \"mild stroke\" Nov. 2.\r\nPopovich has missed the past six games with what the team had previo… [+1137 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Jess Weatherbed",
      "title": "Amazon’s new $20 and under store is here to challenge Shein and Temu - The Verge",
      "description": "Amazon has launched a store where every product costs $20 or less in a bid to take on popular low-cost shopping apps like Temu and Shien.",
      "url": "https://www.theverge.com/2024/11/13/24295655/amazon-haul-challenges-shein-and-temu-bargain-webstore",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/OGquq2QXkhV09cQN6OquxC9d0mw=/0x0:767x431/1200x628/filters:focal(384x216:385x217)/cdn.vox-cdn.com/uploads/chorus_asset/file/25730925/Amazon_Haul_discount_webstore.jpg",
      "publishedAt": "2024-11-13T17:32:28Z",
      "content": "Amazons new $20 and under store is here to challenge Shein and Temu\r\nAmazons new $20 and under store is here to challenge Shein and Temu\r\n / Amazon Haul offers crazy low pricing on everyday items in … [+2144 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Isaac Schultz",
      "title": "First-Ever Amber Found in Antarctica Unlocks Secrets of Cretaceous Rainforest - Gizmodo",
      "description": "The 90-million-year-old resin offers a rare trace of a long-lost ecosystem.",
      "url": "https://gizmodo.com/first-ever-amber-found-in-antarctica-unlocks-secrets-of-cretaceous-rainforest-2000524023",
      "urlToImage": "https://gizmodo.com/app/uploads/2024/11/amber-antarctica-microscope.jpg",
      "publishedAt": "2024-11-13T17:31:24Z",
      "content": "Today, Antarctica is a huge frozen continent, though it was once temperate enough to be covered in swampy forests. Now, a team of scientists has discovered fossilized tree resinamberon the continent … [+3124 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NBCSports.com"
      },
      "author": "Josh Alper",
      "title": "Colts reverse course, make Anthony Richardson their starting QB - NBC Sports",
      "description": "Richardson will return to the starting lineup after spending two games on the bench.",
      "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/colts-reverse-course-make-anthony-richardson-their-starting-qb",
      "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/a3ef213/2147483647/strip/true/crop/5630x3167+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F8f%2Fd3%2F4524d6ba4f64896c80547536ed5f%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2183889294",
      "publishedAt": "2024-11-13T16:45:06Z",
      "content": "Colts head coach Shane Steichen said on Sunday and Monday that Joe Flacco would start at quarterback against the Jets on Sunday, but he revealed a new plan during his press conference on Wednesday. \r… [+932 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Kevin Liptak",
      "title": "‘Welcome back’: Biden offers Trump the smooth transition he never got as president-elect returns to the White House - CNN",
      "description": "The last time Donald Trump was in the Oval Office, he scrawled out a two-page letter to Joe Biden in his distinctive jagged penmanship, slipped it into the drawer of the Resolute Desk and — notwithstanding the note’s surprisingly gracious tone — walked away f…",
      "url": "https://www.cnn.com/2024/11/13/politics/trump-biden-white-house-meeting/index.html",
      "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/c-2024-11-13t162121z-1307122410-rc2g4bashykm-rtrmadp-3-usa-trump-biden.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-11-13T16:45:00Z",
      "content": "The last time Donald Trump was in the Oval Office, he scrawled out a two-page letter to Joe Biden in his distinctive jagged penmanship, slipped it into the drawer of the Resolute Desk and notwithstan… [+7495 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Lucia Mutikani",
      "title": "Higher shelter costs lift US consumer prices in October - Reuters",
      "description": "U.S. consumer prices increased as expected in October amid higher costs for shelter such as rents, and progress towards low inflation has slowed since mid-year, which could result in fewer interest rate cuts from the Federal Reserve next year.",
      "url": "https://www.reuters.com/markets/us/us-consumer-prices-rise-expected-october-2024-11-13/",
      "urlToImage": "https://www.reuters.com/resizer/v2/LNBP5HQIOZK5VFPY5YSMYIILJY.jpg?auth=ff7fc23a52eb2201fe84647711ea58e81073aa6c53ebce44f71691fd5ca2343d&height=1005&width=1920&quality=80&smart=true",
      "publishedAt": "2024-11-13T16:29:04Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Phys.Org"
      },
      "author": "University of Cambridge",
      "title": "Bird brain from the age of dinosaurs reveals roots of avian intelligence - Phys.org",
      "description": "A 'one of a kind' fossil discovery could transform our understanding of how the unique brains and intelligence of modern birds evolved, one of the most enduring mysteries of vertebrate evolution.",
      "url": "https://phys.org/news/2024-11-bird-brain-age-dinosaurs-reveals.html",
      "urlToImage": "https://scx2.b-cdn.net/gfx/news/hires/2024/archaeopteryx.jpg",
      "publishedAt": "2024-11-13T16:00:01Z",
      "content": "A 'one of a kind' fossil discovery could transform our understanding of how the unique brains and intelligence of modern birds evolved, one of the most enduring mysteries of vertebrate evolution.\r\nRe… [+6590 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Variety"
      },
      "author": "Alex Ritman",
      "title": "Paul Mescal’s Road to ‘Gladiator II’: Rejecting ‘Big Studio Franchise-y’ Offers, Convincing Ridley Scott to Let Him Do His Own Stunts and More - Variety",
      "description": "Paul Mescal tells all on making \"Gladiator 2\" and convincing Ridley Scott to let him film his own stunts.",
      "url": "https://variety.com/2024/film/news/paul-mescal-gladiator-2-stunts-hollywood-offers-1236207734/",
      "urlToImage": "https://variety.com/wp-content/uploads/2024/11/Paul-Mescal-Variety-Cover-Story-2.jpg?crop=0px%2C109px%2C1920px%2C1080px&resize=1000%2C563",
      "publishedAt": "2024-11-13T16:00:00Z",
      "content": "While I wait to meet up with Paul Mescal, eight men in short shorts walk past on the street. It may be a surprisingly sunny late September morning in London, but it’s cold — not the weather for expos… [+23402 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": null,
      "title": "Pete Hegseth: Trump names Fox News host as defence secretary pick - BBC.com",
      "description": "Hegseth, who is also a former soldier without political experience, will lead the world's most powerful military.",
      "url": "https://www.bbc.com/news/articles/c937ndxvkggo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/9031/live/99d3e010-a1a5-11ef-bd13-219c531a3ae2.jpg",
      "publishedAt": "2024-11-13T15:58:33Z",
      "content": "US President-elect Donald Trump has named Pete Hegseth, a Fox News host, author and military veteran, as his pick for defence secretary.\r\nHegseth, 44, who served in Afghanistan and Iraq, will be resp… [+5685 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "PBS"
      },
      "author": null,
      "title": "Trump picks Mike Huckabee for ambassador to Israel. Here are 4 things to know - PBS NewsHour",
      "description": "Former Arkansas Gov. Mike Huckabee has long rejected a Palestinian state in territory previously seized by Israel and has repeatedly signaled his staunch support for Israeli Prime Minister Benjamin Netanyahu.",
      "url": "https://www.pbs.org/newshour/world/trump-picks-mike-huckabee-for-ambassador-to-israel-here-are-4-things-to-know",
      "urlToImage": "https://d3i6fh83elv35t.cloudfront.net/static/2024/11/2024-11-12T212836Z_1812193927_RC2LUAAQPWY3_RTRMADP_3_USA-TRUMP-ISRAEL-AMBASSADOR-1024x702.jpg",
      "publishedAt": "2024-11-13T15:39:50Z",
      "content": "Former Arkansas Gov. Mike Huckabee, President-elect Donald Trump’s pick to be ambassador to Israel, has long rejected a Palestinian state in territory previously seized by Israel and has repeatedly s… [+4816 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Forbes"
      },
      "author": "Ty Roush",
      "title": "Dogecoin Jumps Toward Three-Year High After Trump Announces ‘Department Of Government Efficiency’ - Forbes",
      "description": "The meme cryptocurrency eclipsed a threshold for the first time since  2021.",
      "url": "https://www.forbes.com/sites/tylerroush/2024/11/13/dogecoin-jumps-toward-three-year-high-after-trump-announces-department-of-government-efficiency/",
      "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6734c64a8e390caee4772233/0x0.jpg?format=jpg&crop=1830,1029,x0,y93,safe&height=900&width=1600&fit=bounds",
      "publishedAt": "2024-11-13T15:32:20Z",
      "content": "Dogecoin rose on Wednesday across a threshold the cryptocurrency has not eclipsed since 2021, after President-elect Donald Trump tapped Elon Muskwho has touted the token in recent yearsto lead the ne… [+2842 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Eurogamer.net"
      },
      "author": "Victoria Kennedy",
      "title": "Lego Horizon Adventures casts Star Trek: Voyager actor as Sylens - Eurogamer",
      "description": "Following the passing of Sylens' original actor Lance Reddick last year, Lego Horizons Adventures has recast the role.",
      "url": "https://www.eurogamer.net/lego-horizon-adventures-casts-star-trek-voyager-actor-as-sylens",
      "urlToImage": "https://assetsio.gnwcdn.com/Sylens-in-Lego-Horizon-Adventures.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "publishedAt": "2024-11-13T15:29:39Z",
      "content": "Following the passing of Sylens' original actor Lance Reddick last year, Lego Horizon Adventures has recast the role.\r\nIn the latest Horizon outing, the character is voiced by Tim Russ, Eurogamer can… [+1635 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": "Tom Balmforth",
      "title": "Senior Russian naval officer killed in car bombing claimed by Kyiv - Reuters",
      "description": "A bomb planted under a car blew up and killed a senior Russian naval officer in occupied Crimea's city of Sevastopol on Wednesday, in what a Kyiv security source said was a Ukrainian hit on one of its highest-ranking targets to date.",
      "url": "https://www.reuters.com/world/europe/senior-russian-naval-officer-killed-car-bomb-hit-claimed-by-kyiv-2024-11-13/",
      "urlToImage": "https://www.reuters.com/resizer/v2/466BJJQ7PVGY5O53NZ3KL65MHM.png?auth=b9c3bf166c40a6778eb5672993fde7c30a15f48329026674eff92afd8da1d0ca&height=1005&width=1920&quality=80&smart=true",
      "publishedAt": "2024-11-13T15:21:32Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Hollywood Reporter"
      },
      "author": "Hilary Lewis",
      "title": "‘Full House’ Star Dave Coulier Reveals He Has Stage 3 Non-Hodgkin Lymphoma - Hollywood Reporter",
      "description": "\"I went from, I got a little bit of a head cold to I have cancer,\" the actor and comedian says of his diagnosis, as he's trying to stay positive.",
      "url": "http://www.hollywoodreporter.com/news/general-news/full-house-dave-coulier-cancer-non-hodgkin-lymphoma-stage-3-1236060572/",
      "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/11/GettyImages-6320172481.jpg?w=1296&h=730&crop=1",
      "publishedAt": "2024-11-13T15:06:54Z",
      "content": "Full House star Dave Coulier has been diagnosed with stage 3 non-Hodgkin lymphoma.\r\nThe actor and comedian tells People magazine that he was diagnosed in October after an upper respiratory infection … [+5074 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "WLWT Cincinnati"
      },
      "author": "Emily Sanderson",
      "title": "LIVE: Officials give update after 2 dead, several hurt in explosion at Louisville plant - WLWT Cincinnati",
      "description": "Eleven people have been taken to the hospital after an explosion at a plant in Louisville, Kentucky.",
      "url": "https://www.wlwt.com/article/report-building-explosion-louisville-kentucky/62885738",
      "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/screenshot-2024-11-12-154150-6733bd96caf41.png?crop=0.982xw:1.00xh;0.00962xw,0&resize=1200:*",
      "publishedAt": "2024-11-13T14:53:00Z",
      "content": "LOUISVILLE, Ky. —Two people have died and 11 others were injured after an explosion at a plant in Louisville, Kentucky. One person had to be rescued from inside the building.\r\nIt happened around 3 p.… [+3029 chars]"
    },
    {
      "source": {
        "id": "ars-technica",
        "name": "Ars Technica"
      },
      "author": "Beth Mole",
      "title": "Teen in critical condition with Canada’s first human case of H5 bird flu - Ars Technica",
      "description": "The teen had no clear exposures to animals. No contacts have tested positive.",
      "url": "https://arstechnica.com/health/2024/11/teen-in-critical-condition-with-canadas-first-human-case-of-h5-bird-flu/",
      "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2024/11/GettyImages-1258623153-1152x648.jpg",
      "publishedAt": "2024-11-13T14:51:41Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "Niners Nation"
      },
      "author": "Kyle Posey",
      "title": "Updated NFC playoff standings: We’re starting to see who the pretenders are - Niners Nation",
      "description": "We believe the cream of the crop involves 3 NFC playoff teams. Breaking down the NFC playoff teams into 4 Tiers",
      "url": "https://www.ninersnation.com/2024/11/13/24294965/49ers-lions-packers-updated-nfc-playoff-standings",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/RYAWSZouzsJhQUDw-rxOugTcbOY=/0x0:5400x2827/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25730544/2184048356.jpg",
      "publishedAt": "2024-11-13T14:30:00Z",
      "content": "In a pivotal NFC contest, the San Francisco 49ers handled business this past Sunday against the Tampa Bay Buccaneers. The Niners are now a game over .500 and 3-3 in the NFC. The Bucs' loss dropped th… [+7203 chars]"
    }
  ]

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true
    }
  }

  async componentDidMount() {

    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=2f43a10c58a14c76aff40e29b58caddd"
    let data = await fetch(url); 

    let parsedData = await data.json()
    this.setState({articles:parsedData.articles})

  }


  render() {
    return (
      <div>
        <div className="container my-3">

          <h1>NewsMonkey - Top Headlines</h1>
          <div className="row">
            {this.state.articles.map((element) => {

              return <div className="col-md-4 mt-3">
                <NewsItem key={element.url} title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>

            })}



          </div>

        </div>
      </div>
    );
  }

}
