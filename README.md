# ATProto Sandbox

This repo was initialized as "CUP-ATProto." The vision is to create a social check-in application for coffee lovers, built on top of the [ATProtocol](https://atproto.com/)--an open, decentralized network for building social applications. 

Use-case, format, and experience will be similar to  [Untappd](https://untappd.com/), but will focus on third-wave coffee rather than on craft beer.

At this early stage, this project serves as a sandbox environment as I get up to speed on authenticating with ATProto.

I am using the example app found [in the ATProto Docs](https://atproto.com/guides/applications) as a guide.

## First Steps
First steps include:
  1. Develop a basic [Express](https://expressjs.com/) server with an authentication route
  2. Install [Envalid](https://www.npmjs.com/package/envalid) and leverage this as a wrapper for environment variables
  3. Install [better-SQLite3](https://www.npmjs.com/package/better-sqlite3) and [kysely](https://www.npmjs.com/package/kysely); generate in-memory DB for storing user data returned from the network
  4. Install [atproto/oauth-client-node](https://www.npmjs.com/package/@atproto/oauth-client-node) and develop oauth client and flow
  5. Develop auth endpoint for user login with oauth client

