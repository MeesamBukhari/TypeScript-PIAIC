function wait(timeToWait: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resolve);
    }, timeToWait);
  });
}

async function app() {
  await wait(400);
  console.log("I waited for 4 seconds");
  await wait(100);
  console.log("I waited for 1 second");
  await wait(1000);
  console.log("I waited for 10 seconds");
}

app();

// ======================================