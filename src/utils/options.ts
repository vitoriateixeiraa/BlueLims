

export function toOptions<ItemT>(array: ItemT[] , value: keyof ItemT, label: keyof ItemT) {
  const options = array?.map((item) => {
    return {
      value: item[value],
      label: item[label],
    }
  })

  return options
}