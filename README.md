# SolTick
La inspiración detrás de SolTick surge de la necesidad de combatir fraudes en la venta de boletos y brindar transparencia al mercado. Utilizando la tecnología blockchain, cada boleto se tokeniza como un NFT, asegurando su autenticidad y evitando prácticas fraudulentas. La plataforma conecta a promotores, artistas, usuarios y revendedores en un ecosistema seguro. Además, la inclusión de royalties en cada transacción NFT beneficia a los creadores y añade un componente exclusivo mediante el diseño gráfico único de cada boleto, que permite a los usuarios venderlos a coleccionistas o conservarlos como recuerdo.

## Logo
![SolTickLogo](https://github.com/ericksgv/SolTick/assets/103967100/687d58a4-748f-4112-a8bc-c02ed1437738)

## Diagrama de la solución:

![DiagramaDeSolución](https://github.com/ericksgv/SolTick/assets/103967100/ac5ca8e4-6656-4a18-9dff-93eb08f2ca18)

SolTick revoluciona la venta de boletos utilizando tecnología blockchain y NFTs, asegurando autenticidad y eliminando fraudes. Conectamos promotores, artistas y usuarios en un mercado transparente. Los NFT generan regalías y ofrecen arte exclusivo a los fanáticos después del evento.

This project is generated with the [create-solana-dapp](https://github.com/solana-developers/create-solana-dapp) generator.

## Getting Started

### Prerequisites

- Node v18.18.0 or higher

- Rust v1.70.0 or higher
- Anchor CLI 0.29.0 or higher
- Solana CLI 1.17.0 or higher

### Installation

#### Clone the repo

```shell
git clone <repo-url>
cd <repo-name>
```

#### Install Dependencies

```shell
pnpm run install
```

#### Start the web app

```
pnpm run dev
```

## Apps

### anchor

This is a Solana program written in Rust using the Anchor framework.

#### Commands

You can use any normal anchor commands. Either move to the `anchor` directory and run the `anchor` command or prefix the command with `pnpm run`, eg: `pnpm run anchor`.

#### Sync the program id:

Running this command will create a new keypair in the `anchor/target/deploy` directory and save the address to the Anchor config file and update the `declare_id!` macro in the `./src/lib.rs` file of the program.

You will manually need to update the constant in `anchor/lib/counter-exports.ts` to match the new program id.

```shell
pnpm run anchor keys sync
```

#### Build the program:

```shell
pnpm run anchor-build
```

#### Start the test validator with the program deployed:

```shell
pnpm run anchor-localnet
```

#### Run the tests

```shell
pnpm run anchor-test
```

#### Deploy to Devnet

```shell
pnpm run anchor deploy --provider.cluster devnet
```

### web

This is a React app that uses the Anchor generated client to interact with the Solana program.

#### Commands

Start the web app

```shell
pnpm run dev
```

Build the web app

```shell
pnpm run build
```
