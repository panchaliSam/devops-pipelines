const assert = require("node:assert/strict");
const { createServer } = require("./index");

async function runTests() {
  const server = createServer();

  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();

  try {
    const response = await fetch(`http://localhost:${port}`);
    const body = await response.text();

    assert.equal(response.status, 200);
    assert.match(body, /Hello World/);

    console.log("Tests passed.");
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

runTests().catch((error) => {
  console.error(error);
  process.exit(1);
});
