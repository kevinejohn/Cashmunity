# Cashmunity

A Bitcoin Cash Community.

This lightweight backend scans and normalizes the Bitcoin Cash blockchain for specific protocol transactions and provides easy query endpoints.

Protocols currently supported:
- Memo          (as of May 9th 2018 https://memo.cash/protocol)
- Blockpress    (v1.2 as of May 9th 2018 https://www.blockpress.com/developers/blockpress-protocol)




# Prerequisites

- Bitcoin node (ABC, Unlimited, etc)

# Run

```
npm install

cp config.example.yaml config.yaml

# Edit config.yaml

npm start

# Wait until fully synced
# Visit http://localhost:8081/all
```

# Endpoints

```
GET:
/messages/:address
/replies/:txid
/likes/:address
/name/:address
/follows/:address
/feed/:address
/all

POST:
/post    { tx: 'hexstring' }
```

# Notes

- All message fields return back raw hex data so it can be decoded in any format you want (Example: hex to ascii/utf8)
- As of May 9th 2018 (block # 529529) it takes about 7 minutes to fully sync all messages to a sqlite database using a local Bitcoin node.

### Tip jar

bitcoincash:qq6zhhvc8wy90a306d8py4eqd49rcu58qvr04xee5y
