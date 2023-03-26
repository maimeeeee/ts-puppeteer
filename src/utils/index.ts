const randomIntFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min)

const sleep = async (min: number, max: number) => {
  const sleepDuration = randomIntFromInterval(min, max)
  console.log('waiting for ', sleepDuration / 1000, 'second')
  new Promise((r) => setTimeout(r, sleepDuration))
}

export { sleep }
