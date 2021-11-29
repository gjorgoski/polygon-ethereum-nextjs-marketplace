import '../styles/globals.css'
import Link from 'next/link'

function Marketplace({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">OdysseyNFT Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-purple-500">
              Marketplace
            </a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-purple-500">
              Mint new NFT
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-purple-500">
              My NFTs
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-purple-500">
              Creator Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default Marketplace