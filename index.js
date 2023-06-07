const core = require('@actions/core');
const github = require('@actions/github');
// hello 2

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  const issue_title = core.getInput('issue-title');
  const issue_body = core.getInput('issue-body');
  const issue_number = core.getInput('issue-number');
  console.log(`issue_number: ${issue_number}`);
  console.log(`issue_body: ${issue_body}`);
  console.log(`issue_title: ${issue_title}`);
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
