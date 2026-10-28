export const contactEmail = "admin@theblockcapitol.com";
export const contactEmailUrl = `mailto:${contactEmail}`;
export const whatsappUrl =
  "https://chat.whatsapp.com/DxFc0h7uzye0RVtWAHQtHW?s=cl&p=a&mlu=4&ilr=4&iam=2";
export const buildSeries = {
  title: "The BlockCapitol Build Series",
  dates: "November 9, 10 & 12, 2026",
  time: "10:00 AM – 1:00 PM daily",
  venue: "The BlockCapitol, Kaduna",
  rsvpUrl: "https://luma.com/wriypu2h",
  flyer: "/build-series-kaduna.png",
};
export const edgeWalletEvent = {
  title: "Edge Wallet at The BlockCapitol",
  organizer: "Edge Wallet",
  venue: "The BlockCapitol, Kaduna",
  logo: "/partners/edge-wallet-logo.png",
  description:
    "A look back at a community event organized by Edge Wallet at our hub, bringing people together to learn, share ideas, and connect.",
  photos: [
    {
      src: "/events/edge-wallet-community.jpg",
      alt: "Participants together at the Edge Wallet event, holding Edge-branded boxes and stickers",
      caption: "A community brought together by Edge Wallet.",
    },
    {
      src: "/events/edge-wallet-session.jpg",
      alt: "Attendees seated around a table with Edge-branded materials during the event at The BlockCapitol",
      caption: "Conversations, shared learning, and new connections.",
    },
  ],
};
export const partners = [
  {
    name: "Africa’s Talking",
    role: "Build Series partner",
    logo: null,
    href: "/events#build-series-kaduna",
    action: "Explore the Build Series",
  },
  {
    name: "Edge Wallet",
    role: "Community event organizer and partner",
    logo: edgeWalletEvent.logo,
    href: "/events#edge-wallet-community",
    action: "See the past event",
  },
];
export const courses = [
  {
    title: "Blockchain fundamentals",
    description:
      "Understand how blockchains work, the different types of networks, and applications including decentralised finance and NFTs.",
  },
  {
    title: "Wallets, nodes & cryptography",
    description:
      "Learn how wallets and nodes connect to a blockchain. Explore the cryptographic principles that keep transactions secure.",
  },
  {
    title: "Ethereum tokens",
    description:
      "Explore fungible and non-fungible tokens. Create ERC-20 and ERC-721 tokens using Solidity and OpenZeppelin.",
  },
  {
    title: "Solidity & the EVM",
    description:
      "Understand the Ethereum Virtual Machine, gas, and smart contract execution. Write your first contracts in Solidity.",
  },
  {
    title: "Testing & deployment",
    description:
      "Test contracts with Hardhat and Foundry, deploy to test networks, and learn practical checks before production.",
  },
  {
    title: "dApps & Web3 integration",
    description:
      "Connect a frontend to smart contracts using tools such as Ethers.js and Wagmi. Read contract data and send transactions.",
  },
  {
    title: "Contract security & architecture",
    description:
      "Explore common vulnerabilities, upgradeable contracts, Layer 2 networks, and cross-chain applications. Bring your learning together in a capstone project.",
  },
  {
    title: "Oracles & data indexing",
    description:
      "Connect contracts to external data with Chainlink and explore indexing blockchain data with The Graph.",
  },
];
