import OverviewImg from "@/assets/images/doc/overview.png";
import OverviewWithoutBgImg from "@/assets/images/doc/overviewWithoutBg.png";
import ArchitectureImg from "@/assets/images/doc/architecture.png";
import WorkflowImg from "@/assets/images/doc/workflow.png";

interface IArticle {
  title: string;
  content: Array<{
    type: "text" | "image" | "list";
    value: string;
    list?: string[];
  }>;
}

const DOC_DATA: Array<IArticle> = [
  {
    title: "Overview",
    content: [
      {
        type: "text",
        value:
          "The Dinero protocol is the first peer-to-peer trading protocol. The future world will be connected by Crypto, and trading will be divided into two types: Order Book Trading and Peer to Peer Trading. UniSwap represents the order book transaction protocol, while Dinero Protocol represents peer-to-peer transactions.",
      },
      {
        type: "image",
        value: OverviewImg,
      },
    ],
  },
  {
    title: "Dinero protocol VS UniSwap",
    content: [
      {
        type: "text",
        value:
          "Uniswap is based on pending orders and matching transactions through a trading order book. Suitable for standardized tokens such as stocks and Ethereum, capable of completing high-frequency on chain transactions.",
      },
      {
        type: "text",
        value:
          "In contrast, the Dinero protocol is more suitable for non-standard transactions in the market. Any transaction can be completed using the Dinero protocol. Therefore, the Dinero protocol has greater potential for widespread use. Not limited to digital assets, but also applicable to any trading scenario such as real assets, emotional assets, AI assets, etc.",
      },
      {
        type: "text",
        value:
          "And the Dinero protocol shares common features with Uniswap, namely decentralization, security, and privacy. It can effectively avoid problems such as untrustworthy intermediaries, untrustworthy platforms, and unfairness.",
      },
    ],
  },
  {
    title: "Widely applicable scenarios",
    content: [
      {
        type: "text",
        value:
          "Dinero protocol Can be applied in any trading scenario. Resolve the trust issue between both parties or even N parties in the transaction. Ensure the security of all parties' digital assets and secure completion of transactions through open-source Smart Contracts. Avoid the unfair drawbacks of traditional systems.",
      },
      {
        type: "image",
        value: ArchitectureImg,
      },
      {
        type: "list",
        value: "For example:",
        list: ["Game point trading"],
      },
      {
        type: "text",
        value:
          "Users complete transactions through Smart Contract, and both parties transfer transaction tokens and margin tokens to Smart Contract. Neither party can withdraw funds without the other party confirming the completion of the transaction. Explanation: If you wish to have a secure and trustworthy Oracle intervention, you can also choose the ZK version of Smart Contract. If the transaction is completed off chain and both parties confirm, the transaction can be successfully completed.",
      },
      {
        type: "list",
        value: "",
        list: ["Car transactions"],
      },
      {
        type: "text",
        value: `User A wishes to sell their car, assuming a value of 100000 USDT, while User B wishes to purchase it. Both parties agreed that B would first pay 100000 USDT to the smart contract as purchase funds. Meanwhile, B is concerned about A's return and demands that B also pledge 10000 USDT to the smart contract. If A reneges, A's 10000 USDT will be paid as a penalty to B. Similarly, if B reneges, B's 100000 USDT will also be compensated to A. <br />
        If the ZK version is selected, if a transaction dispute occurs, Oracle can also be applied for intervention to query and confirm the final transaction situation, ensuring fairness and impartiality in the dispute between both parties.`,
      },
    ],
  },
  {
    title: "Dinero protocol",
    content: [
      {
        type: "text",
        value:
          "The Dinero protocol is an abstraction of all transactions. Intended to provide users with safe, private, and fair transactions for anything.",
      },
      {
        type: "text",
        value: `The Dinero protocol is similar in security to Uniswap, as it is implemented as a set of persistent, non upgradable smart contracts; Intended to prioritize anti censorship, security, self hosting, and the ability to operate without any trusted intermediaries that may selectively restrict access <br />
        In order to connect with the real world, our colleague developed the ZK version protocol, which verifies off chain transactions using Zero Knowledge Proof. By using various secure and trustworthy oracle machines to closely connect on chain protocols with the off chain world, we ensure fair verification of facts and protection of on chain assets.`,
      },
    ],
  },
  {
    title: "Implementation of Dinero Protocol",
    content: [
      {
        type: "image",
        value: OverviewWithoutBgImg,
      },
      {
        type: "list",
        value: "",
        list: [
          "Only two parties participated in the operation.",
          "No one can intervene.",
          "Both parties must fully confirm the transaction before operating the assets in the contract.",
        ],
      },
      {
        type: "text",
        value: `Ensuring transaction privacy and security. Both parties can independently deploy the contract, operate the transaction independently, and ultimately complete the transaction. The disadvantage here is that there is a risk of "loss of contact", so at the beginning of the protocol design, we avoided this issue by using the seller's margin. The deposit for selling the house is also mortgaged in the contract, and there will be losses if it goes missing. Through this method, transaction security can be almost absolutely guaranteed.`,
      },
      {
        type: "text",
        value: `Dinero protocol V1:`,
      },
      {
        type: "text",
        value: `function setTradeToken(address tokenAddress) external onlyOwner <br/>
function setFeeAddress(address _feeAddress) external onlyOwner <br/>
function setPlatformFee(uint256  _platformFee) external onlyOwner <br/>
function createOrder(string memory orderId,uint256 totalPrice,int cmd)  <br/>
function payOrder(string memory orderId,uint256 totalPrice,int cmd) public <br/>
function cancelOrder(string memory orderId) public <br/>
function confirmOrderByBuyer(string memory orderId) public <br/>
function finishOrder(string memory orderId) public <br/>
`,
      },
    ],
  },
  {
    title: "Implementation of Dinero Protocol ZK",
    content: [
      {
        type: "image",
        value: WorkflowImg,
      },
      {
        type: "text",
        value: `In order to mitigate all risks, the Dinero team utilized ZKP (Zero Knowledge Proof) technology to connect the real world through oracle machines, ensuring problem-solving in case of disputes. Ensure the rights and interests of both users. At the same time, due to Oracle's intervention, it also ensures that there will be no losses to the other party caused by "one party losing contact".`,
      },
      {
        type: "text",
        value: `Dinero protocol V1:`,
      },
      {
        type: "text",
        value: `function setTradeToken(address tokenAddress) external onlyOwner <br/>
function setFeeAddress(address _feeAddress) external onlyOwner <br/>
function setPlatformFee(uint256  _platformFee) external onlyOwner <br/>
function createOrder(string memory orderId,uint256 totalPrice,int cmd)  <br/>
function payOrder(string memory orderId,uint256 totalPrice,int cmd) public <br/>
function cancelOrder(string memory orderId) public <br/>
function confirmOrderByBuyer(string memory orderId) public <br/>
function finishOrder(string memory orderId) public <br/>
`,
      },
    ],
  },
];

export default DOC_DATA;
