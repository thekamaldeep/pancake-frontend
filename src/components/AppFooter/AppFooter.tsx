import React from 'react'
import { Text } from '@pancakeswap/uikit'
import Twitter from './Icons/Twitter'

export const AppFooter = () => {
  return (
    <>
      <div className="app-footer">
        <div className="footer-links">
          <a href="https://twitter.com/CryptoSpacepies" target="_blank" rel="noreferrer" className="myClass">
            <Twitter color="#7A6EAA" height={30} width={30} />
          </a>
          <Text color="turquoise" fontFamily="Super Tasty">
            SpacePies
          </Text>
        </div>
      </div>
      <a href="https://www.safemoon.net" target="_blank" rel="noreferrer" className="buy-safemoon-btn">
        Buy Safemoon
      </a>
    </>
  )
}
