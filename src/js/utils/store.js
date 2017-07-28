export function getSourceAccount(store, address) {
  return store.wallets.wallets[address] || store.accounts.accounts[address]
}

export function sourceAccounts(store) {
  var result = []
  var account
  Object.keys(store.accounts.accounts).forEach((key) => {
    account = store.accounts.accounts[key]
    result.push({
      address: account.address,
      name: account.name,
      type: "account",
    })
  })
  var wallet
  Object.keys(store.wallets.wallets).forEach((key) => {
    wallet = store.wallets.wallets[key]
    result.push({
      address: wallet.address,
      name: wallet.name,
      type: "wallet",
    })
  })
  return result
}

export function destAccounts(store) {
  var result = sourceAccounts(store)
  return result
}
