import React, { Component } from "react";
class BlockChain extends Component {
  render() {
    return (
      <section className="blockchainCon">
        <div className="container">
          <div className="columns is-wrap">
            <h2 className="mainTitle column is-12">Why Blockchain ?</h2>
            <p className="mb column is-12">
              Blockchain is at the core of this portal - Allow users to keep
              their data private during the whole process.
            </p>

            <div className="column is-6">
              <div className="box">
                <h2 className="blockchain">BLOCKCHAIN</h2>
                <h3 className="blockchainSub">IMMUTABLE</h3>
                <p>
                  It cannot be deleted/changed. Block is timestamp, secured
                  through cryptography and linked to previous block in the
                  chain.
                </p>
              </div>
            </div>
            <div className="column is-6">
              <div className="box">
                <h2 className="blockchain">BLOCKCHAIN</h2>
                <h3 className="blockchainSub">PERMISSIONED</h3>
                <p>
                  Controlling access and identity management are key in
                  permissioned network. Cryptographic membership cards represent
                  their identity and grants access to see the transactions that
                  pertain to them.
                </p>
              </div>
            </div>
            <div className="column is-6">
              <div className="box">
                <h2 className="blockchain">BLOCKCHAIN</h2>
                <h3 className="blockchainSub">AGAINST FRAUD</h3>
                <p>
                  Fraud isn't a problem one can ignore. In addition to being
                  costly, decreases employee morale and create an unstable
                  business environment as well as undermine ones business and
                  consumer relationship. Use blockchain transparency to take a
                  stand in
                </p>
              </div>
            </div>
            <div className="column is-6">
              <div className="box">
                <h2 className="blockchain">BLOCKCHAIN</h2>
                <h3 className="blockchainSub">OPTIMIZE ECOSYSTEMS</h3>
                <p>
                  Facilitating transactions with suppliers, partners and
                  customers helps streamline business processes and
                  transactions.
                </p>
              </div>
            </div>
            <div className="column is-12">
              <p className="mb">
                Authentic accounts of Organisations, Labs, Users which can be
                traced back to their origin.
              </p>
            </div>
            <div className="column is-6">
              <p className="box">
                Complete privacy of users documents, Each document is encrypted
                with users keys. No relationship can be drawn from different
                certificates of same user, organisation or Labs.
              </p>
            </div>
            <div className="column is-6">
              <p className="box">
                No relationship can be drawn from different certificates of same
                user, organisation or Labs. Complete privacy of users documents,
                Each document is encrypted with users keys.
              </p>
            </div>
            <div className="column is-12">
              <p className="mb">
                No relationship can be drawn from different certificates of same
                user, organisation or Labs.
              </p>
            </div>
            <div className="column is-6">
              <p className="box">
                Authentic accounts of Organisations, Labs, Users which can be
                traced back to their origin. Authentic accounts of
                Organisations, Labs, Users which can be traced back to their
                origin. Authentic accounts of Organisations, Labs, Users which
                can be traced back to their
              </p>
            </div>
            <div className="column is-6">
              <p className="box">
                No relationship can be drawn from different certificates of same
                user, organisation or Labs. No relationship can be drawn from
                different certificates of same user, organisation or Labs. No
                relationship can be drawn from different certificates of same
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BlockChain;
