# dot-link
A opensource template for integration X media card allow user can interact with dapp on protocol on Bifrost inside X 


### Introduction

Sblinks rethinks how users interact with dApps directly in X. This template provides a minimal setup for embedding a dApp inside an X post using the Twitter Card component, allowing users to interact seamlessly without leaving the platform.

### What Are X Cards?

X Cards enhance Tweets by adding rich media such as photos and videos, driving traffic to your website. By including a few lines of code on your webpage, Tweets linking to your content will automatically feature a “Card” visible to followers.

In this guide, we’ll utilize the Player Card format to embed your dApp within an X post. With the Player Card, users can engage directly with the dApp without navigating away from X—an ideal solution for Web3 users


### Setup
To enable embedding your Dapp on platforms like Twitter, you need to add the following meta tags to the `index.html` file or on the top on layout in metadata . These meta tags will define how your Dapp is presented in Twitter Cards 

```html
<meta name="twitter:card" content="player" /> <!-- Type of card format used for embedding -->
<meta name="twitter:site" content="" /> <!-- Twitter handle associated with the Dapp -->
<meta name="twitter:title" content="" /> <!-- Title of the Dapp -->
<meta name="twitter:description" content="" /> <!-- Short description of the Dapp -->
<meta name="twitter:player" content="" /> <!-- Link to the Dapp -->
<meta name="twitter:player:width" content="360" />
<meta name="twitter:player:height" content="560" />
<meta name="twitter:image" content="" /> <!-- Preview image for the card -->
<meta property="og:url" content="" />
<meta property="og:title" content="test" />
<meta property="og:description" content="test" />
<meta property="og:image" content="https://app.ekubo.org/pwa-512x512.png" />
```

### Template 
In this template i use DotUI kit from Buildstation to demo , allow user mint/redeem lst token on Bifrost and Moonbeam

### Demo video 

