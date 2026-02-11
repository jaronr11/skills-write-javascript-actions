import * as core from "@actions/core";
import * as github from "@actions/github";
import getJoke from "./joke.js";

async function run() {
  const joke = await getJoke();
  console.log(joke);
  core.setOutput("joke", joke);
}

run();
