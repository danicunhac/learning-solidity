import { ethers } from "hardhat";

describe("TestGas", function () {
  it("Test", async function () {
    // 1. Setup
    // 2. Deploy our contract
    // 3. Call our functions to test
    const Gas = await ethers.getContractFactory("TestGas");
    const gas = await Gas.deploy();
    await gas.deployed();

    for (let i = 0; i < 10; ++i) {
      await gas.test1();
      await gas.test2();
      await gas.test3();
      await gas.test4();
      await gas.test5();
    }
  });
});
